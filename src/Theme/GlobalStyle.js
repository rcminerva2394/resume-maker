import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html { 
    font-size: 6.25%; 
}

body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    text-rendering: optimizeLegibility !important;
    font-size: 14rem;
    min-height: 100%;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer
}

h1, 
h2, 
h3, 
h4,
h5,
h6 {
    line-height: 1.2;
  }

header, footer {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
}

`;
export default GlobalStyle;
