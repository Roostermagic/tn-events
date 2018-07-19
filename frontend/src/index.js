import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  /** Override theme here */
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
, document.getElementById('root'));

registerServiceWorker();
