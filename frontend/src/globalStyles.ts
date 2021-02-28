import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    outline: none;
  }

  body {
    background-color: #F9F9F9;
  }

  /* html {
    overflow-x: hidden
  } */
`;
