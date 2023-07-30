import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <h1>Vamos aprender sobre os Hooks do React!</h1>
            <Link to="/useState">useState</Link>
            <br />
            <Link to="/useEffect">useEffect</Link>
            <br />
            <Link to="/useCallback">useCallback</Link>
            <br />
            <Link to="/useMemo">useMemo</Link>


        </>
    )
}

export default Home