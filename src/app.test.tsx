import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from '@/App'

describe('App', () => {
  it('renders the Playground heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', {
      name: /Shadcn \+ Zustand Playground/i,
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Shadcn + Zustand Playground')
  })
})
