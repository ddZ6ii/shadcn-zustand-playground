import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { initDarkMode, toggleMode } from '@/shared/utilities'
import type { SameStoreState } from '@/shared/schemas'

const STORAGE_KEY = 'same-store'

const useSameStore = create<SameStoreState>()(
  persist(
    (set, get) => ({
      darkMode: initDarkMode(STORAGE_KEY),
      count: 0,
      actions: {
        toggleDarkMode: () => {
          // ⚠️ Side effects inside set()'s callback are not good practice.
          // That callback should be a pure state transform.
          // Solution:
          // 1. Read current state first
          // 2. Side effect (sync DOM with the new state before updating the store)
          // 3. Update the store (should be pure)
          const nextDarkMode = !get().darkMode
          toggleMode(nextDarkMode)
          set({ darkMode: nextDarkMode })
        },
        incrementCount: (step = 1) => {
          set((state) => {
            const nextCount = state.count + step
            if (nextCount > 10) return state
            return { count: nextCount }
          })
        },
        resetCount: () => {
          set(() => ({ count: 0 }))
        },
        setCount: (value: number) => {
          set((state) => ({
            count: value > 10 ? state.count : Math.max(0, value),
          }))
        },
      },
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({ darkMode: state.darkMode, count: state.count }),
    },
  ),
)

// Atomic selectors
const useDarkMode = () => useSameStore((state) => state.darkMode)
const useCount = () => useSameStore((state) => state.count)

// One selector for all actions.
// Actions are static and never change, so they can be exposed
// as a single hook without any impact on performance.
const useStoreActions = () => useSameStore((state) => state.actions)

export { useDarkMode, useCount, useStoreActions }
