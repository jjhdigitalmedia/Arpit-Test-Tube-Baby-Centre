import React from 'react'
import { Link } from 'react-router-dom'

const Appointment = () => {
  return (
    <div className="bg-rose-200 flex flex-wrap md:p-16 w-full m-auto ">
      <div className=" text-lef md:w-1/2 w-full py-10 px-10">
        <h1 className=' text-2xl text-centre md:text-4xl mb-2 text-gray-600 font-bold'>Request an Appointment</h1>
        <span className='text-xl md:text-left text-white'>Don't Wait, Consult with Dr. Vandana Bansal Today!</span>
      </div>

      <div className="text-right items-center md:w-1/2 w-full px-4">
        <button className='bg-white py-3 md:w-96 w-48 mx-auto rounded-3xl text-2xl px-10'><Link to='/book-appointment'> Book Now</Link></button>
      </div>
    </div>
  )
}

export default Appointment;