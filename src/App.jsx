import './App.css'
import { Outlet }
  from 'react-router-dom'
// import Head from './Component/Head.jsx'
// import About from './Component/About.jsx'
// import Contact from './Component/Contact.jsx'
// import Treatements from './Component/Treatements.jsx'
// import GoogleReview from './Component/GoogleReview.jsx'
import { FAQ } from './Component/FAQ.jsx'
import NavigationB from './Component/NavigationB.jsx'
// import Home from './Component/Home.jsx'
import Footer from './Component/Footer.jsx'
// import Stats from './Component/Stats.jsx'


function App() {

  return (
    <>
    {/* ff918d hexa color code for webstie 
    74cef0 sky blue color for website
     */}
      <NavigationB />
      <div className=" fixed top-52 -rotate-90 -ml-16 z-50">
        <a href="bookappointment">
          <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-3xl">
            Book Appointment
          </button>
        </a>
      </div>
      {/* <Stats/> */}
      <Outlet />
      <Footer />
    </>
  )
}
export default App