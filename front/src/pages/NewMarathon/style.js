import styled from 'styled-components'

export const Container = styled.main`
    width: 50%;
    padding-top: 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 45px;
    padding-bottom: 20px;

    @media (max-width: 1024px) {
        width: 70%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 45px;

    background-color: var(--cinza-primario);
    border-bottom: 7px solid var(--amarelo);
    border-radius: 7px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;

    text-align: center;
    border-bottom: 1px solid var(--cinza-secundario);
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    padding-bottom: 20px;

    input {
        height: 15px;
        padding: 10px;
    }

    label {
        font-weight: 700;
    }

    span {
        span {
            font-weight: bold;
            cursor: pointer;
        }
    }
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const FormGroupDate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    flex-wrap: wrap;

    div {
        width: 300px;
    }
`



