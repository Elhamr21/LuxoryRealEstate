import { defineFunction } from '@aws-amplify/backend'

export const contactEmailHandler = defineFunction({
  name: 'prime-residenz-contact-email-handler',
  entry: './handler.ts',
  environment: {
    SES_FROM_EMAIL: 'primeresidenz@web.de',
    SES_FROM_NAME: 'Prime Residenz',
    SES_TO_EMAILS: 'primeresidenz@web.de',
  },
})
