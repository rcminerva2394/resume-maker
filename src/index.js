import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
// You used theme folder here instead of Theme
import GlobalStyle from './Theme/GlobalStyle';
import Colors from './Theme/Colors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Colors}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
