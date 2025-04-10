import React from 'react'
import IVFvideo from '../../assets/videos/IVFvideo.mp4';
import Gallery from '../Gallery';
import qqq1 from '../../assets/Banners/qqq1.jpg';
import { Helmet } from "react-helmet";
const IVFLab = () => {
  return (
    <>
    <Helmet>
      <title>Treatments: Arpit Test Tube Baby Centre Prayagraj</title>
      <meta name="description" content="Get expert gynecology consultations and women's health care services." />
      <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
      <meta property="og:title" content="Best Gynecology Services" />
      <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
      <div className="-mb-16 md:-mb-80 bg-red-50">
        <img src={qqq1} alt="" />
      </div>
      <div className="w-full md:px-52 py-10 bg-red-50 my-5">
        <video className="h-11/12 m-auto w-screen border-rose-50 " controls>
          <source
            src={IVFvideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Gallery />
      </div>
    </>
  )
}

export default IVFLab