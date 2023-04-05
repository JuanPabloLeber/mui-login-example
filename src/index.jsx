import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './assets/fonts/roboto.js'

import Login from './pages/Login/Login'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)
