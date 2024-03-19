import React from 'react'
import heroImage from '../../public/hero.svg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <section className="hero" id='hero'>
      <div className="container">
        <div className="hero_grid">
          <div className="image">
            <img src={heroImage} alt="Hero image " className='hero_image' />
          </div>
          <div className="content">
              <h1 className="title">Why buy textbooks you won't need after the semester?</h1>
              <p className="paragraph">
              Why burden yourself with the expense of purchasing textbooks outright, only to have them collect dust after the semester ends? Our innovative solution allows university students to access the textbooks they need for their courses without the hefty upfront cost. Say goodbye to the frustration of selling or storing textbooks you no longer require.
              </p>
              <div className="buttons">
                <Link to={`/books`} className="btn btn_primary">Find textbooks</Link>
                <Link to={`#about`} className="btn btn_secondary">Learn more</Link>
              </div>
              
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home