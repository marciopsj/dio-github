import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  margin-top: 120px;
  width: 100%;
  max-width: 80%;
`
export const Wrapper = styled.div`
  max-width: 300px;
`

export const Column = styled.section``

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  color: #ffffff;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
`
export const TitleLogin = styled(Title)``

export const SubtitleLogin = styled(Title)`
  margin-bottom: 35px;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
`

export const EsqueciText = styled.p`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  color: #ffffff;
  line-height: 19px;
  color: #e5e044;
`

export const CriarText = styled(EsqueciText)`
  color: #e23dd7;
`

export const TitleHighlight = styled.span`
  color: #e4105d;
`

export const TextContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;
`
