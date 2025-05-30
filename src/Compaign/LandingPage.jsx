import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Head from "../Component/Head";
// import BookYourAppointment from "../Pages/BookYourAppointment";
// import "aos/dist/aos.css";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import PromoAdF2 from "../assets/PromoAdF2.png";
import PromoAd from "../assets/PromoAd.jpg";
import LogoAB from '../assets/LogoAB.png'
import DrVandana from '../assets/DrVandana.jpg'
import FirstBanner from "../assets/Banners/FirstBanner.png";
import "../Style/Style.css";

const LandingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const gclid = queryParams.get("gclid");
  const utm_source = queryParams.get("utm_source");
  const utm_campaign = queryParams.get("utm_campaign");
  const utm_term = queryParams.get("utm_term");

  const images = [
    // PromoAd,
    PromoAdF2,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); return nextIndex;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Call the nextImage function to move to the next slide
    }, 40000); // 2 seconds interval

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // ........................
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a0183251-d93e-4764-b723-39a525ccfa78");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert('Form has bees successfully submitted, Thanks for contact me')
      const formData = new FormData('');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-rose-100 shadow-md text-black sticky top-0 z-20 py-3 px-4 text-center text-xl font-bold">
        <ul className="flex flex-wrap md:justify-between text-center md:mx-72">
          <li className="text-rose-700"><img src={LogoAB} className="w-40 md:w-60" alt="" /></li>
          <li className="invisibl py-3">
            <IoCallOutline className="hidden md:inline mr-2 text-3xl" />
            <a className="hidden md:block" href="tel:9151037784"> +91 9151037784 </a></li>
          <li className="hidden md:block py-3">
            <button className="bg-green-500 align-middle text-white p-2 mr-2 rounded-full shadow-lg hover:bg-red-700 transition-all">
              <a href="https://wa.me/message/JG2WQ7ZXYWU6B1" className="" target="_blank"><FaWhatsapp size={20} /></a>
            </button>
            Whatsapp
          </li>
        </ul>
      </header>

      {/* Introduction Section........................................... */}

      <div>
        <img className="hidden md:block" src={PromoAdF2} alt="" />
        <img className="md:hidden" src={FirstBanner} alt="" />
      </div>


      <div className="flex flex-wrap mb-20 bg-gray-200">
        <div className="px-6 py-3 md:py-10 mx-auto text-center">
          <h1 className="md:text-3xl font-bold mb-2">Happy Couples</h1>
          <p className="md:text-lg">20,000+</p>
        </div>
        <div className="px-6 py-3 md:py-10 mx-auto text-center">
          <h1 className="md:text-3xl font-bold mb-2">Success Rate</h1>
          <p className="text-lg">70%+</p>
        </div>
        <div className="px-6 py-3 md:py-10 mx-auto text-center">
          <h1 className="md:text-3xl font-bold mb-2">Years of Experience</h1>
          <p className="text-lg">38+</p>
        </div>
      </div>

      <section id='contact' className="text-gray-600 body-font relative">
        <div className="container md:px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-600 font-asap">Book Your Appointment</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">If you'd like to book an appointment, please fill out this form. I’ll get back to you as soon as possible to confirm your booking</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={onSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile</label>
                  <input type="tel" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="tel" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-700 focus:bg-white focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-rose-700 border-0 py-2 px-8 focus:outline-none hover:bg-rose-800 rounded text-lg">Book Now</button>
              </div>
            </form>
          </div>
        </div>
        <div>
        </div>
      </section>

      {/* Details Section............................................... */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            {/* <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
      </div> */}
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={DrVandana} alt="" />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Dr Vandana Bansal</h2>
                  <div class="w-12 h-1 bg-rose-500 rounded mt-2 mb-4"></div>
                  <p class="text-base font-bold"> MBBS, MS (Obstetrics & Gynaecology) |
                    Director & Chief Fertility Consultant | Laparoscopic & Hysteroscopic Surgeon</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg text-justify mb-4"> Dr. Vandana Bansal is a leading name in the field of infer lity treatment and women's health. With over
                  38+ years of experience, she has helped thousands of couples fulfil their dream of parenthood. Known for her empathe c counselling, me culous approach, and high IVF success rates, she is deeply commi ed to ethical and pa ent-centric care</p>
                <p class="leading-relaxed text-justify text-lg mb-4">Welcome to Advanced Fer lity & IVF Centre
                  We are a state-of-the-art facility dedicated to helping
                  couples achieve their dream of parenthood. With
                  world-class technology, a compassionate team, and
                  decades of experience, we offer personalized fer lity
                  care for every hopeful parent.</p>
                {/* <a class="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ................................... */}

      <div className="flex flex-wrap my-28">
        <section className="px-6 py-10 bg-rose-50 rounded-lg mx-auto ">
          <h2 className="text-4xl text-rose-800 font-semibold mb-4">How IVF Benifits Aspiring Couples?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>IVF work where other fertility treatment fails!</li>
            <li>Improve the chances of success</li>
            <li>Has a higher success rate when compare to other fertility treatment</li>
          </ul>
        </section>
        <section className="px-6 py-10 bg-rose-50 rounded-lg mx-auto ">
          <h2 className="text-4xl font-semibold text-rose-800 mb-4">Our Commitment to You</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>We walk with you — every step, every emotion</li>
            <li>No shortcuts. No false hopes. Just honest care</li>
            <li>24x7 patient support that listens and understands</li>
          </ul>
        </section>
        <section className="px-6 py-10 bg-rose-50 rounded-lg mx-auto ">
          <h2 className="text-4xl font-semibold text-rose-800 mb-4">Why Choose US?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>India’s Top IVF centre with 70%+ Success Rate centers</li>
            <li>Advanced technology & 38+ Years of Experience</li>
            <li>Personalized fertility plans</li>
          </ul>
        </section>
      </div>

      {/* Appointment .......................................... */}

      <div className="sticky md:hidden bottom-0 w-full bg-rose-800 px-2 py-4 text-white">
        <ul className="flex justify-between">
          <li className=" border-gray-300">
            <a className="mx-3 text-lg flex" href="tel:9151037784" target="_blank">
              <IoCallOutline className="text-xl mr-2" />
              +91 9151037784
            </a>
          </li>
          <li>
            <a className="mx-3 text-lg flex" href="https://wa.me/message/JG2WQ7ZXYWU6B1" target="_blank">
              <FaWhatsapp className="text-xl mr-2" size={25} />
              Call Us
            </a>
          </li>
        </ul>
      </div>
      {/* .............................................. */}

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-sm text-gray-700 py-4">
        &copy; {new Date().getFullYear()} Arpit Test Tube Baby Centre, All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;