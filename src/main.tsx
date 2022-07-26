import React from 'react'
import ReactDOM from 'react-dom/client'
import API from './API/API'
import ApiCards from './ApiCards'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <ApiCards/>
    <App />
  </React.StrictMode>
)
