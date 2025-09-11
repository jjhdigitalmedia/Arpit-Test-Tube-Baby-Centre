import React, { useEffect, useState, useRef } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import PromoAdF2 from "../assets/PromoAdF2.webp";
import LogoAB from '../assets/LogoAB.webp'
import DrVandana from '../assets/DrVandana.webp'
import FirstBanner from "../assets/Heros/FirstBanner.webp";
import "../Style/Style.css";
import { Helmet } from "react-helmet";
// import PromoAd from "../assets/PromoAd.jpg";

const LandingPage = () => {

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

    // Step 2: Submit to Pabbly Webhook (NEW)
    await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzMTA0MzA1MjY4NTUzMzUxMzQi_pc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: json
    });

    if (res.success) {
      console.log("Success", res);
      alert('Form has bees successfully submitted, Thanks for contact me')
      const formData = new FormData('');

      if (typeof gtag === "function") {
        windows.gtag('event', 'conversion', {
          'send_to': 'AW-17183522494' // <-- Replace with your own conversion ID
        });
      }
    }
  };


  return (
    <>
      <Helmet>
        <title>Best IVF Treatment in Prayagraj | Arpit Test Tube Baby Centre</title>
        <meta name="description" content="Book expert IVF consultation in Prayagraj. Affordable fertility treatment with high success rate. Call now at Arpit Test Tube Baby Centre." />
        <meta name="keywords" content="IVF in Prayagraj, Fertility treatment, Infertility treatment in allahabad, Infertilit treatment in prayagraj, IVF treatment in prayagraj, Dr Vandana Bansal, jeevan Jyoti Hospital, Dr Arpit Bansal, Hysteroscopic surgery, Gynaecologist in prayagraj Test tube baby, IUI, IVF specialist, gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div className="min-h-screen bg-white text-gray-800">
        {/* Header */}
        <header className="bg-rose-50 shadow-md text-black sticky top-0 z-20 py-3 px-4 text-center text-xl font-bold">
          <ul className="flex flex-wrap md:justify-between text-center md:mx-72">
            <li className="text-rose-700"><img src={LogoAB} className="w-40 md:w-60" alt="" /></li>
            <li className="invisibl py-3">
              <IoCallOutline className="hidden md:inline text- mr-2 text-3xl" />
              <a className="hidden md:inline text-whit" href="tel:6390103012"> +91 6390103012 </a></li>
            <li className="hidden md:block py-3 text-whit">
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


        <div className="flex flex-wrap mb-10 bg-gray-200">
          <div className="px-6 py-3 md:py-10 mx-auto text-center">
            <h1 className="md:text-3xl font-bold mb-2">Happy Couples</h1>
            <p className="md:text-lg">20,000+</p>
          </div>
          <div className="px-6 py-3 md:py-10 mx-auto text-center">
            <h1 className="md:text-3xl font-bold mb-2">Success Rate</h1>
            <p className="text-lg">65%+</p>
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
                    <input required type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile</label>
                    <input required type="tel" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                    <p>Director - Jeevan Jyoti Hospital</p>
                    <p>Chief Infertility & IVF Consultant</p>
                    <p class="text-base font-bold"> MBBS, MS (Obstetrics & Gynaecology) |
                      Director & Chief Fertility Consultant | Laparoscopic & Hysteroscopic Surgeon</p>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-lg text-justify mb-4"> Dr. Vandana Bansal is a renowned expert in infertility treatment and women’s health, with over 38 years of experience. She has helped thousands of couples achieve their dream of parenthood through her compassionate counseling, meticulous approach, and consistently high IVF success rates. Deeply committed to ethical, patient-centric care, Dr. Bansal continues to be a trusted name in reproductive medicine.</p>
                  <p class="leading-relaxed text-justify text-lg mb-4">We are a state-of-the-art facility committed to helping couples achieve their dream of parenthood. With world-class technology, a compassionate team, and decades of experience, we provide personalized fertility care tailored to every hopeful parent’s journey.</p>

                </div>


              </div>
            </div>
          </div>
        </section>
        <div className="container px-5 py-24 mx-auto flex flex-col">

          <h1 className="text-3xl font-bold text-center text-rose-800 mb-10">Arpit Test Tube Baby Centre</h1>
          <p className="text-justify">
            At Arpit Test Tube Baby Centre, we understand that the journey to parenthood can be filled with both hope and uncertainty. That’s why we are committed to offering compassionate, ethical, and cutting-edge fertility care tailored to each couple’s unique needs. With years of expertise in IVF, ICSI, IUI, and other assisted reproductive technologies, our center has helped hundreds of families realize their dream of having a child. Our state-of-the-art laboratory, world-class embryology setup, and experienced medical team ensure the highest standards of treatment and transparency. We believe in combining advanced science with emotional support—because fertility is not just about medicine, it's about trust, guidance, and walking together through one of the most important chapters of your life. Whether you are facing unexplained infertility, male or female factor issues, or seeking second opinions, Arpit IVF provides personalized care plans with high success rates and affordable options. Your journey starts with a conversation, and at Arpit IVF, we are here to listen, support, and deliver hope—one healthy baby at a time.
          </p>
        </div>

        <div className="bg-white py-12 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-10">Steps of IVF Treatment</h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-gray-700">
            <div className="p-6 rounded-xl shadow-md bg-pink-50">
              <h3 className="text-xl font-semibold mb-2">1. Ovarian Stimulation</h3>
              <p>Fertility medications are given to stimulate the ovaries to produce multiple eggs.</p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-pink-50">
              <h3 className="text-xl font-semibold mb-2">2. Egg Retrieval</h3>
              <p>Eggs are collected from the ovaries using a minor surgical procedure under ultrasound guidance.</p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-pink-50">
              <h3 className="text-xl font-semibold mb-2">3. Sperm Collection</h3>
              <p>A semen sample is collected from the male partner to fertilize the eggs.</p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-pink-50">
              <h3 className="text-xl font-semibold mb-2">4. Fertilization</h3>
              <p>Eggs and sperm are combined in the lab to allow fertilization, forming embryos.</p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-pink-50">
              <h3 className="text-xl font-semibold mb-2">5. Embryo Culture</h3>
              <p>Fertilized embryos are monitored and grown in the lab for a few days.</p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-pink-50">
              <h3 className="text-xl font-semibold mb-2">6. Embryo Transfer</h3>
              <p>A healthy embryo is transferred into the uterus, and pregnancy is awaited.</p>
            </div>
          </div>
        </div>


        <div className="bg-rose-800 py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">IVF Treatment Cost Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-gray-800">

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-rose-700">🧬 Basic IVF Package</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Clinician Fees</li>
                <li>Ultrasound Monitoring</li>
                <li>Hormonal Injections</li>
                <li>Egg Retrieval Procedure</li>
                <li>Fertilization & Embryo Transfer</li>
              </ul>
              <p className="mt-4 font-semibold text-rose-700">Starts from – ₹1,50,000 per cycle</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-rose-700">🔬 Add-On Services (If Needed)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>ICSI (Intracytoplasmic Sperm Injection)</li>
                <li>Embryo Freezing</li>
                <li>Donor Eggs or Donor Sperm</li>
                <li>PGT (Genetic Testing)</li>
                <li>Blastocyst Culture</li>
                <li>Laser Hatching</li>
              </ul>
              <p className="mt-4 font-semibold text-rose-700">💰 ₹35,000 – ₹1,00,000+</p>
            </div>
          </div>

          <div className="text-center mt-10 text-white">
            <p className="text-lg">💡 <span className="font-medium">Transparent pricing you can rely on, </span> from consultation to conception.</p>
          </div>
        </div>

        {/* ................................... */}

        <div className="flex flex-wrap mt-28 mb-8">
          <section className="px-6 py-10 bg-rose-50 rounded-lg mx-auto ">
            <h2 className="text-2xl md:text-4xl text-rose-800 font-semibold mb-4">How IVF Benifits Aspiring Couples?</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>IVF work where other fertility treatment fails!</li>
              <li>Advanced techniques increase chances of pregnancy.</li>
              <li>Has a higher success rate when compare to other fertility treatment</li>
            </ul>
          </section>
          <section className="px-6 py-10 bg-rose-50 rounded-lg mx-auto ">
            <h2 className="text-2xl md:text-4xl font-semibold text-rose-800 mb-4">Our Commitment to You</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>We walk with you — every step, every emotion</li>
              <li>No shortcuts. No false hopes. Just honest care</li>
              <li>24x7 patient support that listens and understands</li>
            </ul>
          </section>
          <section className="px-6 py-10 bg-rose-50 rounded-lg mx-auto ">
            <h2 className="text-2xl md:text-4xl font-semibold text-rose-800 mb-4">Why Choose US?</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>India’s Top IVF centre with 65%+ Success Rate centers</li>
              <li>Advanced technology & 38+ Years of Experience</li>
              <li>Personalized fertility plans</li>
            </ul>
          </section>
        </div>

        {/* Appointment .......................................... */}

        <div className="sticky md:hidden bottom-0 w-full bg-rose-800 px-2 py-4 text-white">
          <ul className="flex justify-between">
            <li className=" border-gray-300">
              <a className="mx-3 text-lg flex" href="tel:7705910037" target="_blank">
                <IoCallOutline className="text-xl mr-2" />
                +91 7705910037
              </a>
            </li>
            <span>|</span>
            <li>
              <a className="mx-3 text-lg flex" href="https://wa.me/message/JG2WQ7ZXYWU6B1" target="_blank">
                <FaWhatsapp className="text-xl mr-2" size={25} />
                Call Us
              </a>
            </li>
          </ul>
        </div>
        {/* .............................................. */}

        {/* <footer className="bg-gray-200 text-center text-sm text-gray-700 py-4">
        &copy; {new Date().getFullYear()} Arpit Test Tube Baby Centre, All rights reserved.
        </footer> */}

        <footer className="text-center text-sm text-gray-600 py-4 border-t">
          <p>© 2025 Arpit Test Tube Baby Centre, All rights reserved.</p>
          {/* <div className="mt-2 space-x-4">
          <a href="/privacy-policy" className="text-gray-600 underline hover:text-blue-600 transition">
          Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms-and-conditions" className="text-gray-600 underline hover:text-blue-600 transition">
          Terms & Conditions
          </a>
          </div> */}
        </footer>

      </div>
    </>
  );
};

export default LandingPage;