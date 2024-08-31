import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
`;

export default GlobalStyles;
