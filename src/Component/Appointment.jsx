import { Link } from 'react-router-dom'

const Appointment = () => {
  return (
    <div className="bg-gray-50 flex items-center flex-wrap md:px-16 py-10 w-full m-auto ">

      <div className="text-center md:text-left md:w-1/2 w-full md:py-10 px-2 md:px-10">
        <h1 className=' text-4xl text-centre md:text-left md:text-5xl mb-2 text-gray-600 font-bold md:mt-4'>Request an Appointment</h1>
        <span className='text-2xl md:text-left block text-gray-500 mt-2'>Don't Wait, Consult with Dr. Vandana Bansal Today!</span>
      </div>

      <div className=" md:w-1/2 w-full items-center md:items-end lg:text-right my-8 px-4">
        <button className='bg-rose-700 text-white py-3 md:w-96 w-60 mx-auto rounded-xl md:text-2xl px-10'><Link to='/book-appointment'>Book Now</Link></button>
      </div>

    </div>
  )
}
export default Appointment;