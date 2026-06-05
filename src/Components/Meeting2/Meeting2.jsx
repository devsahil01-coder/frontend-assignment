import React from "react";
import image1 from "../../assets/image 348 (1).webp";
import image2 from "../../assets/Polygon 1.webp";
import vector from "../../assets/Vector 2517.webp"
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Meeting2 = () => {
  return (
    <section className="w-full   bg-right bg-bottom bg-no-repeat  py-20 px-6 md:px-12" style={{ backgroundImage: `url(${vector})`,zIndex:`110` }}>
      <div className="max-w-[1420px]  mx-auto flex flex-col md:flex-row items-center flex-col-reverse justify-between gap-10 relative">
       
                 <img src={image2} width={155} alt="" className="absolute -left-6 top-5 hidden md:block " />

        <div className="relative flex justify-center">
          <div className="w-[260px] md:w-[320px] lg:w-[380px]">
            <img
              src={image1}
              alt=""
              className="w-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
          <img src={image2} width={155} alt="" className="absolute  left-60 top-70 hidden md:block" />

        
        

        <div className="max-w-[500px] text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            See how we can help you progress
          </h2>

          <p className="mt-4 text-gray-700 my-1 text-sm md:text-base leading-relaxed">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          
          <div className="flex items-center gap-2 cursor-pointer group mt-4">
            <h2 className="font-semibold">Read more</h2>
            <HiOutlineArrowLongRight className="text-2xl pt-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting2;
