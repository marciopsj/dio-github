import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { UseState } from './pages/useState'

export const AppRoutes = () => {
    return (        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/useState" element={<UseState />} />
            </Routes>
        </BrowserRouter>
    )
}

