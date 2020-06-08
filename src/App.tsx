import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import GlobalStyle from 'styles/global';
import theme from 'styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
