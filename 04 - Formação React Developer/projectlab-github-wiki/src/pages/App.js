import React from 'react'

import { Container } from './styles'
import gitLogo from '../assets/github.png'

function App() {
	return (
		<Container>
			<img src={gitLogo} alt="Logotipo do Github" />
		</Container>
	)
}

export default App
