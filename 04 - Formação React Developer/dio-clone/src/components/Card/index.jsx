import { CardContainer, Content, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styled"

const Card = () => { 
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture />
                    <div>
                        <h4>Meu nomr</h4>
                        <p>há 8 minuto</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>
                        Projeto para curso de HTML e CSS
                    </h4>
                </PostInfo>
            </Content>
        </CardContainer>
    )
}