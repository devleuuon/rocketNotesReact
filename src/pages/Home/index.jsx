import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const [search, setSearch] = useState('')
    const [notes, setNotes] = useState([])
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    const navigate = useNavigate()

    function handleTagSelected(tagName) {
        if(tagName === 'all'){ //pra clicar na opção 'todos' e ser redirecionado.
            return setTagsSelected([])
        }


        const alreadySelected = tagsSelected.includes(tagName) //vai ver se existe a tag e vai retornar com verdadeiro ou falso.

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName) //vai remover a cor laranja quando clicar de novo.
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }

    }

    function handleDetails(id){
        navigate(`/rocketnotesreact/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags')
            setTags(response.data)
        }

        fetchTags()
    },[])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }
        fetchNotes()

    }, [tagsSelected, search]) //useeffect com parametro vai ser executado sempre que alterarem o estado. diferente do vazio que só é executado uma vez

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
            <Input placeholder="Pesquisar pelo título" icon={FiSearch} 
            onChange={(e) => setSearch(e.target.value)}
            />
        </Search>

        <Content>
            <Section title="Minhas Notas">
                {
                    notes.map(note => (

                        <Note 
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                        />
                ))
            }
            </Section>
        </Content>

        <NewNote to='/rocketnotesreact/new'>
            <FiPlus />
            Criar Nota
        </NewNote>

        </Container>
    )
}