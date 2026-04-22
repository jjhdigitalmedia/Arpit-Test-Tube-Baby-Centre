import React from 'react'
import Head from './Head'
import Rewards from './Rewards'
import Treatements from './Treatements'
import GoogleReview from './GoogleReview'
import About from './About'
import { FAQ } from './FAQ'
import Contact from './Contact'
import Stats from './Stats'
import Ivfteam from '../Pages/Ivfteam'
import Appointment from './Appointment'
import { Helmet } from "react-helmet";
import Arrow from './Arrow'
import ContactButton from './ContactButton'
import CardCarousel from './IVFTeamHome'
import IVFTeamHome from './IVFTeamHome'
// import NewsImages from './NewsImages' 
// import VideoOfCentre from './VideoOfCentre'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Arpit Test Tube Baby Centre - Best IVF Centre in Prayagraj</title>
        <meta name="description" content="Arpit Test Tube Baby Centre - Best IVF centre in Prayagraj – trusted IVF and fertility clinic with advanced technology, expert team, and high success rates. Book your consultation today!" />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Infertility Treatment in Prayagraj" />
        <meta property="og:description" content="Infertility & IVF Expert with women's healthcare with trusted gynecologists." />
      </Helmet>
      <Arrow />
      <ContactButton />
      <Head />
      {/* <Rewards /> */}
      <Treatements />
      {/* <VideoOfCentre/> */}
      <About />
      {/* <Ivfteam /> */}
      {/* <GoogleReview /> */}
      <Stats />
      {/* <NewsImages/> */}
<IVFTeamHome/>
<GoogleReview/>
      <Contact />
      <FAQ />
      <Appointment />
    </div>
  )
}
export default Home