// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import About from './Component/About.jsx'
// import Contact from './Component/Contact.jsx'
// import Achievements from './Component/Achievements.jsx'
// import NavigationB from './Component/NavigationB.jsx'
// import Footer from './Component/Footer.jsx'
// import { ParallaxProvider } from 'react-scroll-parallax'
// import { PatientReviewVideo } from './Component/Reviews/PatientReviewVideo.jsx'

// import BookAppointment from './Component/BookAppointment.jsx'
// import GuestSpeaker from './Component/GuestSpeaker/GuestSpeaker.jsx'

// import Iui from './Pages/Iui.jsx'
// import Ivfet from './Pages/Ivfet.jsx'
// import Icsi from './Pages/Icsi.jsx'
// import Ivm from './Pages/Ivm.jsx'
// import Imsi from './Pages/Imsi.jsx'
// import Embryo from './Pages/Embryo.jsx'
// import LaserAssisted from './Pages/LaserAssisted.jsx'
// import Laparoscopy from './Pages/Laparoscopy.jsx'
// import Home from './Component/Home.jsx'
// import Layout from './Layout.jsx'
// import Facilities from './Component/Facilities.jsx'
// import IVFteam from './Component/IVFteam.jsx'
// import PatientsGuide from './Component/PatientsGuide.jsx'
// import Gallery from './Component/Gallery.jsx'
// import Endocrine from './Pages/Endocrine.jsx'
// import Sonography from './Pages/Sonography.jsx'
// import HSGSono from './Pages/HSGSono.jsx'
// import SemenBank from './Pages/SemenBank.jsx'
// import Blastocyst from './Pages/Blastocyst.jsx'
// import EggDonation from './Pages/EggDonation.jsx'
// import Cryopreservation from './Pages/Cryopreservation.jsx'
// import EmbryoBank from './Pages/EmbryoBank.jsx'
// import OurFounder from './Component/OurFounder.jsx'
// import OurProfile from './Component/OurProfile.jsx'
// import OurVisionMission from './Component/OurVisionMission.jsx'
// import Spiritual from './Component/Spiritual.jsx'
// import NewsImages from './Component/NewsImages.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <> <App /></>,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'bookappointment',
//         element: <BookAppointment />,
//       },
//       {
//         path: 'ivfteam',
//         element: <IVFteam />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'facilities',
//         element: <Facilities />,
//         children: []
//       },
//       {
//         path: 'patientsguide',
//         element: <PatientsGuide />,
//         children: []
//       },
//       {
//         path: 'achievements',
//         element: <Achievements />,
//         children: []
//       },
//       {
//         path: 'gallery',
//         element: <Gallery />,
//         children: []
//       },
//       {
//         path: 'patientsreview',
//         element: <PatientReviewVideo />,
//         children: []
//       },
//       {
//         path: 'ourfounder',
//         element: <OurFounder />,
//         children: []
//       },
//       {
//         path: 'ourprofile',
//         element: <OurProfile />,
//         children: []
//       },
//       {
//         path: 'ourvisionmission',
//         element: <OurVisionMission />,
//         children: []
//       },
//       {
//         path: 'spiritualjourney',
//         element: <Spiritual />,
//         children: []
//       },
//       {
//         path: 'newsimages',
//         element: <NewsImages />,
//         children: []
//       },

//       {
//         path: 'iuitreatment',
//         element: <Iui />,
//         children: []
//       },
//       {
//         path: 'ivfet',
//         element: <Ivfet />,
//         children: []
//       },
//       {
//         path: 'icsi',
//         element: <Icsi />,
//         children: []
//       },
//       {
//         path: 'ivmtreatment',
//         element: <Ivm />,
//         children: []
//       },
//       {
//         path: 'imsitreatment',
//         element: <Imsi />,
//         children: []
//       },
//       {
//         path: 'embryomonitoring',
//         element: <Embryo />,
//         children: []
//       },
//       {
//         path: 'laserassisted',
//         element: <LaserAssisted />,
//         children: []
//       },
//       {
//         path: 'laparoscopy',
//         element: <Laparoscopy />,
//         children: []
//       },
//       {
//         path: 'endocrine',
//         element: <Endocrine />,
//         children: []
//       },
//       {
//         path: 'sonography',
//         element: <Sonography />,
//         children: []
//       },
//       {
//         path: 'hsgsono',
//         element: <HSGSono />,
//         children: []
//       },
//       {
//         path: 'semenbank',
//         element: <SemenBank />,
//         children: []
//       },
//       {
//         path: 'embryobank',
//         element: <EmbryoBank />,
//         children: []
//       },
//       {
//         path: 'blastocyst',
//         element: <Blastocyst />,
//         children: []
//       },
//       {
//         path: 'eggdonation',
//         element: <EggDonation />,
//         children: []
//       },
//       {
//         path: 'cryopreservation',
//         element: <Cryopreservation />,
//         children: []
//       },

//       {
//         path: 'guestspeaker',
//         element: <GuestSpeaker />,
//         children: []
//       },
//     ]
//   },
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ParallaxProvider>

//       <RouterProvider router={router} />

//     </ParallaxProvider>
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
// import NavigationB from './Component/NavigationB.jsx'
// import Footer from './Component/Footer.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'
// import Layout from './Layout.jsx'

// import Gallery from './Component/Gallery.jsx'
// import IvmTreatment from './Pages/Treatments/IvmTreatment.jsx'
import EmbryoTreatment from './Pages/Treatments/EmbryoTreatment.jsx'
import SonographyTreatment from './Pages/Treatments/SonographyTreatment.jsx'
import EggDonationTreatment from './Pages/Treatments/EggDonationTreatment.jsx'
import SemenBankTreatment from './Pages/Treatments/SemenBankTreatment.jsx'
import EndocrineTreatment from './Pages/Treatments/EndocrineTreatment.jsx'
import CryopreservationTreatment from './Pages/Treatments/CryopreservationTreatment.jsx'
import LaparoscopyTreatment from './Pages/Treatments/LaparoscopyTreatment.jsx'

import Home from './Component/Home.jsx'
import IuiTreatment from './Pages/Treatments/IuiTreatment.jsx'
import IcsiTreatment from './Pages/Treatments/IcsiTreatment.jsx'
import IvfEtTreatment from './Pages/Treatments/IvfEtTreatment.jsx'
import ImsiTreatment from './Pages/Treatments/ImsiTreatment.jsx'
import LaserAssistedTreatment from './Pages/Treatments/LaserAssistedTreatment.jsx'
import EmbryoBankTreatment from './Pages/Treatments/EmbryoBankTreatment.jsx'
import HSGSonoTreatment from './Pages/Treatments/HSGSonoTreatment.jsx'
import BlastocystTreatment from './Pages/Treatments/BlastocystTreatment.jsx'
import OurFounders from './Pages/AboutUs/OurFounders.jsx'
import SpiritualJourney from './Pages/AboutUs/SpiritualJourney.jsx'
import OurVisionMissions from './Pages/AboutUs/OurVisionMissions.jsx'
import OurProfiles from './Pages/AboutUs/OurProfiles.jsx'
import Facilities from './Pages/Facilities.jsx'
import IVFteam from './Pages/Ivfteam.jsx'
import PatientsGuide from './Pages/PatientsGuide.jsx'
import SuccessRate from './Pages/SuccessRate.jsx'
// import BookYourAppointment from './Pages/BookYourAppointment.jsx'
// import BookAppointment from './Component/BookAppointment.jsx'
import Gallery from './Pages/Gallery.jsx'
import BookYourAppointment from './Pages/BookYourAppointment.jsx'
import PatientReviewVideo from './Pages/Rewards/PatientReviewVideo.jsx'
import GuestSpeaker from './Pages/Rewards/GuestSpeaker.jsx'
import NewsPaperCutting from './Pages/NewsPaperCutting.jsx'
import AboutDrVandanaBansal from './Pages/AboutUs/AboutDrVandanaBansal.jsx'
import IVFLab from './Pages/Rewards/IVFLab.jsx'
import EmbryoDonation from './Pages/Treatments/EmbryoDonation.jsx'
import OocyteDonation from './Pages/Treatments/OocyteDonation.jsx'
import SemenCryopreservation from './Pages/Treatments/SemenCryopreservation.jsx'
import OocyteCryopreservation from './Pages/Treatments/OocyteCryopreservation.jsx'
import TESA from './Pages/Treatments/TESA.jsx'
import MESA from './Pages/Treatments/MESA.jsx'
import HormonalAnalysis from './Pages/TestsAndEvaluation/HormonalAnalysis.jsx'
import UltrasoundColourDoppler3D4D from './Pages/TestsAndEvaluation/UltrasoundColourDoppler3D4D.jsx'
import OvulationInduction from './Pages/TestsAndEvaluation/OvulationInduction.jsx'
import AISemenAnalysis from './Pages/TestsAndEvaluation/AISemenAnalysis.jsx'
import LaproscopicHysteroscopicSurgeries from './Pages/TestsAndEvaluation/LaproscopicHysteroscopicSurgeries.jsx'
import DiagnosticVideoLaparoscopyHysteroscopy from './Pages/TestsAndEvaluation/DiagnosticVideoLaparoscopyHysteroscopy.jsx'
import MaleInfertilitySurgeries from './Pages/TestsAndEvaluation/MaleInfertilitySurgeries.jsx'
import PRPTreatment from './Pages/TestsAndEvaluation/PRPTreatment.jsx'
import StemCellTherapy from './Pages/TestsAndEvaluation/StemCellTherapy.jsx'
import Treatements from './Component/Treatements.jsx'
import EmbryoBanking from './Pages/Treatments/EmbryoBanking.jsx'
import HSGSSG from './Pages/TestsAndEvaluation/HSGSSG.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <> <App /></>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'book-appointment',
        element: <BookYourAppointment />,
      },
      {
        path: 'ivf-team',
        element: <IVFteam />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'facilities',
        element: <Facilities />,
        children: []
      },
      {
        path: 'patients-guide',
        element: <PatientsGuide />,
        children: []
      },
      {
        path: 'achievements',
        element: <SuccessRate />,
        children: []
      },
      {
        path: 'gallery',
        element: <Gallery />,
        children: []
      },
      {
        path: 'guests-peaker',
        element: <GuestSpeaker />,
        children: []
      },
      {
        path: 'patient-sreview',
        element: <PatientReviewVideo />,
        children: []
      },
      {
        path: 'ivf-lab',
        element: <IVFLab />,
        children: []
      },
      {
        path: 'our-founder',
        element: <OurFounders />,
        children: []
      },
      {
        path: 'ourp-rofile',
        element: <OurProfiles />,
        children: []
      },
      {
        path: 'our-vision-mission',
        element: <OurVisionMissions />,
        children: []
      },
      {
        path: 'spiritual-journey',
        element: <SpiritualJourney />,
        children: []
      },
      {
        path: 'news-images',
        element: <NewsPaperCutting />,
        children: []
      },
      {
        path: 'treatments',
        element: <Treatements />,
        children: []
      },

      {
        path: 'treatments/iui',
        element: <IuiTreatment />,
        children: []
      },
      {
        path: 'treatments/ivf-et',
        element: <IvfEtTreatment />,
        children: []
      },
      {
        path: 'treatments/icsi',
        element: <IcsiTreatment />,
        children: []
      },
      {
        path: 'treatments/laser-assisted',
        element: <LaserAssistedTreatment />,
        children: []
      },
      {
        path: 'treatments/imsi',
        element: <ImsiTreatment />,
        children: []
      },
      {
        path: 'treatments/embryo-donation',
        element: <EmbryoDonation />,
        children: []
      },
      {
        path: 'treatments/oocyte-donation',
        element: <OocyteDonation />,
        children: []
      },
      {
        path: 'treatments/blastocyst-transfer',
        element: <BlastocystTreatment />,
        children: []
      },
      {
        path: 'treatments/semen-cryopreservation',
        element: <SemenCryopreservation />,
        children: []
      },
      {
        path: 'treatments/oocyte-cryopreservation',
        element: <OocyteCryopreservation />,
        children: []
      },
      {
        path: 'treatments/embryo-bank',
        element: <EmbryoBanking />,
        children: []
      },
      {
        path: 'treatments/mesa-microepididymal-sperm-aspiration',
        element: <MESA />,
        children: []
      },
      {
        path: 'treatments/tesa-testicular-sperm-aspiration-cryopreservation',
        element: <TESA />,
        children: []
      },
      {
        path: 'test-evaluation/hormonal-analysis',
        element: <HormonalAnalysis />,
        children: []
      },
      {
        path: 'test-evaluation/3d-4d-ultrasound-colour-doppler',
        element: <UltrasoundColourDoppler3D4D/>,
        children: []
      },
      {
        path: 'test-evaluation/hsgssg',
        element: <HSGSSG />,
        children: []
      },
      {
        path: 'test-evaluation/ovulation-induction',
        element: <OvulationInduction />,
        children: []
      },
      {
        path: 'test-evaluation/ai-semen-analysis',
        element: <AISemenAnalysis />,
        children: []
      },
      {
        path: 'test-evaluation/fertility-enhancing-laparoscopic-hysteroscopic-surgeries',
        element: <LaproscopicHysteroscopicSurgeries />,
        children: []
      },
      {
        path: 'test-evaluation/diagnostic-video-laparoscopic-hysteroscopic',
        element: <DiagnosticVideoLaparoscopyHysteroscopy />,
        children: []
      },
      {
        path: 'test-evaluation/surgery-for-male-infertility',
        element: <MaleInfertilitySurgeries />,
        children: []
      },
      {
        path: 'test-evaluation/prp-treatment',
        element: <PRPTreatment />,
        children: []
      },
      {
        path: 'test-evaluation/stemcell-therapy',
        element: <StemCellTherapy />,
        children: []
      },
    ]
  },
  {
    path: '/our-founder',
    element: <> <OurFounders /></>,
    children: [
      {
        path: 'str',
        element: <AboutDrVandanaBansal />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>,
)

