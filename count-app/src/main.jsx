import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Count from './components/count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Count/>
  </StrictMode>,
)
