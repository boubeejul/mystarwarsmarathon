import styled from 'styled-components'

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
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

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
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