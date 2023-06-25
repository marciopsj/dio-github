import { IconContainer, InputContainer, InputText } from './styled'

const Input = ({ leftIcon, name, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  )
}

export { Input }
