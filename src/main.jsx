import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GenerateGeneralInfo } from './form.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GenerateGeneralInfo />
  </StrictMode>,
)
