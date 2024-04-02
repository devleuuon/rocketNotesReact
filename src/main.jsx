import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global.js'
import theme from './Styles/theme.js'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
    </ThemeProvider>
  </React.StrictMode>
)