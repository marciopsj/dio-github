import { fireEvent, render, screen } from '@testing-library/react'

import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

const mockUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useNavigate: () => mockUsedNavigate
    }
))

describe('Home', () =>{
    it('Deve informar o usuário e ser redirecionado para a página de perfil', () => {
        render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
        )

        const input = screen.getByRole('textbox', { name: 'User' })
        const button = screen.getByRole('button', { name: 'Entrar' })

        fireEvent.change(input, {
            target: { value: 'usuario'}
        })
        fireEvent.click(button)
        expect(mockUsedNavigate).toHaveBeenCalled()
    })

    it('Não deve redirecionar para a página de perfil caso o usuário não seja informado', () => {
        window.alert = jest.fn()

        render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
        )

        const button = screen.getByRole('button', { name: 'Entrar' })

        fireEvent.click(button) 
        expect(mockUsedNavigate).not.toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalled()
    })
})