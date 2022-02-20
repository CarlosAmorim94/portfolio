import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #407AFF;

        --dark: #121212;
        --dark-200: #151515;

        --gray-light: #c4c4c4;

        --light: #FFFFFF;

        --gradient-purple: linear-gradient(269.96deg, #10D7E2 0%, #9358F7 100%);

        --gradient-pink: linear-gradient(270.06deg, #6518B4 0%, #D24074 101.62%);
        
    }

    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&family=Inter:wght@200;400;700&family=Poppins&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        background-color: var(--dark);
    }

    a {
      list-style: none;
    }

`