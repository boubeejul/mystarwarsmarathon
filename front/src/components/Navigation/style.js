import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;

    @media (max-width: 767px) {
        gap: 40px;
    }
`
export const NavItem = styled.div`
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 5px;

    cursor: pointer;
    border-bottom: ${props => props.active ? '2px solid var(--amarelo)' : 'none'};
`