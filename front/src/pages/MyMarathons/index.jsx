import {
    Container,
    Navigation,
    Marathon,
    MarathonInfo,
    Header,
    MarathonOptions,
    DeleteButton,
    UpdateButton,
    Movie,
    MovieInfo,
    MovieList
} from "./style"
import { useNavigate, useLocation } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { axiosURL } from "../../services/axiosURL"

export function MyMarathons() {

    const navigate = useNavigate()
    const getUser = useContext(UserContext)
    const [userData, setUserData] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axiosURL.get(`/users/${getUser.user.id}`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MDQ2NzkyMiwiZXhwIjoxNjkwNTU0MzIyfQ.1WWPV2ntOH4Ef4I1ksIiUQVKtZFbaDklzsJeaiPomog`
                }
            })
            setUserData(response.data)
        } catch (error) {
            console.log(error)
        }

        setLoading(false)
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

            {
                !isLoading ? (
                    userData.maratonas.map((maratona) => {
                        return (
                            <Marathon key={maratona.id_maratona}>
                                <Header>
                                    <h2>{maratona.nome_maratona}</h2>

                                    <MarathonInfo>
                                        <span><span>{maratona.data_inicio} - {maratona.data_final}</span></span>
                                        <span><span>Filmes:</span> 3</span>
                                        <span><span>Tempo total:</span> x</span>
                                        <span><span>Status:</span> {maratona.status}</span>
                                        <MarathonOptions>
                                            <DeleteButton>Apagar maratona</DeleteButton>
                                            <UpdateButton>Atualizar status</UpdateButton>
                                        </MarathonOptions>
                                    </MarathonInfo>
                                </Header>

                                <MovieList>
                                    {/* {
                                        userData.maratonas.lista_filme_maratona.map((filme) => {
                                            return (
                                                <Movie key={filme.id_filme}>
                                                    <img src={filme.imagem_URL} alt="cartaz do filme" />

                                                    <MovieInfo>
                                                        <span className="movieTitle">{filme.nome_filme}</span>
                                                        <span>Duração: {filme.duracao} min</span>
                                                        <span>Ano: {filme.ano}</span>
                                                    </MovieInfo>
                                                </Movie>
                                            )
                                        })
                                    } */}

                                </MovieList>
                            </Marathon>
                        )
                    })
                ) : (null)
            }
        </Container>
    )
}