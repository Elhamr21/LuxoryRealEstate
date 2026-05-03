import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
  ContactInquiry: a.model({
    firstName: a.string().required(),
    lastName: a.string().required(),
    email: a.string().required(),
    phone: a.string(),
    interest: a.string(),
    message: a.string(),
  }).authorization((allow) => [
    allow.publicApiKey().to(['create']),
  ]),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
})
