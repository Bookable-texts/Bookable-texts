import React from 'react'
import PageNotFound from '../../public/PageNotFound.svg'
import Link from 'react-router-dom'

function NotFound() {
  return (
    <>
    <section id="notFound">
      <div className="container">
        <div className="center">
          <img src={PageNotFound} alt="Page not found SVG" className='page_not_found_img' />

          <div className="content">
            <h3 className="heading small">
              Sorry we could not find the page you were looking for
            </h3>
            <p className="paragraph">
              It seems like the page you were searching for does not exist. <br/>
              <Link to="/">Go home</Link>

            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default NotFound