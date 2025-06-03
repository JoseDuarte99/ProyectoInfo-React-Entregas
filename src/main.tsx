import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Main  from './App.tsx'
import { Navbar } from './App.tsx'

createRoot(document.getElementById('header')!).render(
  <StrictMode>
    <Navbar /> 
  </StrictMode>,
)

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <Main /> 
  </StrictMode>,
)
