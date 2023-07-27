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

export const Marathon = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;

    background-color: var(--cinza-primario);
    border-bottom: 7px solid var(--amarelo);
    border-top: 7px solid var(--amarelo);
    border-radius: 7px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;

    text-align: center;
`

export const MarathonInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    border-bottom: 1px solid var(--cinza-secundario);
    padding-bottom: 15px;

    span {
        display: flex;
        align-items: center;
        gap: 5px;

        span {
            font-weight: bold;
        }
    }
    @media (max-width: 1439px) {
        flex-direction: column;
        align-items: center;
    }
`

export const MarathonOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 40px;
`

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 200px;

    background-color: var(--vermelho);
    color: var(--branco);
    border-radius: 7px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
`

export const UpdateButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 200px;

    background-color: var(--amarelo);
    color: var(--preto);
    border-radius: 7px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
`

export const MovieList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
    padding-bottom: 20px;
`

export const Movie = styled.div`
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    img {
        width: 100px;
    }

    @media (max-width: 728px) {
        width: auto;
        justify-content: center;
        align-items: center;
    }
`

export const MovieInfo = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    text-align: left;

    .movieTitle {
        font-weight: bold;
        font-size: 20px;
    }

    @media (max-width: 728px) {
        margin-top: 20px;
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`


