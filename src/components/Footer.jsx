import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Column 1</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Column 2</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Column 3</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer
