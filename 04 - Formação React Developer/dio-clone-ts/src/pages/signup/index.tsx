import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {
  MainContainer,
  Column,
  Row,
  Title,
  Wrapper,
  TitleLogin,
  SubtitleLogin,
  Text,
  LoginText
} from './styled'

import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md'

import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().max(50, 'Limite máximo 50 caracteres').required('Campo obrigatório'),
    email: yup.string().email('Digite um e-mail válido.').required('Campo obrigatório.'),
    password: yup.string().min(3, 'No mínimo três caracteres').required('Campo obrigatório.')
  })
  .required()

const Signup = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' })

  const onSubmit = () => {
    alert('Botão funcionando.')
  }

  const handleLoginClick = () => {
    navigate('/login')
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdAccountBox />}
                errorMessage={errors?.name?.message}
              />

              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
                errorMessage={errors?.password?.message}
              />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Row>
              <Text>
                Ao clicar em criar minha conta grátis, declaro que aceito as Políticas de
                Privacidade e os Termos de Uso da DIO.
              </Text>
            </Row>
            <Row>
              <Text>
                Já tenho conta.<LoginText onClick={handleLoginClick}> Fazer login</LoginText>
              </Text>
            </Row>
          </Wrapper>
        </Column>
      </MainContainer>
    </>
  )
}

export { Signup }
