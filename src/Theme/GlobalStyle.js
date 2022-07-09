import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

#root{
    /* Solution to have a sticky footer on the bottom */
    /* You can refer to https://stackoverflow.com/questions/643879/css-to-make-html-page-footer-stay-at-bottom-of-the-page-with-a-minimum-height-b */
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: 100vh;
}

html { 
    font-size: 6.25%; 
    /* This is for having a sticky footer on the bottom */
    height: 100%
}

body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    text-rendering: geometricPrecision !important;
    font-size: 13rem;
    /* Removed hin-height instead I put it in your root div */
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
