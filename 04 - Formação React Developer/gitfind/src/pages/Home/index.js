import { useState } from 'react'
import { Header } from "../../components/Header";
import RepoItem from "../../components/RepoItem";
import './main.css'

function App() {

  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()    

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser
      setCurrentUser({ avatar_url, name, bio, login })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()

      if (newRepos.length) {
        setRepos(newRepos)
      }
    } else {
      alert(`Desculpe mas não localizamos o usuário ${user}`)
      setUser('')
      setCurrentUser(null)
      setRepos(null)
    }
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="main__content">
          <div className="search">
            <input className="search__input border" name="user" placeholder="username" value={user} onChange={event => setUser(event.target.value)} />
            <button className="button border" onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser?.name ? (
            <>
              <div className="profile">
                <img className="profile__picture" src={currentUser.avatar_url} alt="Imagem do perfil" />
                <div className="profile__info">
                  <h3 className="profile__name">{currentUser.name}</h3>
                  <p className="profile_username text--small">@{currentUser.login}</p>
                  <p className="profile__description text">{currentUser.bio}</p>
                </div>
              </div>
              <hr className="separator" />
            </>
          ) : null}

          {repos?.length ? (
            <>
              <div className="repositories">
                <h2 className="repositories__header">Repositórios</h2>
                {repos.map(repo => (
                  <a href={repo.html_url} target='blank'><RepoItem title={repo.name} description={repo.description} /></a>
                ))}
                
              </div>
            </>
          ) : null}

        </div>
      </main>

    </div>
  );
}

export default App
