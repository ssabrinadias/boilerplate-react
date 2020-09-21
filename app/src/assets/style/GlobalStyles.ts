import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: ${theme("font.family")};
    height: 100%;
  }
  * {
    outline: none;
    box-sizing: border-box;
  }
  h1, h2, h3, h4 {
    margin: 0;
  }
  ul {
    padding-left: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
  #root {
    height: 100%;
  }
`;
