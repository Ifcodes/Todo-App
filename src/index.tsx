import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import GlobalStyle from './styles/GlobalStyles';
import AppTheme from './styles/AppTheme'
import {ThemeProvider} from 'styled-components'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={AppTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
