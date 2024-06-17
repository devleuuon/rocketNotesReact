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
    const [tagsSelected, setTagsSelected] = useState([])

    function handleTagSelected(tagName) {
        const alreadySelected = tagsSelected.includes(tagName) //vai ver se existe a tag e vai retornar com verdadeiro ou falso.

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName) //vai remover a cor laranja quando clicar de novo.
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }

    }

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
            <li>
            <ButtonText 
            title="Todos"
            onClick={() => handleTagSelected('all')}
            $isactive={tagsSelected.length === 0}
            />
            </li>
            { 
                tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                    <ButtonText 
                    title={tag.name}
                    onClick={() => handleTagSelected(tag.name)}
                    isActive={tagsSelected.includes(tag.name)} 
                    />
                    </li>
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