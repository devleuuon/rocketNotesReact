import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddLink(){

        if(!newLink) {
            alert('Digite um link!')
        } else {
            setLinks(prevState => [...prevState, newLink]) //vai pegar os links anteriores e add um novo link no array vazio.
        }
        setNewLink("") // vai limpar o estado, para poder add outros.
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter((link, index) => index !== deleted)) //vai filtrar o link desejado para remoção, index vai pegar o lugar que está, não permitindo remoções de uma mesma palavra juntas.
    }

    function handleAddTag(){

        if(!newTag) {
            alert('Digite uma tag!')
        } else {
            setTags(prevState => [...prevState, newTag]) //vai pegar os links anteriores e add um novo link no array vazio.
        }
        setNewTag("")

    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter((tag, index) => index !== deleted)) //vai filtrar o link desejado para remoção, index vai pegar o lugar que está, não permitindo remoções de uma mesma palavra juntas.

    }

    async function handleNewNote() {
        await api.post('/notes', {
            title,
            description,
            tags,
            links
        })

        alert('Nota criada com sucesso!')
        navigate('/rocketnotesreact/')
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

                    <Input 
                    placeholder="Título"
                    onChange={e => setTitle(e.target.value)}
                    />

                    <Textarea 
                    placeholder="Observações" 
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links Úteis">
                    {
                        links.map((link, index) =>(
                            <NoteItem
                            key={String(index)} 
                            value={link}
                            onClick={() => handleRemoveLink(index)}
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
                        {
                            tags.map((tag, index) => (
                            <NoteItem 
                            key={String(index)}
                            value={tag}
                            onClick={() => {handleRemoveTag(index)}}
                            />
                            ))
                        }

                    <NoteItem 
                    isNew 
                    placeholder="Novo Link"
                    onChange={e => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                    />
                    </div>

                    <Button 
                    title="Salvar" 
                    onClick={handleNewNote}
                    />

                </Form>
            </main>
        </Container>
    )
}