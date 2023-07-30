import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'

export const UseRef = () => {
    const [message, setMessage] = useState("")
    
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.focus()
        setMessage('')
    }
    
    return (
        <>
            <Link to="/">Voltar</Link>        
            <h1>useRef Page</h1>
            <input 
             ref={inputRef}
             placeholder='Digite sua mensagem'
             value={message}
             onChange={event => setMessage(event.target.value)}
            />
            <button onClick={handleClick}>Enviar</button>
        </> 
    )
}

