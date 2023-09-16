import React, { Children, createContext, useState } from 'react'
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './type'
import { IUser } from '../types/user'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const navigate = useNavigate()

  const [user, setUser] = useState<IUser>({} as IUser)

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(`users?email=${loginData.email}&senha=${loginData.password}`)
      if (data.length < 1) {
        alert('Email ou senha inválido')
        return
      }
      setUser(data[0])
      navigate('/feed')
    } catch {
      alert('Houve um erro. Tente novamente.')
    }
  }

  const handleSignOut = () => {
    setUser({} as IUser)
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}
