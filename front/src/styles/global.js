import { createGlobalStyle } from 'styled-components'
import image from "../assets/background.gif"

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: var(--preto);
        font-family: 'Rajdhani',sans-serif;
        color: var(--branco);
        font-size: 18px;
    }
    body::before {
        content: "";
        background-image: url(${image});
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        background-position: absolute;
        background-repeat: no-repeat;
        opacity: 0.4;
}

    button {
        font-family: 'Rajdhani', sans-serif;
    }

    #root {
        position: relative;
    }

    :root {
        --preto: #000;
        --amarelo: #FADE4B;
        --branco: #fff;
        --cinza-primario: #343434;
        --cinza-secundario: #5A5C5D;
        --vermelho: #E12B2B;
    }

    .Toastify__toast-body { font-family: 'Rajdhani', sans-serif; }
`