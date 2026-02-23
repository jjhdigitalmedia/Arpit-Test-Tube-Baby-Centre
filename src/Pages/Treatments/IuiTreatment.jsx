import React from "react";
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const IuiTreatment = () => {
  return (
    <>
      <Helmet>
        <title>IUI (Intra uterine Insemination): Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="IUI (Intrauterine Insemination) – Intrauterine Insemination (IUI) is a simple and effective fertility treatment where processed sperm is placed directly into the uterus to enhance fertilization chances. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal offers personalized IUI treatments using advanced techniques to increase pregnancy success rates. Ideal for couples with unexplained infertility, mild male infertility, or cervical issues, IUI is a cost-effective and minimally invasive procedure. Book a consultation today to explore your parenthood journey with expert care." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div className='flex mx-auto flex-wrap pl-10 my-5 justify-between md:w- items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>IUI (Intra uterine Insemination)</h1>
          <p>Intrauterine Insemination (IUI) is a minimally invasive fertility treatment that involves placing processed sperm directly into the uterus during ovulation. This increases the chances of fertilization by bringing the sperm closer to the egg.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Unexplained infertility</li>
            <li>Mild male factor infertility</li>
            <li>Cervical mucus problems</li>
            <li>Ovulatory disorders</li>
            <li>Donor sperm use</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Ovulation Monitoring: Hormonal blood tests and ultrasound scans monitor ovulation.</li>
            <li>Ovulation Induction: Fertility medications may stimulate ovulation.</li>
            <li>Sperm Preparation: Sperm is washed to isolate the healthiest.</li>
            <li>Insemination: The sperm is inserted into the uterus using a thin catheter.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Increases chances of pregnancy by placing sperm closer to the egg</li>
            <li>Simple, non-surgical procedure done in OPD</li>
            <li>More affordable than IVF</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Lower success rate compared to IVF</li>
            <li>Not effective in severe infertility or blocked tubes</li>
            <li>May require multiple attempts for success</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>The success rate of IUI ranges from 10-20% per cycle, depending on factors such as age, fertility diagnosis, and the use of fertility medications.</p>
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

export default IuiTreatment;
