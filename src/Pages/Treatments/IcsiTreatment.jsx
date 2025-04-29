import React from "react";
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'
const IcsiTreatment = () => {
  return (
    <>
        <Helmet>
          <title>ICSI (Micromanipulation with spindle view): Arpit Test Tube Baby Centre Prayagraj</title>
          <meta name="description" content="ICSI (Intracytoplasmic Sperm Injection with Spindle View) – ICSI is an advanced micromanipulation technique used in IVF, where a single, healthy sperm is directly injected into an egg to facilitate fertilization. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal specializes in ICSI with Spindle View, improving egg selection and increasing successful embryo formation. This technique is highly effective for couples dealing with severe male infertility, low sperm count, or previous failed IVF cycles. Experience world-class fertility treatment with expert care and high success rates." />
          <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
          <meta property="og:title" content="Best Gynecology Services" />
          <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
        <div className='flex mx-auto flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>ICSI (Micromanipulation with spindle view)</h1>
          <p>ICSI is an advanced assisted reproductive technology (ART) used in conjunction with IVF. It involves injecting a single sperm directly into an egg to facilitate fertilization. Using spindle view technology enhances the accuracy of the procedure by visualizing the egg's spindle apparatus.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Couples with severe male factor infertility</li>
            <li>Men with low sperm count, poor motility, or abnormal morphology</li>
            <li>Couples with previous failed fertilization attempts in IVF</li>
            <li>Individuals with unexplained infertility</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Ovarian Stimulation: The female partner undergoes controlled ovarian stimulation to produce multiple eggs.</li>
            <li>Egg Retrieval: Mature eggs are retrieved through a minor surgical procedure.</li>
            <li>Sperm Collection: A semen sample is obtained from the male partner or through procedures like TESA or MESA if needed.</li>
            <li>Spindle View Technology: This technology provides a clear view of the egg’s spindle, ensuring proper alignment during sperm injection.</li>
            <li>ICSI Process: A single sperm is injected directly into the egg using a fine needle.</li>
            <li>Embryo Culturing: Fertilized embryos are cultured for a few days before transfer to the uterus.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Enhances fertilization chances in cases of male infertility</li>
            <li>Enables fertilization with a limited number of viable sperm</li>
            <li>Reducing the risk of abnormal fertilization</li>
            <li>Spindle view technology increases precision and success rates</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Requires specialized equipment and expertise</li>
            <li>Slightly higher cost compared to conventional IVF</li>
            <li>Risk of egg damage during the injection process</li>
            <li>Not guaranteed to result in successful fertilization or pregnancy</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>The success rate of ICSI with spindle view ranges between 60-80% per cycle, depending on factors like maternal age, sperm quality, and embryo health.</p>
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

export default IcsiTreatment;
