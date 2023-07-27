import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: var(--preto);
        font-family: 'Rajdhani', sans-serif;
        color: var(--branco);
        font-size: 18px;
    }

    button {
        font-family: 'Rajdhani', sans-serif;
    }

    #root {
        overflow: hidden;
    }

    :root {
        --preto: #000;
        --amarelo: #FADE4B;
        --branco: #fff;
        --cinza-primario: #343434;
        --cinza-secundario: #5A5C5D;
        --vermelho: #E12B2B;
    }
`