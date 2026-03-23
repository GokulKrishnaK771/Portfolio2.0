import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Clarity from '@microsoft/clarity';

const clarityProjectId = "vy4i16m70n"; 
// The Security Lock: Only run on your specific Vercel domain
if (typeof window !== "undefined" && window.location.hostname === "gokulkrishnak.vercel.app") {
  Clarity.init(clarityProjectId);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
