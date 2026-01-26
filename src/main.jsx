import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AlertButton from './components/Button/AlertButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <AlertButton text="click" message="Button clicked"/>
  </StrictMode>,
)
