import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <hr className="text-gray-300" />
        <div className="container flex flex-wrap px-5 py-12 mx-auto ">
          {/* <div className="flex flex-wrap md:text-left order-first"> */}



          <div className="lg:w-1/4 md:w-1/2 w-full md:px-4">
            <h2 className="font-bold text-2xl my-10">
              Treatment
            </h2>
            {/* <nav className="list-none mb-10">
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" />   IUI
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" /> IVF-ET
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" /> ICSI
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" />Laser Assisted Hatching
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" /> IMSI
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" /> Embryo Donation (ED)
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" /> Oocyte Donation (OD)
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" /> Blastocyst Transfer
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" />Semen Cryopreservation
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  Oocyte Cryopreservation
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" /> Embryo Banking
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" />MESA (Microedpididymal Sperm Aspiration)
                </Link>
              </li>
              <li>
                <Link to='' className="text-black hover:text-white">
                  <IoIosArrowForward className="inline" />TESA (Testicular Sperm Aspiration and Cryopreservation)
                </Link>
              </li>
            </nav> */}
            <ul class="flex flex-col mt-4 space-y-2 text-base">
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/iui">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <IoIosArrowForward className="inline" />   
                  <span>IUI</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/ivf-et">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>IVF-ET</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/icsi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>ICSI</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/laser-assisted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Laser Assisted Hatching</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/imsi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span> IMSI</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/embryo-donation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Embryo Donation (ED)</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/oocyte-donation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Oocyte Donation (OD)</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/blastocyst-transfer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Blastocyst Transfer</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/semen-cryopreservation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Semen Cryopreservation</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/oocyte-cryopreservation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span> Oocyte Cryopreservation</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/embryo-bank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Embryo Banking</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/mesa-microepididymal-sperm-aspiration">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>MESA (Microedpididymal Sperm Aspiration)</span>
                </Link>
              </li>
              {/* <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/tesa-testicular-sperm-aspiration-cryopreservation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>TESA (Testicular Sperm Aspiration and Cryopreservation)</span>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="lg:w-1/6 md:w-1/3 w-full md:px-4">
            <h2 className="font-bold text-2xl my-10">
              Test & Evaluation
            </h2>
            {/* <nav className="list-none mb-10">
              <ol>
                <li>
                  <Link to='/' className="text-black hover:text-red-600"><IoIosArrowForward className="inline" />Hormonal Analysis</Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:text-red-600"><IoIosArrowForward className="inline" />3D & 4D Ultrasound & Colour Doppler</Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:text-red-600">
                    Hysterosalpingography (HSG) & Sono Salpingography (SSG)
                  </Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:tewhite"><IoIosArrowForward className="inline" />Ovulation Induction wiht Follicle Monitoring</Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:tewhite"><IoIosArrowForward className="inline" />AI Assisted Semen Analysis</Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:tewhite"><IoIosArrowForward className="inline" />Fertility Enhancing Laparoscopic & Hysteroscopic Surgeries</Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:tewhite"><IoIosArrowForward className="inline" />Diagnostic Video Laparoscopic/Hysteroscopic</Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:tewhite"><IoIosArrowForward className="inline" />Surgery for Male Infertility</Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:tewhite"><IoIosArrowForward className="inline" />PRP Treatment of Endometrium & Ovary</Link>
                </li>
                <li>
                  <Link to='' className="text-black hover:tewhite"><IoIosArrowForward className="inline" />Stem Cell Therapy</Link>
                </li>
              </ol>
            </nav> */}
            <ul class="flex flex-col mt-4 space-y-2 text-base">
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/hormonal-analysis">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Hormonal Analysis</span>
                </Link>
              </li>
              {/* <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/3d-4d-ultrasound-colour-doppler">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>3D & 4D Ultrasound & Colour Doppler</span>
                </Link>
              </li> */}
              {/* <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/hsg-sono">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span> Hysterosalpingography (HSG) & Sono Salpingography (SSG)</span>
                </Link>
              </li> */}
              {/* <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/ovulation-induction">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Ovulation Induction wiht Follicle Monitoring</span>
                </Link>
              </li> */}
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/ai-semen-analysis">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>AI Assisted Semen Analysis</span>
                </Link>
              </li>
              {/* <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/fertility-enhancing-laparoscopic-hysteroscopic-surgeries">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Fertility Enhancing Laparoscopic & Hysteroscopic Surgeries</span>
                </Link>
              </li> */}
              {/* <li>
                <Link class="flex items-centre hover:text-primary gap-1 hover:ml-1 duration-200" to="/diagnostic-video-laparoscopic-hysteroscopic">
                 
                    <FaArrowRight />
                  <span>Diagnostic Video Laparoscopic/Hysteroscopic</span>
                </Link>
              </li> */}
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/surgery-for-male-infertility">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Surgery for Male Infertility</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/prp-treatment">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> */}
                    <FaArrowRight />
                  <span>PRP Treatment of Endometrium & Ovary</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/stemcell-therapy">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> */}
                    <FaArrowRight />
                  <span>Stem Cell Therapy</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/6 md:w-1/3 w-full md:px-4">
            <h2 className="font-bold text-2xl my-10">
              Important Links
            </h2>
            {/* <nav className="list-none mb-10">
              <li>
                <Link to='/' className="text-black hover:text-red-600">Home</Link>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Patients Guide</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">
                  Facilities
                </a>
              </li>
              <li>
                <a className="text-black hover:tewhite">Our IVF Team</a>
              </li>
              <li>
                <a className="text-black hover:tewhite">Our Success Rate</a>
              </li>
              <li>
                <a className="text-black hover:tewhite">Gallery</a>
              </li>
            </nav> */}
            <ul class="flex flex-col mt-4 space-y-2 text-base">
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/patients-guide">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Patients Guide</span>
                </Link>
              </li>
              {/* <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span> Facilities</span>
                </Link>
              </li> */}
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/ivf-team">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Our IVF Team</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/achievements">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Our Success Rates</span>
                </Link>
              </li>
              <li>
                <Link class="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/gallery">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full md:px-1">
            <h2 className="font-bold text-2xl my-10">
              Contact Info
            </h2>
            <nav className="list-none mb-10 ">
              {/* <li>
              </li> */}
            </nav>
            <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' className="my-4 text-black" target="_blank">
              <IoLocationOutline className="inline text-red-700 text-xl" />162 Bai Ka Bagh, Lowther Road, Pincode - 211003, Prayagraj
              (Allahabad) UTTAR PRADESH, INDIA
            </a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0597529168485!2d81.84401430943906!3d25.43626577746421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb4375248d9b%3A0x385a6afccbc59834!2sDr.%20Vandana%20Bansal%20-%20Best%7CGynaecologist%20Doctors%7CHigh%20Risk%20Pregnancy%20Doctor%7CLaproscopy%20Doctor%7CInfertility%20Doctor%20in%20Allahabad!5e0!3m2!1sen!2sin!4v1720863709269!5m2!1sen!2sin" style={{ border: 0, width: '100%', marginTop: 10, borderRadius: 17 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <button className="bg-rose-500 text-white py-2 px-6 mt-4 rounded-xl">
            <Link to="/book-appointment">
                Book Appointment
            </Link>
              </button>
          </div>

          <div className="lg:w-full md:w-1/2 w-full md:pr-16">
            <h1 className="font-bold text-2xl my-10">Arpi Test Tube Baby Centre</h1>
            <p>Arpit Test Tube Baby Centre is situated in Prayagraj, also known as the City of God in Persian, and Sangam city in the North Indian state of Uttar Pradesh. The ancient name of the city was Prayag, believed to be the spot where Brahma offered his first sacrifice after creating the world. It is one of four sites of the mass Hindu pilgrimage, Kumbh Mela. It holds a position of importance in Hindu scriptures as it is situated at the confluence of the 'Triveni Sangam' of the holy rivers Ganges and Yamuna, and the mythical Saraswati River. The Purna (complete) Kumbh or Maha Kumbh, the biggest and most auspicious fair, which falls once every 12 years, is always held in Prayagraj. An entire sea of humanity descends upon the riverside town during this time. Ardha Kumbh Mela is held every 6th year, and the Magh Mela is the annual version of the Kumbh. The Maha Kumbh Mela will be held in Prayagraj in 2025. On important bathing dates, lakhs of pilgrims take baths on the banks of the holy Sangam.</p>
            <div className="flex m-auto my-4">
              <a
                href="https://www.instagram.com/dr.vandanabansal"
                target="_blank"
              >
                <FaInstagram className="mx-2 text-rose-700 text-xl" />
              </a>
              <a
                href="https://www.facebook.com/vandana.bansal.33"
                target="_blank"
              >
                <FaFacebook className="mx-2 text-rose-700 text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@DrVandanaBansal"
                target="_blank"
              >
                <FaYoutube className="mx-2 text-rose-700 text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/"
                target="_blank"
              >
                <FaLinkedinIn className="mx-2 text-rose-700 text-xl" />
              </a>
            </div>
          </div>


          {/* </div> */}
        </div>
        <div className="border-t-2">
          <div className="container px-5 w-fit py-6 mx-auto 
            sm:flex-row flex-col">
            {/* <a className="text-white flex title-font font-medium items-center md:justify-start justify-center">
              <span className="ml-3 text-xl">Best IVF Centre in Prayagraj</span>
            </a> */}
            <p className="text-sm text-gray-700 sm:ml-6 sm:mt-0">
              © 2025 All rights reserved by Arpit Test Tube Baby Centre
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
