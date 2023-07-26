import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global'
import { AllRoutes } from './routes/AllRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllRoutes />
    <GlobalStyle />
  </React.StrictMode>,
)
