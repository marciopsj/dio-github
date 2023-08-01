import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

export const Home = () => {
    const user = useContext(UserContext)
    return (
        <>
            <h1>{user.userName}, vamos aprender sobre os Hooks do React!</h1>
            <Link to="/useState">useState</Link>
            <br />
            <Link to="/useEffect">useEffect</Link>
            <br />
            <Link to="/useCallback">useCallback</Link>
            <br />
            <Link to="/useMemo">useMemo</Link>
            <br />
            <Link to="/useRef">UseRef</Link>



        </>
    )
}

export default Home