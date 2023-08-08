import React from 'react'
import { Container, NameText, Progress, UserPicture } from './styled'
import { IUserInfo } from './type'

const UserInfo = ({ nome, image, percentual }: IUserInfo) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}

export { UserInfo }
