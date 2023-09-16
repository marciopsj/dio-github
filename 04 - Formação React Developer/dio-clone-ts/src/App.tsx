import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from './pages/feed'
import { Signup } from './pages/signup'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import { AuthContextProvider } from './context/auth'

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  )
}

export default App
