import LogoMain from "../../assets/LogoMain.png"
import { Container, Info, Wrapper, LoginForm, LoginFormGroup } from "./style"
import { Button } from "../../components/SubmitButton"
import { axiosURL } from "../../services/axiosURL"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { toast } from "react-toastify";
import { FaUserCircle, FaLock } from 'react-icons/fa';

export function Login() {

    const navigate = useNavigate()
    const user = useContext(UserContext)

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }

    const handleForm = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const handleLogin = async () => {
        try {
            const response = await axiosURL.post("/auth/signin", form)

            user.getUser(response.data)
            
            navigate("/mymarathons")
        } catch (error) {

            toast.error(`(${error.response.status})` + ' Ocorreu um erro ao tentar realizar o login. Tente novamente.', {
                theme: "dark"
            })
        }
    }

    return (

        <Container>
            <Info>
                <img src={LogoMain} alt="logo do site" />
                <h2>Um novo jeito <br />de organizar e agendar<br /> suas maratonas</h2>
            </Info>

            <Wrapper>
                <h1>Faça seu login</h1>

                <LoginForm onSubmit={e => handleSubmit(e)} role="form">
                    <LoginFormGroup>
                        <label htmlFor="username"><FaUserCircle/> Usuário</label>
                        <input id="username" type="text" placeholder="Usuário123" required onChange={e => handleForm(e)}></input>
                    </LoginFormGroup>

                    <LoginFormGroup>
                        <label htmlFor="password"><FaLock/> Senha</label>
                        <input id="password" type="password" placeholder="******" required onChange={e => handleForm(e)}></input>
                    </LoginFormGroup>

                    <span>Não possui conta? <span onClick={() => navigate("/register")}>Cadastre-se</span></span>

                    <Button text="Entrar"></Button>
                </LoginForm>
            </Wrapper>
        </Container>
    )
}