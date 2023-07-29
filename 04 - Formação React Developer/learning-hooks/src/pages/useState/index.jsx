import { useState } from 'react'
import { Link } from 'react-router-dom'


export const UseState = () => {
    const [count, setCount] = useState(0)
    const handleDiminuirClick = () => {
        if (count === 0) {
            alert("Chegou ao valor mínimo")
            return
        }       
        
        setCount(count - 1)
    }
    return (
        <>
            <Link to="/">Voltar</Link>
            <h1>useState</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Adicionar</button>
            <button onClick={handleDiminuirClick}>Diminuir</button>
        </>
    )
}



