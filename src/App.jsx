import './App.css'
import { Outlet }
  from 'react-router-dom'
// import Head from './Component/Head.jsx'
// import About from './Component/About.jsx'
// import Contact from './Component/Contact.jsx'
// import Treatements from './Component/Treatements.jsx'
// import GoogleReview from './Component/GoogleReview.jsx'
// import { FAQ } from './Component/FAQ.jsx'
// import Home from './Component/Home.jsx'
// import Stats from './Component/Stats.jsx'
import NavigationB from './Component/NavigationB.jsx'
import Footer from './Component/Footer.jsx'
import CurrentRoute from './Component/CurrentRoute.jsx'


function App() {

  return (
    <>
      {/* ff918d hexa color code for webstie 
    74cef0 sky blue color for website
     */}
      <NavigationB  />
      <div className="">
        <CurrentRoute />
      </div>
      <div className=" fixed top-56 -rotate-90 -ml-20 z-50">
        <a href="/book-appointment">
          <button className="bg-rose-400 hover:bg-red-800 shadow-md text-white py-2 px-8 rounded-br-2xl rounded-bl-2xl">
            Book Appointment
          </button>
        </a>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
export default App