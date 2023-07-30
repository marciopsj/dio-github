import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { UseState } from './pages/useState'
import { UseEffect } from './pages/useEffect'
import { UseCallback } from './pages/useCallback'
import { UseMemo } from './pages/useMemo'

export const AppRoutes = () => {
    return (        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/useState" element={<UseState />} />
                <Route path="/useEffect" element={<UseEffect />} />
                <Route path="/useCallback" element={<UseCallback />} />
                <Route path="/useMemo" element={<UseMemo />} />


            </Routes>
        </BrowserRouter>
    )
}

