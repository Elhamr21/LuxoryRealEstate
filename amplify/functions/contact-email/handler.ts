import type { DynamoDBRecord, DynamoDBStreamEvent } from 'aws-lambda'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const ses = new SESClient({})

const FROM_EMAIL = process.env.SES_FROM_EMAIL || 'primeresidenz@web.de'
const FROM_NAME = process.env.SES_FROM_NAME || 'Prime Residenz'
const TO_EMAILS = uniqueEmails(parseEmailList(process.env.SES_TO_EMAILS || 'primeresidenz@web.de')).filter(isEmailLike)
const NO_VALUE = '-'

type ContactInquiryDetails = {
  reference: string
  id?: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  interest?: string
  message?: string
  createdAt?: string
}

function parseEmailList(value: string): string[] {
  return value
    .split(/[,\s;]+/)
    .map(email => email.trim())
    .filter(Boolean)
}

function uniqueEmails(emails: string[]): string[] {
  const seen = new Set<string>()
  const unique: string[] = []

  for (const email of emails) {
    const key = email.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(email)
  }

  return unique
}

function isEmailLike(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function cleanHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

function formatAddress(email: string, name?: string): string {
  const cleanEmail = cleanHeaderValue(email)
  const cleanName = name ? cleanHeaderValue(name) : ''

  if (!cleanName) return cleanEmail

  return `"${cleanName.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}" <${cleanEmail}>`
}

function sanitize(value?: string | null): string {
  return (value ?? '').replace(/[<>&"']/g, char => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;',
  }[char] || char))
}

function displayValue(value?: string): string {
  const trimmed = value?.trim()
  return trimmed || NO_VALUE
}

function textValue(value?: string): string {
  return displayValue(value).replace(/\s+/g, ' ')
}

function modelString(record: DynamoDBRecord, key: string): string {
  return record.dynamodb?.NewImage?.[key]?.S?.trim() || ''
}

function inquiryReference(id?: string): string {
  if (!id) return `PR-${Date.now()}`

  const cleanId = id.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
  if (cleanId.length <= 12) return `PR-${cleanId}`

  return `PR-${cleanId.slice(0, 8)}-${cleanId.slice(-6)}`
}

function fullName(details: ContactInquiryDetails): string {
  return `${details.firstName} ${details.lastName}`.trim()
}

function buildSubject(details: ContactInquiryDetails): string {
  const interest = details.interest ? ` - ${details.interest}` : ''

  return `Neue Prime Residenz Anfrage ${details.reference}: ${fullName(details)}${interest}`
}

function buildHtmlBody(details: ContactInquiryDetails): string {
  const rows = [
    ['Referenz', details.reference],
    ['Name', fullName(details)],
    ['E-Mail', details.email],
    ['Telefon', displayValue(details.phone)],
    ['Interesse', displayValue(details.interest)],
    ['Nachricht', displayValue(details.message)],
    ['Erstellt', displayValue(details.createdAt)],
    ['Datensatz-ID', displayValue(details.id)],
  ]

  const body = rows.map(([label, value], index) => {
    const background = index % 2 === 0 ? ' style="background: #f7f4ef;"' : ''

    return `<tr${background}>
      <td style="padding: 10px; border: 1px solid #ded6ca; font-weight: bold; vertical-align: top;">${sanitize(label)}</td>
      <td style="padding: 10px; border: 1px solid #ded6ca; vertical-align: top;">${sanitize(value)}</td>
    </tr>`
  }).join('')

  return `<h2>Neue Anfrage über Prime Residenz</h2>
    <p>Eine Kontakt- oder Reservierungsanfrage wurde über das Formular gesendet.</p>
    <table style="border-collapse: collapse; width: 100%; max-width: 680px; margin: 16px 0;">${body}</table>
    <p>Direkt antworten: <a href="mailto:${sanitize(details.email)}">${sanitize(details.email)}</a></p>`
}

function buildTextBody(details: ContactInquiryDetails): string {
  return [
    'Neue Anfrage über Prime Residenz',
    '',
    `Referenz: ${details.reference}`,
    `Name: ${fullName(details)}`,
    `E-Mail: ${details.email}`,
    `Telefon: ${textValue(details.phone)}`,
    `Interesse: ${textValue(details.interest)}`,
    `Nachricht: ${textValue(details.message)}`,
    `Erstellt: ${textValue(details.createdAt)}`,
    `Datensatz-ID: ${textValue(details.id)}`,
  ].join('\n')
}

async function sendInquiryEmail(details: ContactInquiryDetails): Promise<void> {
  if (!TO_EMAILS.length) {
    throw new Error('SES_TO_EMAILS does not contain a valid email address')
  }

  const replyTo = isEmailLike(details.email) ? [details.email] : undefined

  await ses.send(new SendEmailCommand({
    Source: formatAddress(FROM_EMAIL, FROM_NAME),
    Destination: {
      ToAddresses: TO_EMAILS,
    },
    ReplyToAddresses: replyTo,
    Message: {
      Subject: {
        Data: cleanHeaderValue(buildSubject(details)),
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: buildHtmlBody(details),
          Charset: 'UTF-8',
        },
        Text: {
          Data: buildTextBody(details),
          Charset: 'UTF-8',
        },
      },
    },
  }))
}

export const handler = async (event: DynamoDBStreamEvent) => {
  for (const record of event.Records) {
    if (record.eventName !== 'INSERT') continue
    if (!record.dynamodb?.NewImage) continue

    const id = modelString(record, 'id')
    const details: ContactInquiryDetails = {
      reference: inquiryReference(id),
      id,
      firstName: modelString(record, 'firstName'),
      lastName: modelString(record, 'lastName'),
      email: modelString(record, 'email'),
      phone: modelString(record, 'phone'),
      interest: modelString(record, 'interest'),
      message: modelString(record, 'message'),
      createdAt: modelString(record, 'createdAt'),
    }

    if (!details.firstName || !details.lastName || !details.email) {
      console.warn('Skipping incomplete ContactInquiry record:', JSON.stringify({ id }))
      continue
    }

    await sendInquiryEmail(details)
    console.info('Prime Residenz inquiry email sent:', JSON.stringify({
      id,
      reference: details.reference,
      recipients: TO_EMAILS,
    }))
  }
}
