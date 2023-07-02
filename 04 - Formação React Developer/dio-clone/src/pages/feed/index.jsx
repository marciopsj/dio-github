import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Column, MainContainer, Title, TitleHighlight } from './styled'

import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'

const Feed = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={50}
            nome="Marcio Pessanha"
            image="https://avatars.githubusercontent.com/u/48229224?s=400&u=4cdac3a7b37d62b39c02aa511e471b515a473d3b&v=4"
          />
          <UserInfo
            percentual={20}
            nome="Marcio Pessanha"
            image="https://avatars.githubusercontent.com/u/48229224?s=400&u=4cdac3a7b37d62b39c02aa511e471b515a473d3b&v=4"
          />
          <UserInfo
            percentual={35}
            nome="Marcio Pessanha"
            image="https://avatars.githubusercontent.com/u/48229224?s=400&u=4cdac3a7b37d62b39c02aa511e471b515a473d3b&v=4"
          />
          <UserInfo
            percentual={65}
            nome="Marcio Pessanha"
            image="https://avatars.githubusercontent.com/u/48229224?s=400&u=4cdac3a7b37d62b39c02aa511e471b515a473d3b&v=4"
          />
        </Column>
      </MainContainer>
    </>
  )
}

export { Feed }
