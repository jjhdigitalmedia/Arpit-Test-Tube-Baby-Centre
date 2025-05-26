import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Head from "../Component/Head";
// import BookYourAppointment from "../Pages/BookYourAppointment";
// import "aos/dist/aos.css";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import PromoAd2 from "../assets/PromoAd2.png";
import PromoAd from "../assets/PromoAd.jpg";
import "../Style/Style.css";

const LandingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const gclid = queryParams.get("gclid");
  const utm_source = queryParams.get("utm_source");
  const utm_campaign = queryParams.get("utm_campaign");
  const utm_term = queryParams.get("utm_term");

  const images = [
    PromoAd,
    PromoAd2,
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

    formData.append("access_key", "f5a98577-08b5-4cd3-ae37-3bb1137a0e35");

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
      <header className="bg-rose-800 text-white p-4 text-center text-xl font-bold">

        <ul className="flex justify-between mx-72">
          <li>Arpit Test Tube Baby Centre IVF - Affordable IVF Treatment</li>
          <li>
            <IoCallOutline className="inline mr-2 text-3xl" />
            <a href="tel:9151037784"> +91 9151037784 </a></li>
          <li>
            <button className="bg-green-500 text-white p-2 mr-2 rounded-full shadow-lg hover:bg-red-700 transition-all">
              <a href="https://wa.me/message/JG2WQ7ZXYWU6B1" className="" target="_blank"><FaWhatsapp size={20} /></a>
            </button>
            Whatsapp
          </li>
        </ul>
      </header>

      {/* Introduction Section........................................... */}


      <div className="relative h-auto mx-auto overflow-hidden">
        {/* Left Arrow Button */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black z-10 bg-opacity-50 p-2 rounded-full text-xl"
          onClick={prevImage}
        >
          ‹
        </button>
        {/* Image Container with Sliding Effect */}
        <div
          className="flex transition-transform  duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-96">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-4/"
              />
            </div>
          ))}
        </div>
        {/* Right Arrow Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full text-xl"
          onClick={nextImage}
        >
          ›
        </button>

        {/* Dot Indicators at the Bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-rose-700' : 'bg-gray-50'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <section className="px-6 py-8 text-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-2">IVF That Fits Your Budget</h1>
        <p className="text-lg">Every month broke my heart. Every test felt like failure. I was tired… but not ready to give up. IVF gave me a reason to hope again.</p>
      </section>

      {/* Details Section............................................... */}


      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Indira US?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>India’s Top IVF centre with 70%+ Success Rate centers</li>
          <li>Advanced technology & experienced doctors</li>
          <li>Personalized fertility plans</li>
          <li>Transparent pricing</li>
        </ul>
      </section>

      {/* Appointment .......................................... */}

      <section id='contact' className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-600 font-asap">Book Your Appointment</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">If you're seeking treatment or have any queries, feel free to submit this form. I'll get back to you as soon as possible.</p>
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
      {/* .............................................. */}

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-sm text-gray-700 py-4">
        &copy; {new Date().getFullYear()} Indira IVF. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;