import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo'
import { api } from '../services/api'


import { Container } from './styles'
import gitLogo from '../assets/github.png'

function App() {

	const [currentRepo, setCurrentRepo] = useState('')
	const [repos, setRepos] = useState([])

	const handleSearchRepo = async () => {
		const { data } = await api.get(`repos/${currentRepo}`)

		if (data.id) {
			const isExist = repos.find(repo => repo.id === data.id)

			if(!isExist){
				setRepos(prev => [...prev, data])
				setCurrentRepo('')
				return
			}
			alert('Repositório já está na lista')

		} else {
			alert('Repositório não encontrado')
		}
		
	}

	const handleRemoveRepo = (id) => {		
		setRepos(repos.filter(repo => repo.id !== id))		
	}

	return (
		<Container>
			<img src={gitLogo} alt="Logotipo do Github" />
			<Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
			<Button onClick={handleSearchRepo} />
			{repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />)}
		</Container>
	)
}

export default App
