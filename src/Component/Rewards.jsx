import { Link } from "react-router-dom";
import qqq1 from '../assets/Banners/qqq1.jpg';
import lab0 from "../assets/lab0.png";
import patientweb from "../assets/patientweb.png";
import speaker1 from "../assets/speaker1.jpg";
// import IVFvideo from '../assets/videos/IVFvideo.mp4';

const Rewards = () => {
  return (
    <>
      <div className="-mb-16 md:-mb-80">
        <img src={qqq1} alt="" />
      </div>
      <div className="flex text-xs justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto lg:mt-10">

        <Link to="ivf-lab" className="bg-white m-2 h-auto rounded-2xl shadow-md shadow-slate-300 overflow-hidden max-w-72">
          <img
            src={lab0}
            alt="Arpit Test Tube Baby Centre Lab"
            className="w-full  object-cover border-8 border-white rounded-2xl"
          />
          <div className="px-4 py-0 pt-3">
            <h2 className="text-3xl font-semibold font-asap text-rose-800 mb-3">
              IVF Lab
            </h2>
            <p className="text-gray-700 text-justify text-base leading-normal mb-4">
              Our advanced IVF lab at Arpit Test Tube Baby Centre ensures high success rates with cutting-edge technology and expert care.
            </p>
          </div>
        </Link >

        <Link to='patients-review' className="bg-white m-2 h-auto rounded-2xl shadow-md shadow-slate-300 overflow-hidden  max-w-72">
          <img
            src={patientweb}
            alt="Patient's Testimonials - Arpit Test Tube Baby Centre"
            className="w-full  object-cover border-8 border-white rounded-2xl"
          />
          <div className="px-4 py-0 pt-3">
            <h2 className="text-3xl font-semibold font-asap text-rose-800 mb-3">
              Testimonials
            </h2>
            <p className="text-gray-700 text-justify text-base leading-normal mb-4">
             At our healthcare facility, patient satisfaction is our top priority. We are committed to delivering high-quality care in everything we do.
            </p>
          </div>
        </Link>
        <Link to="guest-speaker" className="bg-whie m-2 h-auto rounded-2xl shadow-md shadow-slate-300 overflow-hidden max-w-72">
          <img
            src={speaker1}
            alt="Dr Vandana Bansal as Speaker"
            className="w-full object-cover border-8 border-white rounded-2xl"
          />
          <div className="px-4 py-0 pt-3">
            <h2 className="text-3xl font-semibold font-asap text-rose-800 mb-3">
              Guest Speaker
            </h2>
            <p className="text-gray-700 text-base text-justify leading-normal mb-4">
           Dr. Vandana Bansal is a renowned guest speaker at international conferences, sharing her expertise in IVF and many other advanced fertility and surgical treatments.
            </p>
          </div>
        </Link>

      </div>
      {/* <div className="w-full md:px-52 py-10 bg-red-200 my-5">
        <video className="h-11/12 m-auto w-screen border-rose-50 " controls>
          <source
            src={IVFvideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </>
  );
};
export default Rewards;
