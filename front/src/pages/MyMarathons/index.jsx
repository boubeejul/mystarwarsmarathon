import {
    Container,
    Marathon,
    MarathonInfo,
    Header,
    MarathonOptions,
    Movie,
    MovieInfo,
    MovieList,
    UserStatistics,
    UserMarathonInfo,
    HeaderStatistics,
    ShowButton,
    Filters,
    Search
} from "./style"
import { useContext, useState, useEffect, useDeferredValue } from "react"
import { UserContext } from "../../contexts/UserContext"
import { axiosURL } from "../../services/axiosURL"
import { DeleteModal } from "../../components/DeleteModal"
import { UpdateModal } from "../../components/UpdateModal"
import { Navigation } from "../../components/Navigation"
import { BsFillCalendarFill, BsInfoCircleFill } from 'react-icons/bs';
import { BiSolidTimeFive, BiSearchAlt } from 'react-icons/bi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';

export function MyMarathons() {

    const getUser = useContext(UserContext)
    const [userMarathons, setUserMarathons] = useState(null)
    const [sortedMarathons, setSortedMarathons] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [isHidden, setHidden] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axiosURL.get(`/users/${getUser.user.id}`, {
                headers: {
                    Authorization: `Bearer ${getUser.user.accessToken}`
                }
            })

            setUserMarathons(response.data)
            setSortedMarathons(response.data.maratonas)
            setLoading(false)

        } catch (error) {
            toast.error(`(${error.response.status})` + ' Ocorreu um erro ao tentar carregar suas informações. Tente novamente mais tarde.', {
                theme: "dark"
            })
        }

    }

    const sortMarathons = (option) => {
        let sorted = [...userMarathons.maratonas];
        
        sorted = sorted.filter((marathon) => marathon.status === option);

        setSortedMarathons(sorted);
    };

    const handleSearch = (value) => {
        let filtered = [...userMarathons.maratonas];

        filtered = filtered.filter((marathon) => marathon.nome_maratona.toLowerCase().includes(value.toLowerCase()))

        setSortedMarathons(filtered);
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container>

            <Navigation />
            {
                isLoading ? (
                    null
                ) : (
                    userMarathons.maratonas.length != 0 ? (
                        <>
                            <ShowButton onClick={() => setHidden(isHidden ? false : true)}><ImMenu /> {isHidden ? "Mostrar minhas estatísticas" : "Esconder minhas estatísticas"}</ShowButton>

                            <UserStatistics hidden={isHidden}>
                                <HeaderStatistics>
                                    <AiOutlineAreaChart size={24} /><h2> Estatísticas</h2>
                                </HeaderStatistics>

                                <UserMarathonInfo>
                                    <div>
                                        <span className="totalNumber">{userMarathons.maratonas.length}</span>
                                        <span>Maratonas Registradas</span>
                                    </div>
                                    <div>
                                        <span className="totalNumber">{userMarathons.horas_assistidas}</span>
                                        <span>Horas Assistidas</span>
                                    </div>
                                    <div>
                                        <span className="totalNumber">{userMarathons.marat_assistidas}</span>
                                        <span>Maratonas Assistidas</span>
                                    </div>
                                    <div>
                                        <span className="totalNumber">{userMarathons.marat_pendentes}</span>
                                        <span>Maratonas Pendentes</span>
                                    </div>
                                    <div>
                                        <span className="totalNumber">{userMarathons.marat_canceladas}</span>
                                        <span>Maratonas Canceladas</span>
                                    </div>
                                </UserMarathonInfo>
                            </UserStatistics>

                            <Filters>
                                <Search>
                                    <input type="text" placeholder="Pesquisar pelo nome da maratona" onChange={(e) => handleSearch(e.target.value)}/><BiSearchAlt size={30} />
                                </Search>

                                <select id="filters" name="filters" defaultValue="default" onChange={(e) => sortMarathons(e.target.value)}>
                                    <option value="default" disabled hidden>
                                        Filtrar por status
                                    </option>
                                    <option value="Assistida">Assistidas</option>
                                    <option value="Pendente">Pendentes</option>
                                    <option value="Cancelada">Canceladas</option>
                                </select>

                            </Filters>
                        </>
                    ) : (null)
                )
            }

            {
                !isLoading ? (
                    userMarathons.maratonas.length != 0 ? (
                        sortedMarathons.map((maratona) => {
                            return (
                                <Marathon key={maratona.id_maratona}>
                                    <Header>
                                        <h2>{maratona.nome_maratona}</h2>

                                        <MarathonInfo>
                                            <span><BsFillCalendarFill size={12} /> {maratona.data_inicio} - {maratona.data_final}</span>
                                            <span><span><FaPlay size={12} />Filmes:</span> {maratona.filmes.length}</span>
                                            <span><span><BiSolidTimeFive size={15} />Tempo total:</span> {maratona.tempo_total} min</span>
                                            <span className="status"><span><BsInfoCircleFill size={15} />Status:</span> {maratona.status}</span>
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
        </Container >
    )
}