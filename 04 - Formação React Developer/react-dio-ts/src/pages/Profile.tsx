import Layout from '../components/Layout/Layout'
import Table from '../components/Table/Table'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const mockData = [
    {
        tech: 'React',
        tipo: 'Frontend'
    },
    {
        tech: 'Angular',
        tipo: 'Frontend'
    },
    {
        tech: 'Node',
        tipo: 'Backend'
    },
    {
        tech: 'MySQL',
        tipo: 'Database'
    }       
]

const Profile = () => {

    const { user } = useParams<{ user: string }>()

    const navigate = useNavigate()
        
    useEffect(() => {
        if (user === 'profile'){
            navigate('/')
        }        
    }, [user])
        
        return (  
        <Layout>
                 <Table data={mockData} />
        </Layout>      
    )
}

export default Profile