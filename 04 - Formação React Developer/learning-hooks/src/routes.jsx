import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { UseState } from './pages/useState'
import { UseEffect } from './pages/useEffect'
import { UseCallback } from './pages/useCallback'
import { UseMemo } from './pages/useMemo'
import { UseRef } from './pages/useRef'
import UserContextProvider from './pages/contexts/userContext'

export const AppRoutes = () => {
    return (        
        <BrowserRouter>
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/useState" element={<UseState />} />
                <Route path="/useEffect" element={<UseEffect />} />
                <Route path="/useCallback" element={<UseCallback />} />
                <Route path="/useMemo" element={<UseMemo />} />
                <Route path="/useRef" element={<UseRef />} />
            </Routes>
        </UserContextProvider>
        </BrowserRouter>
    )
}

