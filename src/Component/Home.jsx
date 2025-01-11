import React from 'react'
import Head from './Head'
import Rewards from './Rewards'
import Treatements from './Treatements'
import GoogleReview from './GoogleReview'
import About from './About'
// import NewsImages from './NewsImages' 
import {FAQ} from './FAQ'
import Contact from './Contact'
import Stats from './Stats'
import Appointment from './Appointment'

const Home = () => {
  return (
    <div>
        <Head/>
        <Rewards/>
        <Treatements/>
        <About/>
        <GoogleReview/>
        <Stats/>
        {/* <NewsImages/> */}
        <Contact/>
        <FAQ />
        <Appointment/>
    </div>
  )
}
export default Home