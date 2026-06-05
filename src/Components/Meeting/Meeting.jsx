import React from "react";
import bgImage from "../../assets/Ellipse 734.png";
import image1 from "../../assets/image 348.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import polygon from "../../assets/Polygon 3.png"

const Meeting = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-center py-16 px-6 md:px-12 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">

        
        <div className="max-w-[500px] text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Tomorrow should be better than today
          </h2>

          <p className="mt-4 text-gray-700 my-1 text-sm md:text-base leading-relaxed">
            We are a team of strategists, designers, communicators, and researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>

          <div className="flex items-center gap-2 cursor-pointer group mt-4">
            <h2 className="font-semibold">Read more
                
            </h2>
            <HiOutlineArrowLongRight className="text-2xl pt-1" />
          </div>
        </div>

        
        <div className="relative flex justify-center">
          <div className="w-[260px] md:w-[320px] lg:w-[380px]">
            <img
              src={image1}
              alt=""
              className="w-full object-contain drop-shadow-xl z-10"
            />
          </div>
        </div>

        <img src={polygon} alt="" className="absolute right-15 -z-3 top-15 hidden md:block" />
      </div>
    </section>
  );
};

export default Meeting;