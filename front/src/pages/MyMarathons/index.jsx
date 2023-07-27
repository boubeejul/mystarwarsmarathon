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
    MovieList,
    Wrapper
} from "./style"
import { useNavigate, useLocation } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { axiosURL } from "../../services/axiosURL"
import { DeleteModal } from "../../components/DeleteModal"
import { UpdateModal } from "../../components/UpdateModal"

export function MyMarathons() {

    const navigate = useNavigate()
    const getUser = useContext(UserContext)
    const [userMarathons, setUserMarathons] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axiosURL.get(`/users/${getUser.user.id}`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MDQ2NzkyMiwiZXhwIjoxNjkwNTU0MzIyfQ.1WWPV2ntOH4Ef4I1ksIiUQVKtZFbaDklzsJeaiPomog`
                }
            })
            setUserMarathons(response.data)
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
                    userMarathons.maratonas.map((maratona) => {
                        return (
                            <Marathon key={maratona.id_maratona}>
                                <Header>
                                    <h2>{maratona.nome_maratona}</h2>

                                    <MarathonInfo>
                                        <span><span>{maratona.data_inicio} - {maratona.data_final}</span></span>
                                        <span><span>Filmes:</span> 3</span>
                                        <span><span>Tempo total:</span> x</span>
                                        <span><span>Status:</span> {maratona.status}</span>
                                    </MarathonInfo>
                                </Header>

                                <MovieList>
                                    {
                                        maratona.filmes.map((filme) => {
                                            return (
                                                <Movie key={filme.filme.id_filme}>
                                                    <img src={filme.filme.imagem_URL} alt="cartaz do filme" />

                                                    <MovieInfo>
                                                        <span className="movieTitle">{filme.filme.nome_filme}</span>
                                                        <span>Duração: {filme.filme.duracao} min</span>
                                                        <span>Ano: {filme.filme.ano}</span>
                                                    </MovieInfo>
                                                </Movie>
                                            )
                                        })
                                    }

                                </MovieList>

                                <MarathonOptions>
                                    <DeleteModal
                                        id={maratona.id_maratona}
                                        nome={maratona.nome_maratona}
                                        filme_maratona={maratona.filmes}
                                    ></DeleteModal>
                                    <UpdateModal
                                        maratona={maratona}
                                    ></UpdateModal>
                                </MarathonOptions>
                            </Marathon>
                        )
                    })
                ) : (null)
            }
        </Container>
    )
}