import LogoMain from "../../assets/LogoMain.svg"
import { Container, Info, Wrapper, LoginForm, LoginFormGroup } from "./style"
import { Button } from "../../components/SubmitButton"
import { axiosURL } from "../../services/axiosURL"
import { useState } from "react"
export function Login() {

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
                <h1>Faça seu login</h1>

                <LoginForm onSubmit={e => handleSubmit(e)}>
                    <LoginFormGroup>
                        <label htmlFor="username">Usuário</label>
                        <input id="username" type="text" placeholder="Usuário123" required onChange={e => handleForm(e)}></input>
                    </LoginFormGroup>

                    <LoginFormGroup>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" placeholder="******" required onChange={e => handleForm(e)}></input>
                    </LoginFormGroup>

                    <span>Não possui conta? Cadastre-se</span>

                    <Button text="Entrar"></Button>
                </LoginForm>
            </Wrapper>
        </Container>
    )
}