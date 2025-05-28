import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Work from './pages/Work.jsx';
import ContactPage from './pages/Contact.jsx';
import AboutPage from './pages/About.jsx';
import NotFoundPage from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/about',
    element:<AboutPage/>
  },
  {
    path: '/work',
    element: <Work />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path:'*',
    element:<NotFoundPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
