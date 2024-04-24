import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global.js'
import theme from './Styles/theme.js'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />

    <AuthProvider>
    <Routes />
    </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>
)