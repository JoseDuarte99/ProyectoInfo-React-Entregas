import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import App from './App.tsx'
import Cart from './components/Cart.tsx'
import AppProvider from './contexts/AppProvider.tsx';

import NoNavbarLayout from './layout/NoNavbarLayout.tsx'
import WithNavbarLayout from './layout/WithNavbarLayout.tsx'

createRoot(document.getElementById('App')!).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas con Navbar */}
          <Route element={<WithNavbarLayout />}>
            <Route path='/' element={<App />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/producto/:id' element={<div />} />
            <Route path='/checkout' element={<div />} />
          </Route>

          {/* Ruta 404 sin Navbar */}
          <Route element={<NoNavbarLayout />}>
            <Route path='*' element={<p>Not Found</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
);
