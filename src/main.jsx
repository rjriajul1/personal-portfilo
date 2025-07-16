import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/route.jsx'
import { RouterProvider } from 'react-router'
import Aos from 'aos'
import { Toaster } from 'react-hot-toast'
    Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
     <Toaster />
  </StrictMode>,
)
