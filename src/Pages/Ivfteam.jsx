import React from 'react'
import { useState, useEffect } from 'react';
import DrBANSAL from '../assets//DrBANSAL.jpg';
import aboutvandana from '../assets/aboutvandana.jpg';
import DrBansalPic from '../assets/IVFTeamPic/DrBansalPic.jpg';
import DrVandanaPic from '../assets/IVFTeamPic/DrVandanaPic.jpg';
import DrArpitPic from '../assets/IVFTeamPic/DrArpitPic.png';
import DrAnjulaPic from '../assets/IVFTeamPic/DrAnjulaPic.png';
import DrHarshitPic from '../assets/IVFTeamPic/DrHarshitPic.jpg';
import DrSakshiPic from '../assets/IVFTeamPic/DrSakshiPic.jpg';
// import DrMoolNarayanPic from '../assets/IVFTeamPic/DrMoolNarayanPic.jpg';
import BosePic from '../assets/IVFTeamPic/BosePic.png';
import DrShipraPic from '../assets/IVFTeamPic/DrShipraPic.jpg';
import MrsMamtaPic from '../assets/IVFTeamPic/MrsMamtaPic.jpg';
// import Anjula from '../assets/Anjula.jpg';
// import SaugatBose from '../assets//SaugatBose.png';
import gallery01 from '../assets/Gallery/gallery01.jpg';
// import gallery02 from '../assets/Gallery/gallery02.jpg';
// import gallery04 from '../assets/Gallery/gallery04.jpg';
// import embryo from "../assets/icons/Treatment/embryo.png";
// import lasehatching from "../assets/icons/Treatment/lasehatching.png";
// import DoctorsBG1 from "../assets/DoctorsBG1.jpg";
import qqq1 from '../assets/Banners/qqq1.jpg';
import BgBanner1 from '../assets/BgBanner1.jpg';
import { Helmet } from "react-helmet";



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




const pics = [
    {
        photo: DrBANSAL,
        name: 'Late Dr. AK Bansal',
        qualification: 'M.B.B.S., MS, FAIS, FCGP, FIAGES',
        desg: 'Founder',

    },
    {
        photo: aboutvandana,
        name: 'Dr Vandan Bansal',
        qualification: 'MS, D.Phil (Gold Medalist), DGO, FCGP',
        desg: 'Director',

    },
    {
        photo: DrArpitPic,
        name: 'Dr Arpit Bansal',
        qualification: 'MBBS, MS, FMAS, FCS',
        desg: 'Director',

    },
    {
        photo: DrAnjulaPic,
        name: 'Dr Anjula Sahay',
        qualification: 'MBBS, DGO, FCPS',
        desg: 'IVF Counselor',

    },
    {
        photo: gallery01,
        name: 'Mrs. Mamta Tiwari',
        qualification: 'M.Sc. (Medical Micro Biology)',
        desg: 'IVF Counselor',

    },
    {
        photo: BosePic,
        name: 'Mr Saugat Bose',
        qualification: 'M.Sc. (Biochemistry)',
        desg: 'Embryologist',

    },
    {
        photo: gallery01,
        name: 'Dr Harshit Bansal',
        qualification: 'Photo booth  jianbing microdosing tousled waistcoat',
        desg: 'slk',

    },
    {
        photo: gallery01,
        name: 'Dr Sakshi Bansal',
        qualification: 'slkg',
        desg: 'slk',

    },
    {
        photo: gallery01,
        name: 'Dr Zainab',
        qualification: 'slkg',
        desg: 'slk',

    }
]

const IVFteam = () => {
    return (
        <>
            <Helmet>
                <title>IVF Team: Arpit Test Tube Baby Centre Prayagraj</title>
                <meta name="description" content="Meet the expert IVF team at Arpit Test Tube Baby Centre, Prayagraj – experienced fertility specialists, embryologists, and support staff dedicated to your success." />
                <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
                <meta property="og:title" content=" Best Gynecology Services" />
                <meta property="og:title" content="Best IVF and Gynecology Services" />
                <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
            </Helmet>
            <section class="text-gray-600 body-font">
                <CardDemo />
                {/* <CardSlider/> */}
            </section>
        </>
    )
}

export default IVFteam;

// App.js
// import React, { useState } from 'react';

const CardDemo = () => {
    // Example card data
    const cardData = [
        { id: 6, photo: DrBansalPic, title: 'Late Dr. Ashwini Kumar Bansal', description: 'M.B.B.S., MS, FAIS, FCGP, FIAGES', Knowmore: 'Founder' },
        { id: 1, photo: DrVandanaPic, title: 'Dr. Vandana Bansal', description: 'MS, D.Phil (Gold Medalist), DGO, FCGP', Knowmore: 'Director' },
        { id: 3, photo: DrArpitPic, title: 'Dr. Arpit Bansal', description: 'MBBS, MS, FMAS, FCS', Knowmore: 'Director' },
        { id: 2, photo: MrsMamtaPic, title: 'Mrs. Mamta Tiwari', description: 'M.Sc. (Medical Micro Biology)', Knowmore: 'IVF Counselor' },
        { id: 4, photo: DrAnjulaPic, title: 'Dr. Anjula Sahay', description: 'MBBS, DGO, FCPS', Knowmore: 'IVF Counselor' },
        { id: 5, photo: BosePic, title: 'Mr. Saugat Bose', description: 'M.Sc. (Biochemistry)', Knowmore: 'Embryologist' },
        { id: 6, photo: DrHarshitPic, title: 'Dr Harshit Bansal', description: 'MBBS NAMC | MD Radio Diagnosis (UCMS)', Knowmore: 'Know more...' },
        { id: 6, photo: DrSakshiPic, title: 'Dr Sakshi Bansal', description: 'MBBS MD (Paediatrics)', Knowmore: 'Know more...' },
        { id: 6, photo: DrShipraPic, title: 'Dr Shipra', description: '.........', Knowmore: 'Know more...' },
        // { id: 6, photo: DrArpitPic, title: 'Dr Zainab', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        // { id: 6, photo: DrArpitPic, title: 'Ms. Jyoti', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
    ];

    // State to control the current index of the cards
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 3 : prevIndex - 1));
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 3 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            slideRight(); // Automatically slide to the right
        }, 5000); // 3000ms = 3 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <>
            <img
                src={qqq1}
                alt='ghfhfg'
                className="w-full h-auto object-cover rounded-lg sm:-mb-72"
            />
            <div className="container mx-auto -mt-20 py-8">
                <div className="flex overflow-hidden">
                    {/* Cards */}
                    <div
                        className="flex transition-transform duration-500 mb-20"

                        style={{
                            transform: `translateX(-${currentIndex * 100 / Math.min(cardData.length, 3)}%)`, // Adjust based on card count or max 3 cards
                            width: `${Math.min(cardData.length, 3) * 100}%`, // Ensure max 3 cards displayed on large screens
                        }}
                    >
                        {cardData.map((card) => (
                            <div className="relative w-80 bg-rose-50 mx-2 shadow-md rounded-2xl p-6 flex justify-center items-center z-50 min-h-fit mt-28">
                                {/* Circle Image */}
                                <div className="absolute -top-28 left-1/2 transform -translate-x-1/2">
                                    <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden shadow-md">
                                        <img
                                            src={card.photo}
                                            alt="Profile"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                                <div className="mt-20 text-center">
                                    <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                                    <p className="text-gray-600 mt-2">
                                        {card.description}<br />
                                        {card.Knowmore}
                                    </p>
                                    <button className="mt-4 px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600 transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Left and Right Buttons */}
                    <button
                        onClick={slideLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full sm:hidden"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={slideRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full sm:hidden"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </>
    );
}
// export default CardDemo;





const cards = [
  {
    title: 'Card 1',
    image: DrArpitPic ,
    description: 'यह पहला कार्ड है।',
  },
  {
    title: 'Card 2',
    image: DrVandanaPic,
    description: 'यह दूसरा कार्ड है।',
  },
  {
    title: 'Card 3',
    image: DrAnjulaPic,
    description: 'यह तीसरा कार्ड है।',
  },
  // और कार्ड्स जोड़ें
];

const CardSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// export default CardSlider;
