import {
    Container,
    Navigation,
    Header,
    Form,
    FormGroup,
    Wrapper,
    FormGroupDate,

} from "./style"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from "../../components/SubmitButton/index"
import { useNavigate, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext"
import { axiosURL } from "../../services/axiosURL"

export function NewMarathon() {

    const navigate = useNavigate()
    const getUser = useContext(UserContext)
    const [movies, setMovies] = useState(null)
    const [selected, setSelected] = useState([])

    const [formMarathon, setFormMarathon] = useState({
        nome_maratona: "",
        data_inicio: "",
        data_final: "",
        status: "PENDENTE",
        user: {
            id: getUser.user.id
        }
    })

    const fetchData = async () => {
        try {
            const response = await axiosURL.get("/filme")
            setMovies(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const newMarathon = async () => {
        try {
            const responseMarathon = await axiosURL.post("/maratona", formMarathon, {
                headers: {
                    Authorization: `Bearer ${getUser.user.acessToken}`
                }
            })

            const marathonId = responseMarathon.data.id_maratona

            for await (const movie of selected) {
                const response = await axiosURL.post("/filme_maratona", {
                    filme: {
                        id_filme: movie.id_filme
                    },
                    maratona: {
                        id_maratona: marathonId
                    }
                }, {
                    headers: {
                        Authorization: `Bearer ${getUser.user.acessToken}`
                    }
                })
            }

            navigate("/mymarathons")

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        newMarathon()
    }

    const handleInput = (e) => {
        setFormMarathon({ ...formMarathon, [e.id]: e.value })
    }

    const handleDate = (e) => {
        let date = e.value.split('-')
        date = date.reverse()
        date = date.join('-')
        setFormMarathon({ ...formMarathon, [e.id]: date })
    }

    const handleMovieSelection = (id) => {
        let list = [...selected]

        let already = list.findIndex(movie => movie.id_filme === id)

        if (already > -1) {
            list.splice(already, 1)
        } else {
            list = [...selected, { id_filme: parseInt(id) }]
        }

        setSelected(list)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container>

            <Navigation>
                <span className="navTitle" onClick={() => navigate("/mymarathons")}>Minhas Maratonas</span>
                <span className="navTitle" onClick={() => navigate("/newmarathon")}>Nova Maratona</span>
            </Navigation>

            <Wrapper>
                <Header>
                    <h2>Agendar Nova Maratona</h2>
                </Header>

                <Form onSubmit={e => handleSubmit(e)}>
                    <FormGroup>
                        <label>Título da maratona</label>
                        <input type="text" id="nome_maratona" required placeholder="Ex: Maratona legal" onChange={(e) => handleInput(e.target)}></input>
                    </FormGroup>

                    <FormGroupDate>
                        <FormGroup>
                            <label>Início da maratona</label>
                            <input type="date" id="data_inicio" required onChange={(e) => handleDate(e.target)}></input>
                        </FormGroup>

                        <FormGroup>
                            <label>Final da maratona</label>
                            <input type="date" id="data_final" required onChange={(e) => handleDate(e.target)}></input>
                        </FormGroup>
                    </FormGroupDate>

                    <FormGroup>
                        <label>Lista de filmes</label>
                        {
                            movies != null ? (
                                movies.map(movie => {
                                    return (
                                        <FormControlLabel control={<Checkbox id={movie.id_filme} onChange={(e) => handleMovieSelection(e.target.id)}
                                            sx={{
                                                color: 'var(--amarelo)',
                                                '&.Mui-checked': {
                                                    color: 'var(--amarelo)',
                                                },
                                            }} />} label={movie.nome_filme} />
                                    )
                                })
                            ) : (null)
                        }

                    </FormGroup>

                    <Button text="Agendar"></Button>
                </Form>
            </Wrapper>
        </Container>
    )
}