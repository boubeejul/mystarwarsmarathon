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

export const HeaderStatistics = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const MarathonInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    
    border-bottom: 1px solid var(--cinza-secundario);
    padding-bottom: 15px;

    .status {
        background-color: var(--preto);
        color: var(--branco);
        border-radius: 7px;
        padding: 5px;
    }

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

export const UserStatistics = styled.div`
    display: ${props => props.hidden ? 'none' : 'flex'};
    flex-direction: column;
    padding-bottom: 30px;
    gap: 20px;
    align-items: center;

    background-color: var(--cinza-primario);
    border-top: 7px solid var(--cinza-secundario);
    border-radius: 7px;

    h2 {
        text-align: center;
    }
`

export const UserMarathonInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 90%;

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        border: 2px solid transparent;
        border-radius: 5px;
        transition: 0.5s;
    }

    div:hover {
        border: 2px solid #000;
        box-shadow: 3px 3px 1px #1c1c1c;
    }

    .totalNumber {
        font-size: 24px;
        font-weight: bold;
    }
`

export const Progress = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`

export const ShowButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 10px;
    width: 280px;
    background-color: var(--amarelo);
    color: var(--preto);
    border-radius: 7px;
    border: none;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    margin: auto;
`

export const Filters = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;

    select {
        padding: 14px;
        border: none;
        background-color: var(--cinza-primario);
        color: var(--branco);
        border-bottom: 2px solid var(--cinza-secundario);
        font-size: 18px;
        font-family: 'Rajdhani',sans-serif;
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    gap: 10px;
    
    input {
        width: 100%;
        padding: 14px;
        border-radius: 3px;
        border: none;
        background-color: var(--cinza-primario);
        color: var(--branco);
        border-bottom: 2px solid var(--cinza-secundario);
        font-size: 18px;
        font-family: 'Rajdhani', sans-serif;
        font-weight: bold;
    }
    
`


