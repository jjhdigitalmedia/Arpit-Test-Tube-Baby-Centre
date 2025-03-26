import React from 'react'
import IVFvideo from '../../assets/videos/IVFvideo.mp4';
import Gallery from '../Gallery';
import qqq1 from '../../assets/Banners/qqq1.jpg';
const IVFLab = () => {
  return (
    <>
      <div className="-mb-16 md:-mb-80 bg-red-50">
        <img src={qqq1} alt="" />
      </div>
      <div className="w-full md:px-52 py-10 bg-red-50 my-5">
        <video className="h-11/12 m-auto w-screen border-rose-50 " controls>
          <source
            src={IVFvideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Gallery />
      </div>
    </>
  )
}

export default IVFLab