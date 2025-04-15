import React, { useState } from 'react'
// import About from '../../Component/About';
import { Outlet } from 'react-router-dom';
import AboutDrVandanaBansal from './AboutDrVandanaBansal';
import aboutvandana from '../../assets/aboutvandana.jpg'
import DrVandana from '../../assets/DrVandana.jpg'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import About from './About'
import { GiVideoConference } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { GiPodiumWinner } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { Helmet } from "react-helmet";

const OurFounders = () => {
  const [data, setdata] = useState('')

  return (
    <>
      <Helmet>
        <title>About | Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="Know more about Arpit Test Tube Baby Centre, Prayagraj – a trusted name in fertility and IVF, known for ethical care, advanced technology, and compassionate team." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div>
        {/* <About /> */}
        <div className="container mx-auto flex px-3 py- md:flex-row flex-col items-center">
          <div className="pt-5 pb-0 md:w-96 w-5/6 ">
            <img className=" object-cover object-center roundedxl w-96" alt="hero" src={DrVandana} />
          </div>
          <div className="lg:flex-grow md:rounded-r-2xl my-2 md:w-1/2 py-3 pr-1 md:bg-rose-50 lg:pl-8 md:pl-8 flex flex-col md:items-start text-center md:text-left items-center ">
            <h1 className="title-font sm:text-3xl text-2xl md:mb-2 font-medium text-black"> Dr. Vandana Bansal
            </h1>

            <div className='flex'>
              <a href="https://www.instagram.com/drvandanabansal_gynaecologist/" target='_blank'>
                <FaInstagram className='m-2 md:text-whit text-rose-700 text-xl' />
              </a>
              <a href="https://www.facebook.com/vandana.bansal.33" target='_blank'>
                <FaFacebook className='m-2 md:text-whie text-rose-700 text-xl' />
              </a>
              <a href="https://www.youtube.com/@DrVandanaBansal" target='_blank'>
                <FaYoutube className='m-2 md:text-whie text-rose-700 text-xl' />
              </a>
              <a href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/" target='_blank'>
                <FaLinkedinIn className='m-2 md:text-wite text-rose-700 text-xl' />
              </a>
            </div>

            <p className="mb-8 md:text-left text-sm leading-relaxed text-black font-semibold text-justify"> DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration. <span className='text-rose-700'> know more </span></p>
            {/* <div className="flex justify-center">
                                  <Link to='bookappointment'>
                                      <button className="inline-flex text-white bg-rose-700 border-0 py-2 px-6 focus:outline-none hover:bg-rose-800 rounded text-sm">Book Appoinment</button>
                                  </Link>
                              </div> */}
          </div>
        </div>
        <div className='flex flex-wrap mx-auto w-4/6 gap-2'>

          <div className="md:w-72 m-10 h-fit text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {/* {                    details.map((index, key) => ( */}
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='introduction' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-rose-700 focus:z-10 focus:ring-2 focus:ring-rose-200 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Introduction
            </button>
            {/* ))                } */}
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='profile' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <AiOutlineProfile className="w-3 h-3 me-2.5" />
              Profile
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='objectives' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
              </svg>
              Objectives
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='research' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <AiOutlineGlobal className="w-3 h-3 me-2.5" />
              Researches
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='achievements' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <GiPodiumWinner className="w-3 h-3 me-2.5" />
              Major Achievements
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='awards' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <LiaAwardSolid className="w-3 h-3 me-2.5" />
              Awards
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='membership' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <MdCardMembership className="w-3 h-3 me-2.5" />
              Membership
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='nationalconference' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <GiVideoConference className="w-3 h-3 me-2.5" />
              National Conrference
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='internationalconference' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <GiVideoConference className="w-3 h-3 me-2.5" />
              International Conference
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='workshop' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <GrWorkshop className="w-3 h-3 me-2.5" />
              Workshop
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='otherachievements' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <GiPodiumWinner className="w-3 h-3 me-2.5" />
              Other Achievements
            </button>
            <button type="button" onClick={(e) => { setdata(e.target.value) }} value='visits' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <FaLocationArrow className="w-3 h-3 me-2.5" />
              International Visits
            </button>
          </div>

          <div>
            <AboutDrVandanaBansal data={data} />
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </>
  )
}

export default OurFounders;