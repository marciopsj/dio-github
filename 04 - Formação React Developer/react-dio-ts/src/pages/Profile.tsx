import Layout from "../components/Layout/Layout"

const Profile = () => {
    return (  
        <Layout>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tech</th>
                        <th scope="col">Tipo</th>                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>React</td>
                        <td>Frontend</td>
                    </tr>
                    <tr>                    
                        <td>Node</td>
                        <td>Backend</td>
                    </tr>
                </tbody>
            </table>      
        </Layout>      
    )
}

export default Profile