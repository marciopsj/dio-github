import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 80%;
  height: 47px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151515;
  width: 100%;
  height: 47px;
`
export const BuscaInputContainer = styled.div`
  background: #2d2d37;
  padding: 2px 5px;
  margin: 0 12px;
  width: 175px;
  height: 30px;
  border-radius: 8px;
`
export const Input = styled.input`
  background: transparent;
  flex: 1;
  padding-left: 4px;
  width: 175px;
  height: 30px;
  color: #ffffff;
  border: 0;
`

export const Menu = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
`

export const MenuRight = styled(Menu)`
  cursor: pointer;
`

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border: 2px solid #fff;
  border-radius: 22px;
`
