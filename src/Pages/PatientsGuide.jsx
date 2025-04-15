import React from 'react'
import { Helmet } from "react-helmet";

const PatientsGuide = () => {
  return (
    <>
    <Helmet>
        <title>Patients Guide: Dr Vandana Bansal Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="A complete IVF patient guide from Arpit Test Tube Baby Centre – step-by-step fertility journey, treatment options, FAQs, and support for hopeful parents." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
    <div className='w-11/12 md:w-4/5 m-auto pt-10 pb-24'>
     <h1 className='font-bold text-3xl my-3'> PatientsGuide</h1>
     <div className="my-8">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-600351c2-8ab0-4b23-8acf-fd491a40022f" data-elfsight-app-lazy></div>
      </div>

    </div>
    </>
  )
}

export default PatientsGuide;