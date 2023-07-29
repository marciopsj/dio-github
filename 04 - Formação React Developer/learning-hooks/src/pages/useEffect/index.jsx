import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const UseEffect = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log(name)
    }, [name])
    
    return (
        <>
            <Link to="/">Voltar</Link>        
            <h1>useEffect Page</h1>
            <input 
             placeholder='Nome'
             value={name}
             onChange={event => setName(event.target.value)}
            />
            <br />
            <input 
             placeholder='Senha'
             value={password}
             type='password'
             onChange={event => setPassword(event.target.value)}
            />
            <br /> 
        </>
    )
}

