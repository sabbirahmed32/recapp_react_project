import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navber from './componants/Navigation/Navber.jsx'
import Home from './componants/Home/Home.jsx'
import Products from './componants/Products/Products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navber />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
