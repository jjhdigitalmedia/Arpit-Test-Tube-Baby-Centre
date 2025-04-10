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
      <div className=" fixed top-52 -rotate-90 -ml- z-50">
        <a href="book-appointment">
          <button className="bg-rose-400 hover:bg-red-800 shadow-md text-white py-2 px-6 rounded-br-2xl rounded-bl-2xl">
            Book Appointment
          </button>
        </a>
      </div>
      {/* <Stats/> */}
      {/* <div className='bg-rose-50'> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  )
}
export default App