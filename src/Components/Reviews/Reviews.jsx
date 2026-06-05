import React from "react";
import Image1 from "../../assets/Ellipse 263.webp";
import Image2 from "../../assets/Ellipse 266.webp";
import Image3 from "../../assets/Ellipse 268.webp";
import Image4 from "../../assets/Ellipse 267.webp";
import Image5 from "../../assets/Ellipse 270.webp";
import Image6 from "../../assets/Ellipse 260.webp";
import Image7 from "../../assets/Ellipse 258 (1).webp";
import Image8 from "../../assets/Ellipse 269 (1).webp";

const Reviews = () => {
  return (
    <section className="w-full px-6 md:px-12 py-10 ">
      <div className="max-w-[1200px] mx-auto  flex flex-col lg:flex-row  lg:items-start justify-center lg:justify-start  items-center gap-20">
        <div className="w-[300px] h-[600px] ">
          <img src={Image1} className="mb-10 ml-20" />
          <img src={Image2} className="" />
          <img src={Image3} className="ml-25" />
          <img src={Image4} className="mr-20" />
        </div>
        <div className="     h-[600px]">
          <h2 className="text-5xl  text-center  mt-10 p-1 ml-3"><span className="bg-[#d7eedd] inline-block  px-6 pt-0 py-1 text-center space--0    rounded-full ">What</span> our customer <br /> says About Us</h2>
          <div className="max-w-[500px] text-gray-800 text-center mt-20 px-10 py-6  rounded-[20px] bg-[#f3faf5]">
            <p>   Elementum  delivered the site with inthe timeline
as they requested. Inthe end, the client found a 50% 
increase in traffic with in days since its launch. They
also had an impressive ability to use technologies that
the company hasn`t used, which have also proved to
be easy to use and reliable      </p>
          </div>
        </div>
        

        <div className="w-[300px] h-[600px]  flex flex-col items-center justify-center gap-6 overflow-hidden">
  <img src={Image5} className="w-30 object-contain" />
  <img src={Image6} className="w-16 -ml-40 object-contain" />
  <img src={Image7} className="w-24 -ml-20 object-contain" />
  <img src={Image8} className="w-44 ml-30 object-contain" />
</div>
      </div>
    </section>


  );
};

export default Reviews;
