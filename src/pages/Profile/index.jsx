import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft />
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/devleuuon.png" alt="foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>


                <Input 
                placeholder="Nome completo"
                type="text"
                icon={FiUser}
                />

                <Input 
                placeholder="E-mail"
                type="email"
                icon={FiMail}
                />

                <Input 
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                />

                <Input 
                placeholder="Nova senha"
                type="text"
                icon={FiLock}
                />

                <Button title="Salvar" />

            </Form>
        </Container>
    )
}