import { render } from '@testing-library/react'
import App from './App'

test('sum', async () => {
    const { getByText } = await render(<App />)

    await expect(getByText('Ácmon')).toBeInTheDocument()
})