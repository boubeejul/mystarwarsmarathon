import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global'
import { AllRoutes } from './routes/AllRoutes'
import { UserProvider } from './contexts/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AllRoutes />
      <GlobalStyle />
    </UserProvider>
  </React.StrictMode>,
)
