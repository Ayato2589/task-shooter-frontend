import React from 'react'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'

describe('Appコンポーネント', () => {
  it('エラーなくレンダリングできる', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })
})
