import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './legacy.css'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Assertion not null or non null assertion operator 