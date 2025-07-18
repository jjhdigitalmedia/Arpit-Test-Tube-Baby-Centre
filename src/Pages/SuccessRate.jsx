import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SuccessRate = () => {

  const successes = [
    {
      ind: '1. Age:',
      data: 'Age is one of the most significant factors  affecting IVF success. Generally, the younger the woman, the higher the chances of success, as fertility declines with age.'
    },
    {
      ind: '2. Cause of Infertility:',
      data: 'The underlying cause of infertility, whether its related to issues with the womans reproductive system, the mans reproductive system, or both, can impact IVF success rates.'
    },
    {
      ind: '3. Ovarian Reserve:',
      data: ' The quality and quantity of a womans eggs, known as ovarian reserve, can affect the success of IVF. Women with a higher ovarian reserve typically have better outcomes.'
    },
    {
      ind: '4. Response to Ovarian Stimulation:',
      data: 'The womans response to ovarian stimulation medications, which are used to induce the development of multiple eggs, can influence IVF success. A poor response may result in fewer eggs retrieved, affecting the chances of success.'
    },
    {
      ind: '5. Semen Quality:',
      data: 'The quality of the mans sperm, including parameters such as sperm count, motility, and morphology, plays a crucial role in IVF success. Poor semen quality can decrease the chances of fertilization and embryo development.'
    },
    {
      ind: '1. Age:',
      data: 'Age is one of the most significant factors    affecting IVF success. Generally, the younger the woman, the higher the chances of success, as fertility declines with age.'
    },
    {
      ind: '6. Embryo Quality: ',
      data: 'The quality of embryos transferred during IVF, as determined by their morphology and developmental stage, is a significant predictor of success. Higher-quality embryos have a better chance of implanting and resulting in a successful pregnancy.'
    },
    {
      ind: '7.	Previous IVF Attempts:',
      data: 'The quality of embryos transferred during IVF, as determined by their morphology and developmental stage, is a significant predictor of success. Higher-quality embryos have a better chance of implanting and resulting in a successful pregnancy.'
    },
    {
      ind: '8.	Lifestyle Factors:',
      data: ' Certain lifestyle factors, such as smoking, alcohol consumption, obesity, and stress, can affect IVF success rates. Adopting healthy lifestyle habits may improve outcomes.'
    },
    {
      ind: '9.	Reproductive Health Conditions: ',
      data: '9.	Reproductive Health Conditions: Pre-existing reproductive health conditions, such as endometriosis, polycystic ovary syndrome (PCOS), and uterine abnormalities, can affect IVF success rates.'
    },
    {
      ind: '10.	Clinic and Laboratory Factors:',
      data: 'The fertility clinics expertise, the medical teams experience, and the laboratory facilities quality can influence IVF success rates.'
    }
  ]
  return (
     <>
        <Helmet>
            <title >Success Rate: Arpit Test Tube Baby Centre Prayagraj</title>
            <meta name="description" content="Discover the high IVF success rates at Arpit Test Tube Baby Centre, Prayagraj. We focus on personalized care and evidence-based fertility treatments." />
            <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
            <meta property="og:title" content="Best Gynecology Services" />
            <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
    <section className="text-gray-600 z-1 mt-14 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">

        <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:item text-center md:text-left items-center ">
          <h1 className="title-font sm:text-5xl font-asap font-bold text-3xl mb-4 text-rose-800">
            Arpit Test Tube Baby Centre
          </h1>
          <div className="p-2 text-justify">
            The success rate of Arpit Test Tube Baby Centre is over 65% due to
            the long experience of the medical team, being pioneers in
            infertility and IVF treatment, for the last 25 years we have been at
            the forefront of helping couples achieve their dreams of parenthood
            with regular upgradation of newer technologies. It's not just about
            providing medical assistance but also offering hope and support to
            those who are struggling with fertility issues.
          </div>
          <div className="p-2 text-justify">
            Our IVF centre is known for its high success rate and for managing
            multiple failed IVF cases. We follow a patient-friendly approach to
            make infertile couples or pregnant women feel comfortable throughout
            their treatment and care process. Arpit Test Tube Baby Centre has a
            policy to maintain transparency, confidential patient data,
            affordable pricing, and provide utmost care and support.
          </div>
          <div className="p-2 text-justify">
            Several factors influence the success rate of in vitro fertilization
            (IVF) treatment. These factors include:
          </div>

          <div className="text-justify mt-16">
          {
            successes.map((index) => (
              <div className='py-2' >
                <span className="font-semibold">{index.ind} </span>
                <span className="text-left"> {index.data}</span>
              </div>
            ))
          }
          </div>
          <div className="flex justify-center my-10">
            <Link to="/book-appointment">
              <button className="inline-flex text-white bg-rose-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
                Book Appoinment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SuccessRate;
