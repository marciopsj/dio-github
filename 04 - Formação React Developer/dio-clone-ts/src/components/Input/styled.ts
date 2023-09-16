import { styled } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  max-width: 275px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3b3450;
`
export const IconContainer = styled.div`
  margin-right: 10px;
`

export const InputText = styled.input`
  background-color: transparent;
  width: 100%;
  height: 30px;
  color: #ffffff;
  border: none;

  &:focus {
    outline: 0;
  }
`
export const ErrorText = styled.p`
  font-size: 12px;
  color: #ff0000;
  margin-bottom: 5px;
`
