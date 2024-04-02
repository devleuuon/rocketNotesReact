import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to='/profile'>
                <img src="https://github.com/devleuuon.png" alt="imagem de lennon"/>

                <div>
                    <span>Bem-Vindo,</span>
                    <strong>Lennon Fonseca</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}