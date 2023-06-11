import React from 'react'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'

import { Container } from './styles'
import gitLogo from '../assets/github.png'

function App() {
	return (
		<Container>
			<img src={gitLogo} alt="Logotipo do Github" />
			<Input />
			<ItemRepo />
		</Container>
	)
}

export default App
