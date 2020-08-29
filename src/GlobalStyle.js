import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: border-box
    }

    #root {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.color.graphite}
    }
`