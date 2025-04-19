import React from "react";
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'


const LaserAssistedTreatment = () => {
  return (
    <>
        <Helmet>
          <title>laser Assisted Hatching: Arpit Test Tube Baby Centre Prayagraj</title>
          <meta name="description" content="Laser-Assisted Hatching – Laser-Assisted Hatching (LAH) is a breakthrough technique that enhances embryo implantation rates by creating a small opening in the embryo’s outer shell (zona pellucida). At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal uses precise laser technology to improve embryo attachment to the uterus, especially for women with repeated IVF failures or thick zona pellucida. This method significantly increases the chances of a successful pregnancy, ensuring a smoother fertility journey for hopeful parents." />
          <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
          <meta property="og:title" content="Best Gynecology Services" />
          <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
        <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>Laser Assisted Hatching</h1>
          <p>Laser-assisted hatching uses a laser to create a small opening in the outer shell (zona pellucida) of an embryo, aiding implantation.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Women over 35 years</li>
            <li>Previous IVF failure</li>
            <li>Thick zona pellucida</li> 
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Embryo Culture: The embryo is cultured for 3-5 days.</li>
            <li>Laser Application: A laser creates a small opening in the shell.</li>
            <li>Embryo Transfer: The embryo is transferred to the uterus.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Enhances implantation chances.</li>
            <li>Beneficial for patients with previous IVF failures.</li>
            <li>Safe and precise.</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Slight risk of embryo damage.</li>
            <li>May not be beneficial for all patients.</li>
            <li>Additional cost.</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>Laser-assisted hatching can improve implantation rates by 10-20% in specific cases.</p>
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

export default LaserAssistedTreatment;
