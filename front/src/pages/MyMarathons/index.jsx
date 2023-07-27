import {
    Container,
    Marathon,
    MarathonInfo,
    Header,
    MarathonOptions,
    Movie,
    MovieInfo,
    MovieList,
} from "./style"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { axiosURL } from "../../services/axiosURL"
import { DeleteModal } from "../../components/DeleteModal"
import { UpdateModal } from "../../components/UpdateModal"
import { Navigation } from "../../components/Navigation"
import { BsFillCalendarFill, BsInfoCircleFill } from 'react-icons/bs';
import { BiSolidTimeFive } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';

export function MyMarathons() {

    const getUser = useContext(UserContext)
    const [userMarathons, setUserMarathons] = useState(null)
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

            <Navigation />

            {
                !isLoading ? (
                    userMarathons.maratonas.length != 0 ? (
                        userMarathons.maratonas.map((maratona) => {
                            return (
                                <Marathon key={maratona.id_maratona}>
                                    <Header>
                                        <h2>{maratona.nome_maratona}</h2>

                                        <MarathonInfo>
                                            <span><BsFillCalendarFill size={12} /> {maratona.data_inicio} - {maratona.data_final}</span>
                                            <span><span><FaPlay size={12} />Filmes:</span> {maratona.filmes.length}</span>
                                            <span><span><BiSolidTimeFive size={15} />Tempo total:</span> {maratona.tempo_total} min</span>
                                            <span><span><BsInfoCircleFill size={15} />Status:</span> {maratona.status}</span>
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
                    ) : (
                        <Header>
                            <h1>Você não possui maratonas cadastradas.</h1>
                        </Header>)
                ) : (
                <Header>
                    <h1>Carregando..</h1>
                </Header>)
            }
        </Container>
    )
}