import React from 'react'
import '../Style/neonStyle.css'
import aboutvandana from '../assets/aboutvandana.jpg'
import DrVandana from '../assets/DrVandana.jpg'
import akBansal from '../assets/akBansal.jpg'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const About = () => {
    return (
        <>
            <section id='about' className="text-gray-600 w-11/12 mx-auto mt-14 body-font">
                <div className="container mx-auto flex px-3 py- md:flex-row flex-col items-center">
                    <div className="pt-5 pb-0 md:w-96 w-5/6 ">
                        <img className=" object-cover object-center rounded-tl-3xl roundedxl border-l-8 border-red-200 w-96" alt="hero" src={DrVandana} />
                    </div>
                    <div className="lg:flex-grow md:rounded-r-2xl my-2 md:w-1/2 py-3 pr-1 md:bg-rose-50 lg:pl-8 md:pl-8 flex flex-col md:items-start text-center md:text-left items-center ">
                        <h1 className="title-font sm:text-3xl text-2xl md:mb-2 font-medium text-black"> Dr. Vandana Bansal
                        </h1>

                        <div className='flex'>
                            <a href="https://www.instagram.com/dr.vandanabansal" target='_blank'>
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

                        <p className="mb-8 md:text-left text-sm leading-relaxed text-black font-semibold text-justify"> DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists, High Risk Pregnancy Care, Infertility & IVF and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery. Besided, she is Director of 200-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre Allahabad.<span className='text-rose-700'> know more </span></p>
                        {/* <div className="flex justify-center">
                            <Link to='bookappointment'>
                                <button className="inline-flex text-white bg-rose-700 border-0 py-2 px-6 focus:outline-none hover:bg-rose-800 rounded text-sm">Book Appoinment</button>
                            </Link>
                        </div> */}
                    </div>
                </div>
                <hr className='md:invisible' />
                <div className="container mx-auto flex px-3 py- md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:rounded-l-2xl md:w-1/2 py-5 pr-1 md:bg-rose-50 lg:pl-8 md:pl-8 flex flex-col md:items-start text-center md:text-left items-center ">
                        <h1 className="title-font sm:text-3xl text-2xl md:mb-2 font-medium text-left text-black"> Late Dr. Ashvini Kumar Bansal
                        </h1>

                        <p className="mb-8 md:text-left text-sm leading-relaxed text-black font-semibold text-justify"> DR. Late Dr. Ashwini Kumar Bansal was one of the most renowned Senior Laparoscopic and General Surgeons, with a heart of gold. He was a leading specialist in Male Infertility in the state of Uttar Pradesh. He was the Founder and Director of the 210-bed Multi speciality & Super speciality Jeevan Jyoti Group of Hospitals, Allahabad. <span className='text-rose-700'> know more </span></p>
                        {/* <div className="flex justify-center">
                            <Link to='bookappointment'>
                                <button className="inline-flex text-white bg-rose-700 border-0 py-2 px-6 focus:outline-none hover:bg-rose-800 rounded text-sm">Book Appoinment</button>
                            </Link>
                        </div> */}
                    </div>
                    <div className="pb-5 md:w-96  w-5/6 ">
                        <img className=" object-cover object-center rounded-br-3xl border-e-8 border-red-300 w-96 roundedxl" alt="hero" src={akBansal} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About







