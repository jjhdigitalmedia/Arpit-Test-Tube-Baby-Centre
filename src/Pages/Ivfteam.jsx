import React from 'react'
import { useState, useEffect } from 'react';
import DrBANSAL from '../assets//DrBANSAL.jpg';
import DrVandana from '../assets/DrVandana.jpg';
import DrBansalPic from '../assets/IVFTeamPic/DrBansalPic.jpg';
import DrVandanaPic from '../assets/IVFTeamPic/DrVandanaPic.jpg';
import DrArpitPic from '../assets/IVFTeamPic/DrArpitPic.png';
import DrAnjulaPic from '../assets/IVFTeamPic/DrAnjulaPic.png';
import DrHarshitPic from '../assets/IVFTeamPic/DrHarshitPic.jpg';
import DrSakshiPic from '../assets/IVFTeamPic/DrSakshiPic.jpg';
import BosePic from '../assets/IVFTeamPic/BosePic.png';
import DrShipraPic from '../assets/IVFTeamPic/DrShipraPic.jpg';
import MrsMamtaPic from '../assets/IVFTeamPic/MrsMamtaPic.jpg';
import gallery01 from '../assets/Gallery/gallery01.jpg';
import qqq1 from '../assets/Banners/qqq1.jpg';
import { Helmet } from "react-helmet";
import Gallery from './Gallery.jsx'
import { motion, AnimatePresence } from 'framer-motion';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';




// const pics = [
//     {
//         photo: DrBANSAL,
//         name: 'Late Dr. AK Bansal',
//         qualification: 'M.B.B.S., MS, FAIS, FCGP, FIAGES',
//         desg: 'Founder',

//     },
//     {
//         photo: DrVandana,
//         name: 'Dr Vandan Bansal',
//         qualification: 'MS, D.Phil (Gold Medalist), DGO, FCGP',
//         desg: 'Director',

//     },
//     {
//         photo: DrArpitPic,
//         name: 'Dr Arpit Bansal',
//         qualification: 'MBBS, MS, FMAS, FCS',
//         desg: 'Director',

//     },
//     {
//         photo: DrAnjulaPic,
//         name: 'Dr Anjula Sahay',
//         qualification: 'MBBS, DGO, FCPS',
//         desg: 'IVF Counselor',

//     },
//     {
//         photo: gallery01,
//         name: 'Mrs. Mamta Tiwari',
//         qualification: 'M.Sc. (Medical Micro Biology)',
//         desg: 'IVF Counselor',

//     },
//     {
//         photo: BosePic,
//         name: 'Mr Saugat Bose',
//         qualification: 'M.Sc. (Biochemistry)',
//         desg: 'Embryologist',

//     },
//     {
//         photo: gallery01,
//         name: 'Dr Harshit Bansal',
//         qualification: 'Photo booth  jianbing microdosing tousled waistcoat',
//         desg: 'slk',

//     },
//     {
//         photo: gallery01,
//         name: 'Dr Sakshi Bansal',
//         qualification: 'slkg',
//         desg: 'slk',

//     },
//     {
//         photo: gallery01,
//         name: 'Dr Zainab',
//         qualification: 'slkg',
//         desg: 'slk',

//     }
// ]

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
            <div className='my-10 mx-auto w-4/5'>
              <h1 className="font-bold text-2xl md:text-3xl mt-10 mb-1 font-asap relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Arpi Test Tube Baby Centre</h1>
                <p className="text-justify">Jeevan Jyoti Hospital is a 210-Beds, CGHS Approved, NABH Accredited, ISO 2015 and NABL Medical Lab approved multi-speciality hospital in Prayagraj. Jeevan Jyoti Hospital is Best Hospital in Prayagraj For Any Types of Health Treatment. Here You Get The Best Physician in Allahabad.
              The hospital was founded in 1988 by renowned laparoscopic surgeon Late Dr A.K Bansal and eminent IVF expert Dr Vandana Bansal, with the vision and mission of providing top-of-the-line healthcare facilities under one roof.
            </p>
            </div>
            <section class="text-gray-600 body-font">
                {/* <CardDemo /> */}
                <CardSlider />
                <Gallery />
            </section>
        </>
    )
}

export default IVFteam;

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
                            <div className="relative w-80 bg-rose-50 mx-2 shadow-md rounded-2xl p-6 flex justify-center items-center z-0 min-h-fit mt-28">
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

 const cards = [
        { id: 6, photo: DrBansalPic, title: 'Late Dr. Ashwini Kumar Bansal', description: 'M.B.B.S., MS, FAIS, FCGP, FIAGES', Knowmore: 'Founder' },
        { id: 1, photo: DrVandanaPic, title: 'Dr. Vandana Bansal', description: 'MS, D.Phil (Gold Medalist), DGO, FCGP', Knowmore: 'Director' },
        { id: 3, photo: DrArpitPic, title: 'Dr. Arpit Bansal', description: 'MBBS, MS, FMAS, FCS', Knowmore: 'Director' },
        { id: 2, photo: MrsMamtaPic, title: 'Mrs. Mamta Tiwari', description: 'M.Sc. (Medical Micro Biology)', Knowmore: 'IVF Counselor' },
        { id: 4, photo: DrAnjulaPic, title: 'Dr. Anjula Sahay', description: 'MBBS, DGO, FCPS', Knowmore: 'IVF Counselor' },
        { id: 5, photo: BosePic, title: 'Mr. Saugat Bose', description: 'M.Sc. (Biochemistry)', Knowmore: 'Embryologist' },
        { id: 6, photo: DrHarshitPic, title: 'Dr Harshit Bansal', description: 'MBBS NAMC | MD Radio Diagnosis (UCMS)', Knowmore: 'Know more...' },
        { id: 6, photo: DrSakshiPic, title: 'Dr Sakshi Bansal', description: 'MBBS MD (Paediatrics)', Knowmore: 'Know more...' },
        { id: 6, photo: DrShipraPic, title: 'Dr Shipra', description: '.........', Knowmore: 'Know more...' },
    ];

const CardSlider = () => {
    const [index, setIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(4);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const updateCardsPerPage = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setCardsPerPage(1); // small screens
            } else if (width < 1150) {
                setCardsPerPage(2); // medium screens
            } else {
                setCardsPerPage(4); // large screens
            }
            setIndex(0); // Reset index on resize
        };

        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);
        return () => window.removeEventListener('resize', updateCardsPerPage);
    }, []);

    const next = () => {
        if (index + cardsPerPage < cards.length) {
            setDirection(1);
            setIndex(index + cardsPerPage);
        }
    };

    const prev = () => {
        if (index - cardsPerPage >= 0) {
            setDirection(-1);
            setIndex(index - cardsPerPage);
        }
    };

    const visibleCards = cards.slice(index, index + cardsPerPage);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-rose-800 px-4">
            <h1 className="text-5xl font-bold mb-12 font-asap text-white">Our Dedicated Team</h1>

            <div className="relative w-full max-w-8xl overflow-hidden flex justify-center">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={index}
                        className="flex space-x-4 mt-4"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(event, info) => {
                            const swipeThreshold = 100;
                            if (info.offset.x < -swipeThreshold && index + cardsPerPage < cards.length) {
                                setDirection(1);
                                setIndex(index + cardsPerPage);
                            } else if (info.offset.x > swipeThreshold && index - cardsPerPage >= 0) {
                                setDirection(-1);
                                setIndex(index - cardsPerPage);
                            }
                        }}
                        initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {visibleCards.map((card) => (
                            <div
                                key={card.id}
                                className="bg-white w-96 sm:w-[300px] z-0 border-2 border-rose-700 p-6 border-blak my-20 rounded-lg shadow-md flex-shrink-0"
                            >
                                <div className="-mt-28 text-center">
                                     <div className="w-44 h-44 rounded-full p-2 shadow-md mx-auto border-2 overflow-hidden">
                                        <img
                                            src={card.photo}
                                            alt="Profile"
                                            className="object-cover rounded-full w-full h-full border-rose-700"
                                        />
                                    </div>
                                    <h3 className="text-lg mt-10 font-bold text-gray-800">{card.title}</h3>
                                    <p className=" mt-2">
                                        {card.description}<br />
                                        {card.Knowmore}
                                    </p>
                                    <button className="mt-4 px-4 py-2 bg-rose-00 font-semibold text-rose-800 rounded-lg hover:bg--600 transition">
                                        Know More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-6 flex gap-4">
                <button
                    onClick={prev}
                    className="bg-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    disabled={index === 0}
                >
                    Prev
                </button>
                <button
                    onClick={next}
                    className="bg-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    disabled={index + cardsPerPage >= cards.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
