import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html { 
    font-size: 6.25%; 
}

body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    text-rendering: optimizeLegibility !important;
    font-size: 16rem;
    min-height: 100%;
    background-color: ${({theme}) => theme.colors.mainBackground};
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: #868ba2;  
}

a:hover,
a:active {
    color: #54596d;
}

button {
    cursor: pointer;
    border: inherit;
    outline: none;
    font-family: inherit;
    font-size: inherit;
}

h1, 
h2, 
h3, 
h4,
h5,
h6 {
    line-height: 1.2;
  }

h2 {
    font-weight: 300;
    letter-spacing: 1px;
    margin: 10rem;
}

header, footer {
    position: relative;
    background-color: ${({theme}) => theme.colors.headerBackground};
    color: white;
    display: flex;
    justify-content: center;  
    align-items: center;
}

img {
    object-fit: cover;
}

`;
export default GlobalStyle;
