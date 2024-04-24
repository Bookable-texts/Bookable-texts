import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SignUp from './pages/SignUp'
import Register from './pages/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/signup' element={
          <SignUp />
        } />
        <Route path='/register' element={
          <Register />
        } />
        <Route path='*' element={
          <NotFound />
        } />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
