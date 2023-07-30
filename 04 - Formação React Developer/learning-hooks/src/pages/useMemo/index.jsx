import { Link } from 'react-router-dom'
import { useState, useMemo} from 'react'

export const UseMemo = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const validatePassword = useMemo(() => {
        return <ValidatePassword password={password} />
    }, [password])
    
    return (
        <>
            <Link to="/">Voltar</Link>        
            <h1>useMemo Page</h1>
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
            {validatePassword}
        </>
    )
}

const ValidatePassword = ({password}) => {
    console.log(password)
    if (!password.length) return <span>A senha deve ser preenchida!</span>
    if (password.length < 5) return <span>A senha dever ter no mínimo 5 caracteres.</span>
    return <span>Senha aprovada!</span>
}

