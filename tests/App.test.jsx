import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('basic app renders', () => {
    const app = render(<App />)
    expect(app.getByText('Anotando Pensamentos')).toBeInTheDocument()
  })
})