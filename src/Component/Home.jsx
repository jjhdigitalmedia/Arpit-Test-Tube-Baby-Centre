import React from 'react'
import Head from './Head'
import Rewards from './Rewards'
import Treatements from './Treatements'
import GoogleReview from './GoogleReview'
import About from './About'
// import NewsImages from './NewsImages' 
import { FAQ } from './FAQ'
import Contact from './Contact'
import Stats from './Stats'
import Ivfteam from '../Pages/Ivfteam'
import Appointment from './Appointment'
// import VideoOfCentre from './VideoOfCentre'
import { Helmet } from "react-helmet";
import Arrow from './Arrow'
import ContactButton from './ContactButton'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gallery: Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="Get expert gynecology consultations and women's health care services." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <Arrow />
      <ContactButton/>
      <Head />
      <Rewards />
      <Treatements />
      {/* <VideoOfCentre/> */}
      <About />
      {/* <Ivfteam /> */}
      <GoogleReview />
      <Stats />
      {/* <NewsImages/> */}
      <Contact />
      <FAQ />
      <Appointment />
    </div>
  )
}
export default Home