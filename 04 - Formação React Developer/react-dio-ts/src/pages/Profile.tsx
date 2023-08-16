import Layout from "../components/Layout/Layout"
import Table from "../components/Table/Table"

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
    return (  
        <Layout>
                 <Table data={mockData} />
        </Layout>      
    )
}

export default Profile