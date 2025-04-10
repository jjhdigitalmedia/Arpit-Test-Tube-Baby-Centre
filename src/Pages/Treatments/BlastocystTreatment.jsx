import React from "react";
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const BlastocystTreatment = () => {
  return (
    <>
    <Helmet>
      <title>Blastocyst Transfer: Arpit Test Tube Baby Centre Prayagraj</title>
      <meta name="description" content="Blastocyst Transfer – Blastocyst transfer involves culturing embryos for five days before implantation, ensuring only the most viable embryos are selected for IVF. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal specializes in this advanced technique, which increases implantation rates and reduces multiple pregnancies. This method is ideal for couples seeking higher IVF success rates with minimal embryo wastage." />
      <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
      <meta property="og:title" content="Best Gynecology Services" />
      <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
    <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between w-11/12 items-cente'>
        <div className='w-1/2'>
          <h1 className='text-4xl my-4 font-medium'>Blastocyst Transfer</h1>
          <p>Blastocyst transfer involves transferring embryos that have reached the blastocyst stage (5-6 days old).</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Previous IVF failures</li>
            <li>Higher implantation chances</li>
            <li>Preimplantation genetic testing (PGT)</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Embryo Development: Embryos are cultured to the blastocyst stage.</li>
            <li>Selection: High-quality embryos are selected.</li>
            <li>Embryo Transfer: The blastocyst is transferred to the uterus.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Higher implantation potential.</li>
            <li>Enables genetic testing (PGT).</li>
            <li>Improved embryo selection.</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Not all embryos reach the blastocyst stage.</li>
            <li>Risk of multiple pregnancies.</li>
            <li>Additional lab costs.</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>Blastocyst transfer has a success rate of around 50-60% per cycle.</p>
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

export default BlastocystTreatment;
