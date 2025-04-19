import React from "react";
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const ImsiTreatment = () => {
  return (
    <>
        <Helmet>
          <title>IMSI (Intracytoplasmic morphologically selected sperm injection): Arpit Test Tube Baby Centre Prayagraj</title>
          <meta name="description" content="IMSI (Intracytoplasmic Morphologically Selected Sperm Injection) – IMSI is an advanced sperm selection technique that uses high-magnification imaging to pick the healthiest sperm for fertilization, increasing IVF success rates. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal ensures that only the best-quality sperm are chosen, improving embryo development and pregnancy outcomes. This method is ideal for men with severe sperm abnormalities, poor motility, or previous IVF failures. Trust our expertise for your fertility journey." />
          <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
          <meta property="og:title" content="Best Gynecology Services" />
          <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
        <div className='flex mx-auto shadow-xl flex-wrap p-4 md:p-10 md:pl-28 my-20 md:justify-between md:w-11/12 items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>IMSI (Intracytoplasmic morphologically selected sperm injection)</h1>
          <p>IMSI uses high-magnification microscopy to select the best-quality sperm based on morphology for injection into the egg.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Severe male infertility</li>
            <li>Poor sperm morphology</li>
            <li>Recurrent IVF failure</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Sperm Selection: High magnification selects the healthiest sperm.</li>
            <li>Injection: The best sperm is injected directly into the egg.</li>
            <li>Embryo Transfer: After fertilization, embryos are transferred to the uterus.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Improved embryo quality.</li>
            <li>Higher fertilization success.</li>
            <li>Beneficial in severe male infertility.</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Expensive</li>
            <li>Requires specialized equipment and expertise.</li>
            <li>No guarantee of successful fertilization.</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>IMSI has shown to increase pregnancy rates by 20-30% in cases of male infertility.</p>
        </div>
        <div>
          <img
            src={lab0}
            alt="Mountain"
            className="w-full  object-cover border-8 border-white rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default ImsiTreatment;
