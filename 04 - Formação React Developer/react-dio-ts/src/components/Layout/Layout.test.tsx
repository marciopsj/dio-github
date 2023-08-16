import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'

describe('Layout', () => {
    render(
    <BrowserRouter>
        <Layout>
            Meu App
        </Layout>
    </BrowserRouter>)

    it('Deve renderizar a mensagem Meu App', () => {
        const app = screen.getByText('Meu App')

        expect(app).toBeInTheDocument()
    })
})
