import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags')
            setTags(response.data)
        }

        fetchTags()
    },[])

    return(
        <Container>
        
        <Brand>
            <h1>RocketNotes</h1>
        </Brand>

        <Header />

        <Menu>
            <li><ButtonText title="Todos" $isactive /></li>
            { 
                tags && tags.map(tag => (
                    <li key={String(tag.id)}><ButtonText title={tag.name} /></li>
            ))
            }
        </Menu>

        <Search>
            <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
        </Search>

        <Content>
            <Section title="Minhas Notas">
                <Note data={{
                    title: 'React',
                    tags: [
                        {id: 1, name: 'React'},
                        {id: 2, name: 'Rocketseat'}
                    ]
                }} 
                />
            </Section>
        </Content>

        <NewNote to='/rocketnotesreact/new'>
            <FiPlus />
            Criar Nota
        </NewNote>

        </Container>
    )
}