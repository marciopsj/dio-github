import axios from 'axios'
import gitApi from './github'

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('github', () => {
    it('Deve retornar o Login e ID do usuário', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({ data: {
            login: 'Marcio',
            id: '12345'
        }})
        const response = await gitApi.getUser('Marcio')
        expect(response).toMatchObject({
            login: 'Marcio',
            id: '12345'
        })
    })

    it('Deve retornar a mensagem de usuário não encontrado', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({ data: {
            message: 'Not found'
        }})

        const response = await gitApi.getUser('usuario-invalido')
        expect(response).toMatchObject({
            message: 'Not found'
        })
    })

})