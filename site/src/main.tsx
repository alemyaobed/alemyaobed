import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SITE } from './content'

document.title = SITE.pageTitle
document.documentElement.classList.add(
  localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
