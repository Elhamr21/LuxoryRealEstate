"use client"

import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/data"

import type { Schema } from "@/amplify/data/resource"

type AmplifyDataClient = ReturnType<typeof generateClient<Schema>>

let configurePromise: Promise<void> | null = null
let dataClient: AmplifyDataClient | null = null

async function configureAmplify(): Promise<void> {
  if (!configurePromise) {
    configurePromise = fetch("/amplify_outputs.json", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Amplify outputs are missing. Deploy the Amplify backend or run an Amplify sandbox first.")
        }

        Amplify.configure(await response.json())
      })
      .catch((error) => {
        configurePromise = null
        throw error
      })
  }

  await configurePromise
}

export async function getAmplifyDataClient(): Promise<AmplifyDataClient> {
  await configureAmplify()

  if (!dataClient) {
    dataClient = generateClient<Schema>()
  }

  return dataClient
}
