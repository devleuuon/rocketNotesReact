import { createContext, useContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    return(
        <AuthContext.Provider value={{ name: 'lennon fonseca', email: 'lennon@gmail.com'}}>
            { children }
        </AuthContext.Provider> //todas as rotas da aplicação serão passadas para o children. será resposável por trabalhar com o auth.routes e app.routes, que antes tinha que ser passados manualmente.
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth }
