import styled from 'styled-components'

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 100px;

    img {
        width: 350px;
    }

    @media (max-width: 1024px) {
        margin-top: 50px;
        gap: 40px;

        h2 {
            font-size: 24px;
        }
        img {
            width: 320px;
        }
    }
    @media (max-width: 768px) {
        margin-top: 50px;
        gap: 40px;

        h2 {
            font-size: 20px;
        }
        img {
            width: 280px;
        }
    }
    @media (max-width: 420px) {
        margin-top: 50px;
        gap: 40px;

        h2 {
            font-size: 20px;
        }
        img {
            width: 200px;
        }
    }
    
    
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    text-align: center;

    h2 {
        font-weight: normal;
    }

`

export const Wrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: var(--preto);

    border: 1px solid var(--branco);
    border-radius: 7px;
    padding: 40px;

    h1 {
        text-align: center;
    }

    @media (max-width: 768px) {
        width: 250px;
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    align-items: center;
    width: 100%;

    input {
        height: 15px;
        padding: 10px;
    }

    label {
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    span {
        span {
            font-weight: bold;
            cursor: pointer;
        }
    }
`

export const LoginFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`