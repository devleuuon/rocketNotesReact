import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/rocketnotesreact/home">Voltar</Link>
                    </header>

                    <Input placeholder="Título"/>

                    <Textarea placeholder="Observações" />

                    <Section title="Links Úteis" />
                    <NoteItem placeholder="Https://rocketseat.com.br"/>
                    <NoteItem isNew placeholder="Novo Link"/>

                    <Section title="Marcadores" />

                    <div className="tags">
                    <NoteItem placeholder="Https://rocketseat.com.br"/>
                    <NoteItem isNew placeholder="Novo Link"/>
                    </div>

                    <Button title="Salvar" />

                </Form>
            </main>
        </Container>
    )
}