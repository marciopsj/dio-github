import { Container, Row, Wrapper, BuscaInputContainer, Menu, MenuRight, Input } from './styled'

import { Button } from '../Button'

import logo from '../../assets/logo-dio.png'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          <BuscaInputContainer>
            <Input placeholder="Buscar..." />
          </BuscaInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
