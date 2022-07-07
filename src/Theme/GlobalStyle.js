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
    font-family: 'Nunito Sans', sans-serif;
    text-rendering: geometricPrecision !important;
    font-size: 13rem;
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    line-height: 1.4;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    gap: 10rem; 
    margin-bottom: 5rem;
    align-items: center;
   }

a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    text-align: start;
    font-weight: light;
}

a:hover,
a:active {
    color: ${({ theme }) => theme.colors.darkGray};
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
    margin-bottom: -1.25rem;
    font-size: 26rem;

}

h3 {
    color: ${({ theme }) => theme.colors.darkGray};
}

header {
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
    left: 45%;
    transform: translateX(-50%);
}

textarea {
    font-family: inherit;
    line-height: 1.4;
    font-weight: light;
}

p {
    color: ${({ theme }) => theme.colors.text}
}

input {
    padding: 2rem;
}

svg {
    color: inherit;
}

`;
export default GlobalStyle;
