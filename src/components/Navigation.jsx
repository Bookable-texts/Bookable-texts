import React from 'react'
import '../styles/Navigation.css'
import { Link } from 'react-router-dom'
import logo from '/Logo.svg'
import Navigation_large from './Navigation_large'
import Navigation_mobile from './Navigation_mobile'

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="nav">
          <div className="brand">
            <h2 className="logo">
              <Link to={`/`}><img src={logo} alt="Logo" width={120} height={80} className='logo'/></Link>
            </h2>
          </div>
          <Navigation_large />
          <Navigation_mobile />
        </div>
      </div>
    </div>
  )
}

export default Navigation