import React from 'react'
import { ButtonContainer } from './styled'
import { IButton } from './type'

const Button = ({ title, variant = 'primary', onClick }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export { Button }
