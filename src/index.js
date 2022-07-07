import React from "react";

import ReactDOM from "react-dom/client"
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import Colors from "./theme/Colors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={Colors}>
        <GlobalStyle/>
        <App/>
    </ThemeProvider>
);
