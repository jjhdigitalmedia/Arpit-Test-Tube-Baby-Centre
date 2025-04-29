import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const EmbryoBanking = () => {
  return (
    <>
      <Helmet>
        <title>Embryo Banking (Cryopreservation): Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="Embryo Banking (Cryopreservation) – Embryo banking involves freezing embryos for future use, ensuring patients have multiple chances for pregnancy. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal uses cutting-edge cryopreservation techniques to store embryos safely for years. This method is beneficial for couples undergoing IVF, allowing them to plan their pregnancy at a suitable time." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div className='flex mx-auto flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>Embryo Banking (Cryopreservation)</h1>
          <p>Embryo cryopreservation involves freezing and storing embryos for future use, often as part of IVF cycles.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Couples undergoing IVF</li>
            <li>Cancer patients preserving fertility before treatment</li>
            <li>Individuals planning for delayed parenthood</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Embryo Creation: Eggs are fertilized with sperm in a laboratory.</li>
            <li>Culture: The embryos are grown to the blastocyst stage.</li>
            <li>Freezing: Viable embryos are cryopreserved using vitrification.</li>
            <li>Storage: Embryos are stored in a cryobank for later use.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Long-term fertility preservation.</li>
            <li>Multiple attempts at pregnancy.</li>
            <li>High embryo survival rates.</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Costly storage fees.</li>
            <li>Emotional considerations.</li>
            <li>No guaranteed success</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>The survival rate of embryos after thawing is around 90-95%. The success rate of pregnancy using frozen embryos is approximately 50-60% per transfer.</p>
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
  )
}

export default EmbryoBanking