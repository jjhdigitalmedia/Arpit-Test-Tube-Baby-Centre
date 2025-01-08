import React from 'react'
import { useState, useEffect } from 'react';
import DrBANSAL from '../assets//DrBANSAL.jpg';
import aboutvandana from '../assets/aboutvandana.jpg';
import ArpitPic from '../assets/ArpitPic.png';
import Anjula from '../assets/Anjula.jpg';
import SaugatBose from '../assets//SaugatBose.png';
import gallery01 from '../assets/Gallery/gallery01.jpg';
import gallery02 from '../assets/Gallery/gallery02.jpg';
import gallery04 from '../assets/Gallery/gallery04.jpg';
import embryo from "../assets/icons/Treatment/embryo.png";
import lasehatching from "../assets/icons/Treatment/lasehatching.png";
import DoctorsBG1 from "../assets/DoctorsBG1.jpg";

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
        photo: ArpitPic,
        name: 'Dr Arpit Bansal',
        qualification: 'MBBS, MS, FMAS, FCS',
        desg: 'Director',

    },
    {
        photo: Anjula,
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
        photo: SaugatBose,
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
        <section class="text-gray-600 body-font">
            {/* <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4 ">
                    {
                        pics.map((ind) => (
                            <div class="p-2 md:w-1/3">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={ind.photo} alt="blog" />
                                    <div class="p-2">
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{ind.name}</h1>
                                        <p class="leading-relaxed mb-3">{ind.qualification}</p>
                                        <p class="leading-relaxed mb-3">{ind.desg}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="flex justify-center space-x-4 p-8">
                        {pics.map((card, index) => (
                            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl">
                                <img src={card.photo} alt={card.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h3>
                                    <p className="text-gray-600 mb-4">{card.desg}</p>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            */}
            <CardDemo />
        </section>
    )
}

export default IVFteam;

// App.js
// import React, { useState } from 'react';

const CardDemo = () => {
    // Example card data
    const cardData = [
        { id: 6, photo: DrBANSAL, title: 'Late Dr. Ashwini Kumar Bansal', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 1, photo: aboutvandana, title: 'Dr. Vandana Bansal', description: 'This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 3, photo: ArpitPic, title: 'Dr. Arpit Bansal', description: 'This is card 3This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 2, photo: aboutvandana, title: 'Mrs. Mamta Tiwari', description: 'This is card 2This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 4, photo: Anjula, title: 'Dr. Anjula Sahay', description: 'This is card 4This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 5, photo: SaugatBose, title: 'Mr. Saugat Bose', description: 'This is card 5This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 6, photo: aboutvandana, title: 'Dr Harshit Bansal', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 6, photo: aboutvandana, title: 'Dr Sakshi Bansal', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 6, photo: aboutvandana, title: 'Dr Zainab', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
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
        }, 3000); // 3000ms = 3 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    //     return (
    //         <div className="container mx-auto py-8">
    //             <div className="relative">
    //                 <div className="flex overflow-hidden">

    //                     <div
    //                         className="flex transition-transform duration-500"
    //                         style={{
    //                             transform: `translateX(-${currentIndex * 100 / 3}%)`,
    //                             width: `${cardData.length * 33.33}%`, 
    //                         }}
    //                     >
    //                         {cardData.map((card) => (
    //                             <div
    //                                 key={card.id}
    //                                 className="flex-none w-ful sm:w-1/3 p-4 bg-white rounded-lg shadow-md mx-2"
    //                             >
    //                                 <div className="relative bg-slate-300">

    //                                     <img
    //                                         src={SaugatBose}
    //                                         alt={card.title}
    //                                         className="max-w-full h-auto object-cover rounded-lg mb-4"
    //                                     />

    //                                     <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-20 h-20 bg-rose-200 border-8 border-white rounded-full flex items-center justify-center">

    //                                         <img
    //                                         src={lasehatching}
    //                                         alt={card.title}
    //                                         className="w-12 h-12"
    //                                     />
    //                                     </div>
    //                                 </div>
    //                                 <div className="text-center px-20">
    //                                     <h2 className="text-xl font-semibold">{card.title}</h2>
    //                                     <p className="text-gray-600">{card.description}</p>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                     <button
    //                         onClick={slideLeft}
    //                         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
    //                     >
    //                         &lt;
    //                     </button>
    //                     <button
    //                         onClick={slideRight}
    //                         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
    //                     >
    //                         &gt;
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    return (
        <>
            <img
                src={DoctorsBG1}
                alt='ghfhfg'
                className="w-full h-auto object-cover rounded-lg sm:-mb-72"
            />
            <div className="container mx-auto w-11/12 py-8">
                <div className="relative">
                    <div className="flex overflow-hidden">
                        {/* Cards */}
                        <div
                            className="flex transition-transform duration-500 mb-10"
                            // style={{
                            //     transform: `translateX(-${currentIndex * 100 / 3}%)`,
                            //     width: `${cardData.length * 33.33}%`, 
                            // }}
                            style={{
                                transform: `translateX(-${currentIndex * 100 / Math.min(cardData.length, 3)}%)`, // Adjust based on card count or max 3 cards
                                width: `${Math.min(cardData.length, 3) * 100}%`, // Ensure max 3 cards displayed on large screens
                            }}
                        >
                            {cardData.map((card) => (
                                <div
                                    key={card.id}
                                    className="flex-none w-[32.3%] p-4 bg-white rounded-lg shadow-md mx-2"
                                >
                                    <div className="relative bg-slate-300">
                                        {/* Main Image */}
                                        <img
                                            src={card.photo}
                                            alt={card.title}
                                            className="max-w-full h-auto object-cover rounded-lg mb-4"
                                        />
                                        {/* Circle at the bottom of the image */}
                                        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-20 h-20 bg-rose-200 border-[10px] border-white rounded-full flex items-center justify-center">
                                            {/* Icon inside the circle */}
                                            <img
                                                src={lasehatching}
                                                alt={card.title}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center my-10 px-4 sm:px-20">
                                        <h2 className="text-xl font-semibold">{card.title}</h2>
                                        <p className="text-gray-600">{card.description}</p>
                                        <p className="text-blue-400">{card.Knowmore}</p>
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
            </div>
        </>
    );
}
// export default CardDemo;
