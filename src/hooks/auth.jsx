import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }){
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data //vai retornar somente esses dados.

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({ user, token })

        } catch (error) {
            if(error.response) {
                alert(error.response)
            } else {
                alert('Não foi possível entrar!')
            }
        }
    }


    return(
        <AuthContext.Provider value={ { signIn, user: data.user } }>
            { children }
        </AuthContext.Provider> //todas as rotas da aplicação serão passadas para o children. será resposável por trabalhar com o auth.routes e app.routes, que antes tinha que ser passados manualmente.
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth }
