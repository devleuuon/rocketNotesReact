import { Routes, Route, Navigate } from 'react-router-dom'

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/rocketnotesreact/' element={<Home />} />
            <Route path='/rocketnotesreact/new' element={<New />} />
            <Route path='/rocketnotesreact/details/:id' element={<Details />} />
            <Route path='/rocketnotesreact/Profile' element={<Profile />} />

            <Route path='*' element={<Navigate to='/rocketnotesreact/'/>} />
        </Routes> //se usuario tiver logado e digitar url que não existe, vai voltar para a página home.
    )
}