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
`

export const UserWrapper = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    span {
        font-weight: bold;
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
