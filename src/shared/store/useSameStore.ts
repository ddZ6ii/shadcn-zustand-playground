import { create } from 'zustand'

function toggleMode(darkMode: boolean) {
  const htmlEl = document.querySelector('html')
  if (htmlEl) {
    htmlEl.classList.toggle('dark', darkMode)
  }
}

function initDarkMode() {
  const initialDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
  toggleMode(initialDarkMode)
  return initialDarkMode
}

interface SameStoreState {
  darkMode: boolean
  actions: {
    toggleDarkMode: () => void
  }
}

const useSameStore = create<SameStoreState>()((set, get) => ({
  darkMode: initDarkMode(),
  actions: {
    toggleDarkMode: () => {
      // ⚠️ Side effects inside set()'s callback are not good practice.
      // That callback should be a pure state transform.
      // Solution:
      // 1. Read current state first
      const nextDarkMode = !get().darkMode
      // 2. Side effect (sync DOM with the new state before updating the store)
      toggleMode(nextDarkMode)
      // 3. Update the store (should be pure)
      set({ darkMode: nextDarkMode })
    },
  },
}))

// Atomic selectors
const useDarkMode = () => useSameStore((state) => state.darkMode)

// One selector for all actions.
// Actions are static and never change, so they can be exposed
// as a single hook without any impact on performance.
const useStoreActions = () => useSameStore((state) => state.actions)

export { useDarkMode, useStoreActions }
