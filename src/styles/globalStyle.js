import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-500: #4f4f4f;
        --gray-800: #1c1c1c;
        --white: #fff;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    // font-size: 16px (desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }
`