import { ButtonContainer } from './styled'
const Button = ({ title, variant = 'primary', onClick }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export { Button }
