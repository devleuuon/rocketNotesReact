import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
    const user = localStorage.getItem('@rocketnotes:user')

    return(
        <Routes>
            <Route path='/rocketnotesreact/' element={<SignIn />} />
            <Route path='/rocketnotesreact/register' element={<SignUp />} />

            { !user && <Route path='*' element={<Navigate to='/rocketnotesreact/'/>} /> }
        </Routes> //se o usuario não tiver logado e tentar acessar a url de uma página logada, vai ser mandado para página de signin.
    )
}