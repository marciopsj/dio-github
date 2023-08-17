import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Profile from './Profile'

describe('Profile', () => {
    render(
    <BrowserRouter>
        <Profile />    
    </BrowserRouter>
    )

    it('Deve renderizara tabela na página', () => {
        expect(screen.getByRole('table')).toBeInTheDocument()
    })
})