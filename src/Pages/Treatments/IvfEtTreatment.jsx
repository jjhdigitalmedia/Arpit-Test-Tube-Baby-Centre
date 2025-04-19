import React from "react";
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const IvfEtTreatment = () => {
  return (
    <>
        <Helmet>
          <title>IVF (Embryo Transfer): Arpit Test Tube Baby Centre Prayagraj</title>
          <meta name="description" content="IVF ET (In-Vitro Fertilization & Embryo Transfer) – IVF (In-Vitro Fertilization) with Embryo Transfer is one of the most effective fertility treatments for couples facing complex infertility challenges. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal uses state-of-the-art technology for ovarian stimulation, egg retrieval, fertilization, and embryo transfer to maximize success rates. Whether due to blocked fallopian tubes, severe male infertility, or unexplained infertility, IVF can help you conceive. Our high-quality embryology lab ensures the best care for your future baby." />
          <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
          <meta property="og:title" content="Best Gynecology Services" />
          <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
        <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>IVF-ET (Embryo Transfer)</h1>
          <p>IVF involves fertilizing eggs with sperm outside the body in a lab. The resulting embryos are transferred to the uterus for implantation.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>•Blocked fallopian tubes</li>
            <li>Severe male infertility</li>
            <li>Unexplained infertilityEndometriosis</li>
            <li>	Genetic disorders</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Ovarian Stimulation: Fertility drugs stimulate multiple egg production.</li>
            <li>Egg Retrieval: Eggs are collected from the ovaries.</li>
            <li>Fertilization: Eggs are fertilized with sperm in the lab.</li>
            <li>Embryo Culture: Embryos are monitored for development.</li>
            <li>Embryo Transfer: Healthy embryos are transferred to the uterus.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>The success rate of IVF is around 40-50% per cycle for women under 35 and declines with age.</p>
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

export default IvfEtTreatment;
