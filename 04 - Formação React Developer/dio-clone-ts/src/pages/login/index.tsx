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
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { api } from '../../services/api'
import React from 'react'

const schema = yup
  .object({
    email: yup.string().email('Digite um e-mail válido.').required('Campo obrigatório.'),
    password: yup.string().min(3, 'No mínimo três caracteres').required('Campo obrigatório.')
  })
  .required()

const Login = () => {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' })

  const onSubmit = async (formData: { email: string; password: string }) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      console.log('Retorno api', data)
      if (data.length < 1) {
        alert('Email ou senha inválido')
        return
      }

      navigate('/feed')
    } catch {
      alert('Houve um erro. Tente novamente.')
    }
  }

  return (
    <>
      <Header autenticado={false} />
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                type="email"
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
              <Button title="Entrar" variant="secondary" type="submit" />
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
