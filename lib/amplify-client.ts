"use client"

import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/data"
import outputs from "@/amplify_outputs.json"

import type { Schema } from "@/amplify/data/resource"

type AmplifyDataClient = ReturnType<typeof generateClient<Schema>>

let configured = false
let dataClient: AmplifyDataClient | null = null

function configureAmplify(): void {
  if (!configured) {
    Amplify.configure(outputs as any)
    configured = true
  }
}

export async function getAmplifyDataClient(): Promise<AmplifyDataClient> {
  configureAmplify()

  if (!dataClient) {
    dataClient = generateClient<Schema>()
  }

  return dataClient
}
