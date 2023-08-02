import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { MainContainer, TextContent, Title, TitleHighlight } from './styled'
import Banner from '../../assets/banner.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <MainContainer>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine astecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu
            novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={Banner} alt="Imagem principal" />
        </div>
      </MainContainer>
    </>
  )
}

export { Home }
