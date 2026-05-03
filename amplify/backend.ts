import { defineBackend } from '@aws-amplify/backend'
import { data } from './data/resource'
import { contactEmailHandler } from './functions/contact-email/resource'
import { EventSourceMapping, StartingPosition } from 'aws-cdk-lib/aws-lambda'
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam'

const backend = defineBackend({ data, contactEmailHandler })

const contactInquiryTable = backend.data.resources.tables['ContactInquiry']
const fn = backend.contactEmailHandler.resources.lambda

new EventSourceMapping(backend.stack, 'ContactInquiryStreamMapping', {
  target: fn,
  eventSourceArn: contactInquiryTable.tableStreamArn!,
  startingPosition: StartingPosition.LATEST,
  batchSize: 5,
})

contactInquiryTable.grantStreamRead(fn)

fn.addToRolePolicy(new PolicyStatement({
  effect: Effect.ALLOW,
  actions: ['ses:SendEmail'],
  resources: ['*'],
}))
