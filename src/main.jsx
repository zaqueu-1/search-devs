import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './routes/Home.jsx'
import User from './routes/User.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import './index.css'
import { DarkProvider } from './contexts/darkMode/DarkContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:username",
    element: <User />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkProvider>
      <RouterProvider router={router} />
    </DarkProvider>
  </React.StrictMode>,
)
