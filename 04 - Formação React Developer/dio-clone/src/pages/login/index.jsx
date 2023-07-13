import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import {
  Column,
  MainContainer,
  Row,
  SubtitleLogin,
  TextContent,
  Title,
  TitleHighlight,
  TitleLogin,
  Wrapper,
  EsqueciText,
  CriarText
} from './styled'

import { MdEmail, MdLock } from 'react-icons/md'

import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

const Login = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const handleClickSignIn = () => {
    navigate('/feed')
  }

  return (
    <>
      <Header />
      <MainContainer>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </MainContainer>
    </>
  )
}

export { Login }
