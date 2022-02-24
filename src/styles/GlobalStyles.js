import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #407AFF;

        --dark: #121212;

        --gray-light: #c4c4c4;
        --gray: #1C1C1C ;

        --white: #FFFFFF;        
    }

    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&family=Inter:wght@200;400;700&family=Poppins&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        background-color: var(--dark);
        user-select: none;
    }

    html{
        scroll-behavior: smooth;
    }

`