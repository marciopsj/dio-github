import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'


export const UseCallback = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    // const onChangeName = (event) => {
    //     setName(event.target.value)
    // }

    const onChangeName = useCallback((event) => {
        setName(event.target.value)
    }, [])
     
    return (
        <>
            <Link to="/">Voltar</Link>        
            <h1>useCallback Page</h1>
            <input 
             placeholder='Nome'
             value={name}
             onChange={onChangeName}
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



