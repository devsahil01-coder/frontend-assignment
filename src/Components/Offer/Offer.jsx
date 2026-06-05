import React from "react";
import vector from "../../assets/Vector 2516.png";
import polygon from "../../assets/Polygon 3.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Offer = () => {
  return (
    <section className="w-full px-6 md:px-12 py-10 overflow-x-hidden">

      <div className="max-w-[1420px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">

        
        <div className="max-w-[500px] text-center md:text-left">
          <h2 className="text-3xl md:text-7xl font-semibold leading-tight">
            What we <span className="bg-[#d7eedd] inline-block  px-6 pt-0  text-center space--0    rounded-full ">can</span> offer you!
          </h2>
        </div>


        <div className="relative flex justify-end ">
          <img src={vector} alt="" className=" max-w-[700px] md:max-w-[400px] bg-cover bg-right" />
        </div>

      </div>

    
      <div className="flex flex-col gap-5 mt-10">

        <hr className="border-gray-300" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 py-6">
          <p className="w-full md:w-[200px] text-lg md:text-xl">
            Office of multiple interest content
          </p>
          <h2 className="text-2xl md:text-5xl">
            Collaborative & partnership
          </h2>
          <HiOutlineArrowLongRight className="text-2xl md:text-3xl" />
        </div>

        <hr className="border-gray-300" />

        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 py-6">
          <p className="w-full md:w-[250px] text-lg md:text-xl">
            The hanger US Air force digital experimental
          </p>
          <h2 className="text-2xl md:text-5xl">
            We talk about our weight.
          </h2>
          <HiOutlineArrowLongRight className="text-2xl md:text-3xl" />
        </div>

        <hr className="border-gray-300" />

       
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 py-6">
          <p className="w-full md:w-[200px] text-lg md:text-xl">
            Delta faucet content, social, digital
          </p>
          <h2 className="text-2xl md:text-5xl">
            Piloting digital confidence
          </h2>
          <HiOutlineArrowLongRight className="text-2xl md:text-3xl" />
        </div>

        <hr className="border-gray-300" />

      </div>
    </section>
  );
};

export default Offer;