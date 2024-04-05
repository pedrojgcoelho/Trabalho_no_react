import { render, screen } from '@testing-library/react'
import { AddEntryForm } from "../src/AddEntryForm";
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event'

describe('AddEntryForm', () => {
  it('Displays the form correctly', () => {
    const form = render(<AddEntryForm /> )
    expect(form.getByLabelText('No que você está pensando?')).toBeInTheDocument()
    expect(form.getByLabelText('Duração', {exact: false})).toBeInTheDocument()
    expect(form.getByRole('button')).toBeInTheDocument()
  })
  it('Calls the addEntry function when the form is submitted with a valid text', async () => {
    const user = userEvent.setup()
    const addEntry = vi.fn()
    const form = render(<AddEntryForm addEntry={addEntry} />)
    const input = form.getByLabelText('No que você está pensando?', {exact: false})
    await user.type(input, 'Hello, world!')
    const button = form.getByRole('button')
    await user.click(button)
    expect(addEntry).toHaveBeenCalled()
  })
  it('Does not call the addEntry function when the form is submitted with an empty text', async () => {
    const user = userEvent.setup()
    const addEntry = vi.fn()
    const form = render(<AddEntryForm addEntry={addEntry} />)
    const button = form.getByRole('button')
    await user.click(button)
    expect(addEntry).not.toHaveBeenCalled()
  })
  it('Does not call the addEntry function when the form is submitted with a negative time to live', async () => {
    const user = userEvent.setup()
    const addEntry = vi.fn()
    const form = render(<AddEntryForm addEntry={addEntry} />)
    const input = form.getByLabelText('Duração', {exact: false})
    await user.type(input, '-1')
    const button = form.getByRole('button')
    await user.click(button)
    expect(addEntry).not.toHaveBeenCalled()
  })

})