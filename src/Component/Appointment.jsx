import React from 'react'

const Appointment = () => {
  return (
    <div className="bg-rose-200 flex flex-wrap p-16 w-full m-auto ">
    <div className=" text-lef md:w-1/2 w-full px-10">
      <h1 className=' text-4xl mb-2 text-gray-600 font-bold'>Request an Appointment</h1>
      <span className='text-xl text-left text-white'>Don't Wait, Consult with Dr. Arpit Bansal Today!</span>
    </div>

     <div className=" text-right md:w-1/2 w-full px-4">
      {/* <h1 className='mb-8 text-2xl font-bold'>Happy Patients</h1> */}
      <button className='bg-white py-4 w-96 rounded-3xl text-2xl px-10'>Book Now</button>
      {/* <span className='text-3xl text-white font-extrabold'>1100+</span> */}
    </div>

    {/*
    <div className="lg:w-1/4 md:border-r-2 text-center md:w-1/2 w-full px-4">
      <h1 className='mb-8 text-2xl font-bold'>Happy Patients</h1>
      <span className='text-3xl text-white font-extrabold'>5265+</span>
    </div>

    <div className="lg:w-1/4 text-center md:w-1/2 w-full px-1">
      <h1 className='mb-8 text-2xl font-bold'>Happy Patients</h1>
      <span className='text-3xl text-white font-extrabold'>99999+</span>
    </div> */}

  </div>
  )
}

export default Appointment