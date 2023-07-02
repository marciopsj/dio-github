import { Container, NameText, Progress, UserPicture } from './styled'

const UserInfo = ({ nome, image, percentual }) => {
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
