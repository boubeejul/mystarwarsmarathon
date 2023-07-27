import styled from 'styled-components'

export const Container = styled.main`
    width: 50%;
    padding-top: 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 45px;
    padding-bottom: 20px;
`

export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navTitle {
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }
`

export const Marathon = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;

    background-color: var(--cinza-primario);
    border-bottom: 7px solid var(--amarelo);
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
        span {
            font-weight: bold;
        }
    }
`

export const MarathonOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    width: 100%;
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
    max-width: 475px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;

    img {
        width: 100px;
    }
`

export const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    .movieTitle {
        font-weight: bold;
        font-size: 20px;
    }
`


