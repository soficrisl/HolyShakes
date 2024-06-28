import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MenuContextProvider from './context/Menucontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
