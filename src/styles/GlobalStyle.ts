import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'SFProDisplay' !important;
    padding: 0;
    margin: 0;
    height: 100vh;

    display: flex;
    justify-content: center;

    background-color: black;

    -ms-overflow-style: none;
    font-family: 'SFProDisplay';
    line-height: 1.5;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
export default GlobalStyle;
