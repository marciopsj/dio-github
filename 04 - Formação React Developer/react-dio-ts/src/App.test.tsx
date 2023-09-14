import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import gitApi from './api/github';

describe('App', () => {

  let user = ''

  it('Deve receber os dados na resposta caso o usuário exista', async () => {
    user = 'marcio'
    render(<App />)

    jest.spyOn(gitApi, 'getUser')

    const input = screen.getByRole('textbox', { name: 'User' })
    const button = screen.getByRole('button', { name: 'Entrar' })

    fireEvent.change(input, {
      target: { value: user}
    })
  
   fireEvent.click(button)

   expect(gitApi.getUser).toHaveBeenCalled()

   const response = await gitApi.getUser(user)
   expect(response).toHaveProperty('login')
  })

  it('Não Deve receber os dados na resposta caso o usuário exista', async () => {
    user = 'marcio-nonexiste'
    render(<App />)

    jest.spyOn(gitApi, 'getUser')

    const input = screen.getByRole('textbox', { name: 'User' })
    const button = screen.getByRole('button', { name: 'Entrar' })

    fireEvent.change(input, {
      target: { value: user}
    })
  
   fireEvent.click(button)

   const response = await gitApi.getUser(user)
   expect(response).toBe(undefined)

  })

})
