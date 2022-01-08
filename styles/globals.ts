import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #8B6FA7;

    --calculator-bg: #EDE8F3;

    --red: #F4ADAD;
    --blue: #97CFCC;
    --green: #A1DC93;
    --gray: #C9C9C9;
    --dark-gray: #9B9B9B;
    --light-gray: #CDCDCD;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;