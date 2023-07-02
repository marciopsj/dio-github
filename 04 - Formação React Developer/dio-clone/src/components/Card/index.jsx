import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styled'

import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/48229224?s=400&u=4cdac3a7b37d62b39c02aa511e471b515a473d3b&v=4" />
          <div>
            <h4>Meu nomr</h4>
            <p>há 8 minuto</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito</p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
