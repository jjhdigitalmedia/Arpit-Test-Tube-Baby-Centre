import React from 'react'
import bookvandana from "../assets/bookvandana.jpg";

const BookAppointment = () => {
    return (
        <div className='text-center pt-28'>
            <div className='bg-amber-100 p-4 m-3 text-center'>
                <div className='m-auto w-fit mb-2'> <span className='mb-2'>Book Your Appointment through this mobile no. - </span>
                    <h1 className=' text-center relative flex h-3 w-3'>
                        <span className='text-rose-700 font-bold m-auto absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 bot'>+911000000001</span>
                    </h1>
                </div>
            </div>
            <div class="lg:flex-grow mt-3 text-center m-auto md:w-4/5 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center">
                <h1 class="title-font text-center m-auto sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Vandana Bansal
                </h1>
                <p class="mb-8 text-center leading-relaxed">DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration.</p>
            </div>
            <div className='m-auto w-80 h-80 mb-11'>
                <img
                    class="border-4 w-full mb-10 border-rose-700 object-cover object-center rounded-2xl md:rounded-full"
                    alt="hero"
                    src={bookvandana}
                />
            </div>
            <div className='mx-40 my-8 flex justify-center'>
                <div className='ms-5 text-left'>
                    <h1 className='font-bold text-3xl mb-3'>Expertise</h1>
                    <ul>
                        <li type='circle'>Comprehensive Eye Exams</li>
                        <li type='circle'>Cataract Surgery</li>
                        <li type='circle'>LASIK and Refractive Surgery</li>
                        <li type='circle'>Glaucoma Management</li>
                        <li type='circle'>Pediatric Ophthalmology</li>
                        <li type='circle'>Treatment of Macular Degeneration</li>
                        <li type='circle'>Diabetic Eye Care</li>
                    </ul>
                </div>
                <div className='ms-5 text-left'>
                    <h1 className='font-bold text-3xl mb-3'>Achievements</h1>
                    <ul>
                        <li type='circle'>
                            🏆  ICMR Project “Ocular Involvement in Leprosy” 1981 to 1986
                        </li>
                        <li type='circle'>
                            🏆  MCH Awareness Generation Training Programme: New Delhi, 1999
                        </li>
                        <li type='circle'>
                            🏆 Electrotherapy Training: at Jaipur, 2000 </li>
                        <li type='circle'>
                            🏆 NABH POI Course 5th Edition October 2022, NABH New Delhi, 2022
                        </li>
                        <li type='circle'>
                            🏆 Materials Management in Hospitals at National Academy of Indian Railways: Vadodara, 2010
                        </li>
                    </ul>
                </div>
                <div className='ms-5 text-left'>
                    <h1 className='font-bold text-3xl mb-3'>Memberships</h1>
                    <ul>
                        <li type='circle'>
                            Indian Medical Association – Life- 1990, 12531/UP/452/57/L
                        </li>
                        <li type='circle'>
                            All Indian Ophthalmological Society – Life- 1994, M-2917
                        </li>
                        <li type='circle'>
                            UP State Ophthalmological Society - Life </li>
                        <li type='circle'>
                            Delhi Ophthalmological Society - Life – 1997, N-541
                        </li>
                        <li type='circle'>
                            Indian Red Cross Society - Life -1999
                        </li>
                        <li type='circle'>
                            Indian Public Health Association- Life -2008
                        </li>
                        <li type='circle'>
                            Association of Indian Occupational Health -Life - 2011
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment