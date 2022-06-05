import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import ThemeColors from "./theme/ThemeColors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={ThemeColors}>
        <GlobalStyle/>
        <App/>
    </ThemeProvider>
);
