import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createHashHistory } from 'history'
import Home from './routes/Home.jsx'
import User from './routes/User.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import './index.css'
import { DarkProvider } from './contexts/darkMode/DarkContext.jsx'

const history = createHashHistory()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkProvider>
      <BrowserRouter history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<User />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </DarkProvider>
  </React.StrictMode>
)
