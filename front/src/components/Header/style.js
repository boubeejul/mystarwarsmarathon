import styled from 'styled-components'

export const Container = styled.header`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 45px;

    img {
        width: 320px;
    }

    @media (max-width: 767px) {
        padding: 10px;

        img {
            width: 200px;
        }
    }
    @media (max-width: 420px) {
        padding: 10px;

        img {
            width: 160px;
        }
    }
`

export const UserWrapper = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    span {
        font-weight: bold;
    }

    .username {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 767px) {
       width: 180px;
    }
    @media (max-width: 420px) {
        width: 160px;
    }
`

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100px;

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
    width: 100px;

    background-color: var(--amarelo);
    color: var(--preto);
    border-radius: 7px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
