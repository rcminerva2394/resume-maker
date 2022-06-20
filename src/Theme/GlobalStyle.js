import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html { 
    font-size: 6.25%; 
}

body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    text-rendering: optimizeLegibility !important;
    font-size: 16rem;
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors.mainBackground};
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: #868ba2;  
    font-size: 13rem;
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

h1 {
    font-weight: 300;
    letter-spacing: 1px;
    margin: 10rem;
}

h2 {
    font-family: 'Bebas Neue', cursive;
    color: ${({ theme }) => theme.colors.darkGray};
}

header, footer {
    position: relative;
    background-color: ${({ theme }) => theme.colors.headerBackground};
    color: white;
    display: flex;
    justify-content: center;  
    align-items: center;
}

img {
    object-fit: cover;
    width: 42mm;
    height: 42mm;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 50%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

textarea, p {
    font-family: inherit;
    font-size: 13rem;
    line-height: 1.4;
    font-weight: light;
    margin-top: -3rem;
}

input {
    padding: 2rem;
}

svg {
    color: ${({theme}) => theme.colors.darkGray };
}
`;
export default GlobalStyle;
