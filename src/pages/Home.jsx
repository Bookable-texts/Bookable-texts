import React from 'react'
import heroImage from '../../public/hero.svg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

import readingAvatar from '../../public/Reading_avatar.svg'
import affordableAvatar from '../../public/saving.svg'
import cancelAvatar from '../../public/cancel.svg'
import textbookSelectionImage from '../../public/selection.jpg'
import supportImage from '../../public/247support.jpg'

import Grid from '../components/ui/Grid'

function Home() {
  return (
    <>
    {/* hero section */}

      <section className="hero" id='hero'>
      <div className="container">
        <div className="hero_grid">
          <div className="image">
            <img src={heroImage} alt="Hero image " className='hero_image' />
          </div>
          <div className="content">
              <h1 className="title">Unlocking the Doors to Affordable Education</h1>
              <p className="paragraph">
              Welcome to Bookable Texts, where we're revolutionizing the way students access textbooks. Say goodbye to the burdensome costs that come with buying textbooks outright. With Bookable Texts, we're on a mission to democratize education by making textbooks accessible to students from all walks of life. Our innovative platform allows bookstores to rent out their textbooks to university students at prices that won't break the bank.
              </p>
              <div className="buttons">
                <Link to={`/books`} className="btn btn_primary">Find textbooks</Link>
                <Link to={`#about`} className="btn btn_secondary">Learn more</Link>
              </div>
              
          </div>
        </div>
      </div>
    </section>

    {/* hero section */}

    <section className="about bg_ghostwhite" id="about">
      <div className="container text_centered">
        <h2 className="heading heading_large">Who are we <br /> And what do we do?</h2>
        <p className="subheading">
          Learn about us and how we can make your life easier.
        </p>
        <div className="cards">
          <div className="card">
            <div className="img_head">
              <img src={readingAvatar} alt="Card header image" />
            </div>
            <div className="card_content">
              <p className="paragraph">
              At Bookable Texts, we understand the importance of having access to a comprehensive range of textbooks. That's why our platform ensures that students can find all the textbooks they need for their courses conveniently in one place. Say goodbye to the frustration of searching far and wide for required reading materials. With Bookable Texts, everything you need is just a click away.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img_head">
              <img src={affordableAvatar} alt="Card header image" />
            </div>
            <div className="card_content">
              <p className="paragraph">
                We believe that education should be accessible to everyone, regardless of their financial circumstances. That's why we've made affordability a cornerstone of our platform. With competitive pricing and flexible rental options, Bookable Texts makes it easy for students to access the textbooks they need without breaking the bank. Say hello to significant savings and goodbye to sky-high textbook prices.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img_head">
              <img src={cancelAvatar} alt="Card header image" />
            </div>
            <div className="card_content">
              <p className="paragraph">
              We understand that circumstances can change, and plans may need to be adjusted. That's why we've made cancellation hassle-free and straightforward. With Bookable Texts, you're in control of your rentals. Whether your course requirements shift or you no longer need a particular textbook, cancelling your rental is quick and painless. No stress, no fuss—just seamless flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* More info section */}

    <section className="more_information" id="more_information">
      <div className="container">

        <div className="grid_container">
          <Grid
            direction={'left'}
            img_src={textbookSelectionImage}
            link_to={`/textbooks`}
            title={'Textbook Selection Made Easy:'}
            paragraph={`Embark on a journey of academic exploration with Bookable Texts. Our platform boasts a vast and meticulously curated selection of textbooks, covering a wide array of subjects and disciplines. Whether you're delving into the realms of literature, exploring the depths of science, or dissecting the intricacies of mathematics, you'll find precisely what you need to excel in your studies. From foundational texts to advanced readings, we're committed to providing students with access to the resources they need to succeed. Say goodbye to the frustration of scouring multiple sources for required reading materials. With Bookable Texts, your textbook selection process has never been easier or more comprehensive.`}
            button_text={'See textbooks'}
          />
          <Grid
            direction={'right'}
            img_src={supportImage}
            link_to={`/contact`}
            title={'24/7 Support When You Need It:'}
            paragraph={`At Bookable Texts, we prioritize your success and satisfaction every step of the way. That's why we're proud to offer round-the-clock support to our valued users. Whether you're navigating our platform for the first time or encountering a challenge with your textbook rental, our dedicated support team is here to assist you. With prompt responses and personalized guidance, we're committed to ensuring that your experience with Bookable Texts is seamless and stress-free. Need help finding a specific textbook? Interested in learning more about our rental options? Simply reach out to us at any time, and we'll be more than happy to lend a helping hand. With Bookable Texts, you're never alone on your educational journey.`}
            
          />
        </div>

      </div>
    </section>
    
    <section className="call_to_action" id="call_to_action">
      <div className="container">
        <div className="cta text_centered">
          <h3 className=" heading heading_small">Try Bookable texts today</h3>
          <p className="paragraph">Sign up today and see the awesomeness we have to offer here at Bookable texts</p>
          <Link className="btn btn_primary" to="/register">Sign up</Link>
        </div>
      </div>
    </section>
    </>
    
  )
}

export default Home