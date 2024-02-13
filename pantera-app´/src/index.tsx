import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.scss"
import { SquadProvider } from './contexts/SquadContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SquadProvider>
      <App />
    </SquadProvider>
  </React.StrictMode>,
)
