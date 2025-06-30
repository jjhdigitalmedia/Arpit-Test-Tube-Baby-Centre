import React, { useEffect } from "react";
import IVFet from "../assets/icons/Treatment/IVFet.jpg";
import iui from "../assets/icons/Treatment/iui.png";
import icsi from "../assets/icons/Treatment/icsi.png";
import IMSI from "../assets/icons/Treatment/IMSI.png";
import embryo from "../assets/icons/Treatment/embryo.png";
import lasehatching from "../assets/icons/Treatment/lasehatching.png";
import Sonography from "../assets/icons/Treatment/Sonography.png";
import MoreIcon from "../assets/icons/Treatment/MoreIcon.png";
import Aos from "aos";
import 'aos/dist/aos.css'
import '../Style/Style.css'
import { Link } from "react-router-dom";
import VideoOfCentre from "./VideoOfCentre";
// import laproo from "../assets/icons/Treatment/laproo.png";
// import IVFvideo from '../assets/videos/IVFvideo.mp4';
// import { PiDotsNineLight } from "react-icons/pi";

const Treatements = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  const TreatmentData = [
    {
      img: iui,
      link: '/treatments/iui',
      heading: "IUI Treatment",
      more: 'view more'

    },
    {
      img: IVFet,
      link: '/treatments/ivf-et',
      heading: "IVF-ET",
      more: 'view more'

    },
    {
      img: icsi,
      link: '/treatments/icsi',
      heading: "ICSI Treatment",
      more: 'view more'

    },
    {
      img: IMSI,
      link: '/treatments/imsi',
      heading: "IMSI Treatment",
      more: 'view more'

    },
    {
      img: embryo,
      link: '/treatments/embryo-donation',
      heading: "Embryo Monitoring",
      more: 'view more'

    },
    {
      img: lasehatching,
      link: '/treatments/laser-assisted',
      heading: "Laser Assisted Hatching",
      more: 'view more'

    },
    {
      img: Sonography,
      link: '/treatments/sonography',
      heading: "Sonography",
      more: 'view more'
    },
    {
      img: MoreIcon,
      link: '/treatments',
      heading: "View All Treatments",
      more: 'view more'
    }
  ]

  return (<>
    <section className="text-gray-600 bg-ros-800  my-10 body-font">

      <div className="container px-1 md:px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-5xl text-2xl font-medium title-font font-asap mb-4 text-rose-700">Specialized Fertility Services</h1>
          <p className="lg:w-2/3 mx-auto text-sm leading-relaxed">We offer personalized fertility treatments tailored to each patient’s unique journey. From advanced IVF and IUI procedures to fertility preservation and hormonal therapies, our team combines cutting-edge technology with compassionate care to maximize your chances of success. Your dream of parenthood starts here.</p>
        </div>
        <div className="flex flex-wrap text-center mx-auto m-0 md:m-4 lg:w-4/5 ">
          {TreatmentData && TreatmentData.map((treat) => (
            <Link to={treat.link} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="shadow-md bg-white order-gray-200 px-3 py-5 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={treat.img}
                />
                <h2 className="title-font font-medium text-md text-gray-900">{treat.heading}</h2>
                <p className="leading-relaxed text-sm text-rose-600">{treat.more}</p>
              </div>
            </Link>
          ))
          }
        </div>
      </div>
    </section>
    <div className="w-full md:px-2 py-28 bg-rose-800">
      <VideoOfCentre />
    </div>
  </>
  );
};

export default Treatements;
