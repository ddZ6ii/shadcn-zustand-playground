import z from 'zod'

const SameStoreValueSchema = z.object({
  darkMode: z.boolean(),
  count: z.number(),
})

const SameStorePersistedSchema = z.object({
  state: SameStoreValueSchema,
  version: z.number(),
})

type SameStoreState = z.infer<typeof SameStoreValueSchema> & {
  actions: {
    incrementCount: (step?: number) => void
    resetCount: () => void
    setCount: (value: number) => void
    toggleDarkMode: () => void
  }
}

export { type SameStoreState, SameStorePersistedSchema }
