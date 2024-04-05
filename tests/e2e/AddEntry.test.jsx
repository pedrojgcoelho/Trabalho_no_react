import { render, waitForElementToBeRemoved } from '@testing-library/react'
import App from '../../src/App'
import userEvent from '@testing-library/user-event'

describe('End to End test to manage entries', () => {
  it('Adds an entry that will disappear in 1 seconds', async () => {
    const user = userEvent.setup()
    const app = render(<App />)
    const textInput = app.getByLabelText('No que você está pensando?', {exact: false}) 
    const timeToLiveInput = app.getByLabelText('Duração', {exact: false}) 
    const button = app.getByRole('button', {name: 'Add Entry'})
    await user.type(textInput, 'My Own Thoughts')
    await user.clear(timeToLiveInput)
    await user.type(timeToLiveInput, '1', {initialSelectionStart: -3})
    await user.click(button)
    expect(app.getByText('My Own Thoughts')).toBeInTheDocument()
    await waitForElementToBeRemoved(() => app.queryByText('My Own Thoughts'), {timeout: 2000})
  })
  it('Adds an entry and remove it by clicking', async () => {
    const user = userEvent.setup()
    const app = render(<App />)
    const textInput = app.getByLabelText('No que você está pensando?', {exact: false}) 
    const button = app.getByRole('button', {name: 'Add Entry'})
    await user.type(textInput, 'My Own Thoughts')
    await user.click(button)
    expect(app.getByText('My Own Thoughts')).toBeInTheDocument()
    // find last li element of a ul
    const entriesList = app.container.querySelector('.entries');
    const newEntry = entriesList.lastElementChild;
    const removeButton = newEntry.querySelector('.remove-button');
    await user.click(removeButton)
    expect(app.queryByText('My Own Thoughts')).not.toBeInTheDocument()
  })
})