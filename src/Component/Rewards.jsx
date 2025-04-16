import React from "react";
import { Link } from "react-router-dom";
import speaker1 from "../assets/speaker1.jpg";
import IVFvideo from '../assets/videos/IVFvideo.mp4';
import lab0 from "../assets/lab0.png";
import patientweb from "../assets/patientweb.png";
import qqq1 from '../assets/Banners/qqq1.jpg';

const Rewards = () => {
  return (
    <>
      <div className="-mb-16 md:-mb-80">
        <img src={qqq1} alt="" />
      </div>
      <div className="flex text-xs justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto lg:mt-10">

        <Link to="ivf-lab" className="bg-white m-2 h-auto rounded-2xl shadow-xl shadow-slate-300 overflow-hidden max-w-72">
          <img
            src={lab0}
            alt="Mountain"
            className="w-full  object-cover border-8 border-white rounded-2xl"
          />
          <div className="px-4 py-0 pt-3">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              IVF Lab
            </h2>
            <p className="text-gray-700 text-base leading-normal mb-4">
              Dr. Vandana Bansal In simple terms IVF means fertilisation outside the body. After ovarian stimulation, eggs are
            </p>
          </div>
        </Link >

        <Link to='patients-review' className="bg-white m-2 h-auto rounded-2xl shadow-xl shadow-slate-300 overflow-hidden  max-w-72">
          <img
            src={patientweb}
            alt="Mountain"
            className="w-full  object-cover border-8 border-white rounded-2xl"
          />
          <div className="px-4 py-0 pt-3">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Testimonials
            </h2>
            <p className="text-gray-700 text-base leading-normal mb-4">
              At our healthcare facility, patient satisfaction is at the core of everything we do. We believe that providing high-quality 
            </p>
          </div>
        </Link>
        <Link to="guest-speaker" className="bg-whie m-2 h-auto rounded-2xl shadow-xl shadow-slate-300 overflow-hidden max-w-72">
          <img
            src={speaker1}
            alt="Mountain"
            className="w-full object-cover border-8 border-white rounded-2xl"
          />
          <div className="px-4 py-0 pt-3">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Guest Speaker
            </h2>
            <p className="text-gray-700 text-base leading-normal mb-4">
            Dr. Vandana Bansal is a distinguished guest speaker at various global conferences,  where she shares her expertise in IVF, Laparoscopic & Hysteroscopic Surgeries, Cosmetic Gynaecologst and engaging conversations.
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
