import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { FiMail ,FiLock, FiUser} from 'react-icons/fi'
import { Container, Form, Background } from "./styles"
import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp() {
    const [ name, setName ] = useState('') //nome do estado e função com novo valor do estado.
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos!')
        }

        api.post('/users', { name, email, password}) //vai criar usuário lá no banco de dados.
        .then(() => { //se der certo vai exibir esse alerta.
            alert('Usuário cadastrado com sucesso!')
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message) //vai buscar no backend a mensagem de erro ao não dar certo o cadastro do usuário.
            } else {
                alert('Não foi possível cadastrar!')
            }
        })
    }

    return(
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={event => setName(event.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={event => setEmail(event.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={event => setPassword(event.target.value)}
                />

                <Button 
                title="Cadastrar"
                onClick={handleSignUp}
                />

                <Link to="/rocketnotesreact/">
                    Voltar para o login
                </Link>

            </Form>
        </Container>
    )
}