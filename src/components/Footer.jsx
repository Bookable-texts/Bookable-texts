import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>More</h3>
            <ul>
              <Link to={`/`}><li>Home</li></Link>
              <Link to={`/dashboard`}><li>Dashboard</li></Link>
              <Link to={`/textbooks`}><li>Books</li></Link>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <Link to={`/termsofservice`}><li>Terms of service</li></Link>
              <Link to={`/privacypolicy`}><li>Privacy policy</li></Link>
              
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <Link to="mailto:info@bookabletexts.com"><li>info@bookabletexts.com</li></Link>
              <Link to="mailto:sales@bookabletexts.com"><li>sales@bookabletexts.com</li></Link>
              <Link to="tel:0126783638"><li>+012 678 3638</li></Link>
            </ul>
          </div>

          
        </div>
        <div className="line_footer margin_top_large margin_bottom_large"></div>

        <p>
          
          <span className="text_center">Bookable texts &copy; 2024</span>
        </p>
      </div>
    </section>
  );
}

export default Footer
