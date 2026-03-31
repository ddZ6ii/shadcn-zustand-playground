import z from 'zod'

const SameStoreValueSchema = z.object({
  darkMode: z.boolean(),
})

const SameStorePersistedSchema = z.object({
  state: SameStoreValueSchema,
  version: z.number(),
})

type SameStoreState = z.infer<typeof SameStoreValueSchema> & {
  actions: {
    toggleDarkMode: () => void
  }
}

export { type SameStoreState, SameStorePersistedSchema }
