import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { RESUME } from '../content'
import { ResumePage } from './ResumePage'

document.title = RESUME.pageTitle
document.documentElement.classList.add(
  localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResumePage />
  </StrictMode>,
)
