import { SameStorePersistedSchema } from '@/shared/schemas'

function toggleMode(darkMode: boolean): void {
  const htmlEl = document.querySelector('html')
  if (htmlEl) {
    htmlEl.classList.toggle('dark', darkMode)
  }
}

function initDarkMode(storageKey: string): boolean {
  const saved = localStorage.getItem(storageKey)

  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (saved !== null) {
    try {
      const parsed = SameStorePersistedSchema.parse(JSON.parse(saved))
      isDarkMode = parsed.state.darkMode
    } catch (error) {
      console.error('Error parsing dark mode from localStorage:', error)
      // Fallback to user preference if parsing fails
    }
  }
  toggleMode(isDarkMode)
  return isDarkMode
}

export { initDarkMode, toggleMode }
