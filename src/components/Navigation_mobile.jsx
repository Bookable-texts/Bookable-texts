import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation_mobile() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mobile_nav">
        <div className="hamburger_menu" onClick={toggleDropdown}>
        <div className={`line ${isDropdownOpen ? 'open' : ''}`}></div>
        <div className={`line ${isDropdownOpen ? 'open' : ''}`}></div>
        <div className={`line ${isDropdownOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <ul>
        <Link to={`/`}><li className="nav_link">Home</li></Link>
            <Link to={`/dashboard`}><li className="nav_link">My dashboard</li></Link>
            <Link to={`/books`}><li className="nav_link">Books</li></Link>
            <Link to={`/signin`}><li className="nav_link">Sign in</li></Link>
            <Link to={`/register`}><li className="nav_link">sign up</li></Link>
            {/* Add more links as needed */}
        </ul>
        </div>
  </div>
  )
}

export default Navigation_mobile