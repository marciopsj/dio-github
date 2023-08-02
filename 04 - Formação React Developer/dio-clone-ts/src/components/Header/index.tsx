import {
  Container,
  Row,
  Wrapper,
  BuscaInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture
} from './styled'

import { Button } from '../Button'

import logo from '../../assets/logo-dio.png'

import { useNavigate } from 'react-router-dom'
import React from 'react'
import { IHeader } from './type'

const Header = ({ autenticado }: IHeader) => {
  const navigate = useNavigate()

  const handleClickHome = () => {
    navigate('/')
  }

  const handleClickLogin = () => {
    navigate('/login')
  }

  const handleClickSignup = () => {
    navigate('/signup')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {autenticado ? (
            <>
              <BuscaInputContainer>
                <Input placeholder="Buscar..." />
              </BuscaInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/48229224?s=400&u=4cdac3a7b37d62b39c02aa511e471b515a473d3b&v=4" />
          ) : (
            <>
              <MenuRight onClick={handleClickHome}>Home</MenuRight>
              <Button title="Entrar" onClick={handleClickLogin} />
              <Button title="Cadastrar" onClick={handleClickSignup} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
