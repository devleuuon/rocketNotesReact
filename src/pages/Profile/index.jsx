import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

export function Profile() {
    const { user, updateProfile } = useAuth();  //vai passar o estado atualizado do usuário autenticado para os campos abaixo.
    const [name, setName] = useState(user.name); //tem que passar o 'value' no input.
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() { //vai ser passado no botão de enviar.
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0] //vai pegar o arquivo da primeira posição apenas.
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    function handleBack(){
        navigate(-1)
    }


    return(
        <Container>
            <header>
                <button id="button-none" type="button" onClick={handleBack}>
                <FiArrowLeft />
                </button>
            </header>

            <Form>

                <Avatar>
                    <img src={avatar} alt="foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                        type="file" 
                        id="avatar"
                        onChange={handleChangeAvatar} //avatar atualizado
                         />
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