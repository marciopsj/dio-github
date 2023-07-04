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

const Header = ({ autenticado }) => {
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
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
