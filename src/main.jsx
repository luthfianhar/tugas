import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AlertButton from './components/Button/AlertButton.jsx'
import DaftarNama from './components/DaftarNama/DaftarNama.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AlertButton text="click" message="Button clicked"/>
     <DaftarNama />
    <App />
    
  </StrictMode>,
)
