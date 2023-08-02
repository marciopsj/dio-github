import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 120px;
  width: 100%;
  max-width: 80%;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  color: #ffffff;
  margin-bottom: 24px;
  line-height: 25px;
`

export const TitleHighlight = styled(Title)`
  color: #ffffff70;
`

export const Column = styled.div`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`
