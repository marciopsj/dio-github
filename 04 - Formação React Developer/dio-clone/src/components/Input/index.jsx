import { ErrorText, IconContainer, InputContainer, InputText } from './styled'
import { Controller } from 'react-hook-form'

const Input = ({ leftIcon, name, control, noControl, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        {noControl ? (
          <InputText {...rest} />
        ) : (
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field} {...rest} />}
          />
        )}
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input }
