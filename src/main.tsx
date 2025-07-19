import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import App from './App.tsx'
import Cart from './pages/Cart.tsx'
import AppProvider from './contexts/AppProvider.tsx';
import NoNavbarLayout from './layout/NoNavbarLayout.tsx'
import WithNavbarLayout from './layout/WithNavbarLayout.tsx'
import NotFound404 from './pages/NotFound404.tsx';
import ProductById from './pages/ProductById.tsx';
import CheckoutShipping from './pages/CheckoutShipping.tsx';
import CheckoutLayout from './layout/CheckoutLayout.tsx';

createRoot(document.getElementById('App')!).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* */}
          <Route element={<WithNavbarLayout />}>
            <Route path='/' element={<App />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/producto/:id' element={<ProductById />} />
          </Route>

          {/* */}
          <Route element={<NoNavbarLayout />}>

            <Route path="/checkout" element={<CheckoutLayout />}>
              <Route index element={<CheckoutShipping />} />
            </Route>

            <Route path='*' element={<NotFound404 />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
);
