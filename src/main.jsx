import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(e) {
  if (e.matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

applyTheme(darkModeQuery);

darkModeQuery.addEventListener("change", applyTheme);