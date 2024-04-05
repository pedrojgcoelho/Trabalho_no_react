import { render, screen } from '@testing-library/react'
import { Entry } from "../src/Entry";

describe('Entry', () => {
  it('Displays the entry text', () => {
    const entry = render(<Entry entry={{text: 'myentry'}} />, )
    expect(entry.getByText('myentry')).toBeInTheDocument()
  })
  it('Removes the entry when the button is clicked', () => {
    const removeEntry = vi.fn()
    const entry = render(<Entry entry={{text: 'myentry'}} removeEntry={removeEntry} />)
    const button = entry.getByRole('button')
    button.click()
    expect(removeEntry).toHaveBeenCalled()
  })
})