import { Routes, Route } from 'react-router-dom'

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
        </Routes>
    )
}