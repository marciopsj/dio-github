import Layout from "../components/Layout/Layout"
import { MouseEvent, useState } from 'react'
import { useNavigate } from "react-router-dom"



const Home = () => {

    const [user, setUser] = useState('')
    
    const navigate = useNavigate()

    const handleClick = async (event: MouseEvent) => {
        event.preventDefault()
        if (user.length === 0) {
            return alert('Informe o nome do usuário.')
        }
        navigate('/profile')
    }

    return (  
        <Layout>
            <div className="col-4 m-auto">
                <h1>Login</h1>
                <div className="mb-3">
                    <label htmlFor="gitUser" className="form-label">Usuário do GitHub</label>
                    <input
                        type="text"
                        className="form-control" 
                        id="gitUser" 
                        value={user}
                        aria-describedby="userHelp" 
                        aria-label="User"
                        onChange={event => setUser(event.target.value)}
                     />
                    <div id="userHelp" className="form-text">
                        Informe seu usuário do GitHub.
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                    Entrar
                </button>
            </div>
        </Layout>      
            
    )
}

export default Home