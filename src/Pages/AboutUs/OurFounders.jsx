import React, { useState } from 'react'
import About from '../../Component/About';
import { Outlet } from 'react-router-dom';
import NavigationB from '../../Component/NavigationB';
import Footer from '../../Component/Footer';
import AboutDrVandanaBansal from './AboutDrVandanaBansal';
// import About from './About'
import { GiVideoConference } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { GiPodiumWinner } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";

const OurFounders = () => {
  const [data, setdata] = useState('')
  // console.log(data)
  // const details = [
  //     {
  //         s: 'gg'
  //     },
  //     {
  //         s: 'gg'
  //     },
  //     {
  //         s: 'gg'
  //     },
  //     {
  //         s: 'gg'
  //     },
  //     {
  //         s: 'gg'
  //     },
  //     {
  //         s: 'gg'
  //     },
  //     {
  //         s: 'gg'
  //     },
  //     {
  //         s: 'gg'
  //     },
  //     {
    //         s: 'gg'
    //     },
    //     {
      //         s: 'gg'
      //     },
      // ]
      return (
        <div>
      <About />
      <div className='flex mx-auto w-4/6 gap-2'>

        <div className="w-72 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {/* {                    details.map((index, key) => ( */}
          <button type="button" onClick={(e) => { setdata(e.target.value) }} value='introduction' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
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
          <GiPodiumWinner  className="w-3 h-3 me-2.5"  />
            Major Achievements
          </button>
          <button type="button" onClick={(e) => { setdata(e.target.value) }} value='awards' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          <LiaAwardSolid className="w-3 h-3 me-2.5" />
            Awards
          </button>
          <button type="button" onClick={(e) => { setdata(e.target.value) }} value='membership' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          <MdCardMembership className="w-3 h-3 me-2.5"/>
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
          <GiPodiumWinner  className="w-3 h-3 me-2.5"  />
            Other Achievements
          </button>
          <button type="button" onClick={(e) => { setdata(e.target.value) }} value='visits' className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          <FaLocationArrow className="w-3 h-3 me-2.5" />
            Visits
          </button>
        </div>

        <div>
          <AboutDrVandanaBansal data={data} />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default OurFounders;