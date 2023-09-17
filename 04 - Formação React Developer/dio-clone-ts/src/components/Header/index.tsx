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

import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'

const Header = () => {
  const { user, handleSignOut } = useAuth()
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
          <Link to="/">
            <img src={logo} alt="Logo da DIO" />
          </Link>
          {user.id ? (
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
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/48229224?s=400&u=4cdac3a7b37d62b39c02aa511e471b515a473d3b&v=4" />
              <a href="#" onClick={handleSignOut}>
                Sair
              </a>
            </>
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
