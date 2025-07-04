import React from 'react'
import gallery01 from '../assets/Gallery/gallery01.jpg';
import gallery02 from '../assets/Gallery/gallery02.jpg';
import gallery03 from '../assets/Gallery/gallery03.jpg';
import gallery04 from '../assets/Gallery/gallery04.jpg';
import gallery05 from '../assets/Gallery/gallery05.jpg';
import gallery06 from '../assets/Gallery/gallery06.jpg';
// import gallery07 from '../assets/Gallery/gallery07.jpg';
import A013 from '../assets/Gallery/A013.jpg';
import B02 from '../assets/Gallery/B02.jpg';
import gallery09 from '../assets/Gallery/gallery09.png';
import gallery10 from '../assets/Gallery/gallery10.png';
import gallery11 from '../assets/Gallery/gallery11.png';
import { Helmet } from "react-helmet";

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Gallery: Arpit Test Tube Baby Centre Prayagraj</title>
                <meta name="description" content="Explore the Arpit IVF Centre gallery – see our world-class infrastructure, lab facilities, and patient-friendly environment in Prayagraj." />
                <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
                <meta property="og:title" content="Best IVF and Gynecology Services" />
                <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
            </Helmet>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-5xl text-2xl title-font font-bold lg:w-1/3 lg:mb-0 mb-4 font-asap text-rose-700">Our Media Gallery</h1>
                        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Welcome to our hospital and labs, where advanced technology meets compassionate care. Our modern facilities are designed for patient comfort and efficiency, ensuring the highest standards of healthcare. Explore our website to learn more about our dedicated team and services!</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery09} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery02} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={gallery03} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={A013} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery05} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery04} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery01} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={B02} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery10} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery11} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery06} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery