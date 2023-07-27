import LogoMain from "../../assets/LogoMain.svg"
import { Container, Info, Wrapper, LoginForm, LoginFormGroup } from "../Login/style"
import { Button } from "../../components/SubmitButton"
import { axiosURL } from "../../services/axiosURL"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Register() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
        role: ["user"]
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister()
    }

    const handleForm = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const handleRegister = async () => {
        try {
            const response = await axiosURL.post("/auth/signup", form)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <Container>
            <Info>
                <img src={LogoMain} alt="logo do site" />
                <h2>Um novo jeito <br />de organizar e agendar<br /> suas maratonas</h2>
            </Info>

            <Wrapper>
                <h1>Cadastre-se</h1>

                <LoginForm onSubmit={e => handleSubmit(e)} role="form">
                    <LoginFormGroup>
                        <label htmlFor="username">Usuário</label>
                        <input id="username" type="text" placeholder="Usuário123" required onChange={e => handleForm(e)}></input>
                    </LoginFormGroup>

                    <LoginFormGroup>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" placeholder="******" required onChange={e => handleForm(e)}></input>
                    </LoginFormGroup>

                    <LoginFormGroup>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="seuemail@mail.com" required onChange={e => handleForm(e)}></input>
                    </LoginFormGroup>

                    <span>Já possui conta? <span onClick={() => navigate("/")}>Faça seu login</span></span>

                    <Button text="Cadastrar"></Button>
                </LoginForm>
            </Wrapper>
        </Container>
    )
}