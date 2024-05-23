import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Profile() {
    const { user, updateProfile } = useAuth();  //vai passar o estado atualizado do usuário autenticado para os campos abaixo.
    const [name, setName] = useState(user.name); //tem que passar o 'value' no input.
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate() { //vai ser passado no botão de enviar.
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        await updateProfile({ user })
    }


    return(
        <Container>
            <header>
                <Link to="/rocketnotesreact/">
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
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder="E-mail"
                type="email"
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate} />

            </Form>
        </Container>
    )
}