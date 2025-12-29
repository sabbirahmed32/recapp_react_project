import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navber from './componants/Navigation/Navber.jsx'
import Home from './componants/Home/Home.jsx'
import Products from './componants/Products/Products.jsx'
import Blogs from './componants/Blogs/Blogs.jsx'
import About from './componants/About/About.jsx'
import Contact from './componants/Contact/Contact.jsx'
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/products",
        loader:() => fetch('https://fakestoreapi.com/products'),
        element: <Products />
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
