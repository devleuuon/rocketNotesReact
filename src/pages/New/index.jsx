import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";
import { useState } from "react";

export function New() {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]) //vai pegar os links anteriores e add um novo link no array vazio.
        setNewLink("") // vai limpar o estado, para poder add outros.
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

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

                    <Section title="Links Úteis">
                    {
                        links.map((link, index) =>(
                            <NoteItem
                            key={String(index)} 
                            value={link}
                            onClick={() => handleRemoveLink(link)}
                            />
                        ))
                    }
                    <NoteItem 
                    isNew
                    placeholder="Novo Link"
                    value={newLink}
                    onChange={e => setNewLink(e.target.value)}
                    onClick={handleAddLink}
                    />
                    </Section>

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