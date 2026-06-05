import React from "react";
import Image1 from "../../assets/Ellipse 262.webp";
import Image2 from "../../assets/Ellipse 261.webp";
import Image3 from "../../assets/Ellipse 255.webp";
import Image4 from "../../assets/Ellipse 256.webp";
import Image5 from "../../assets/Ellipse 257.webp";
import Image6 from "../../assets/Ellipse 258 (1).webp";
import Image7 from "../../assets/Ellipse 259.webp";
import Image8 from "../../assets/Ellipse 260.webp";
import Image9 from "../../assets/Ellipse 736.webp";
import Image10 from "../../assets/Vector 2510.webp";
import Image11 from "../../assets/Vector 2511.webp";


const Hero = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="max-w-[1420px] mx-auto py-10 px-4">

        
        <div className="flex flex-col items-center gap-4">

          <div className="w-full md:w-[700px] text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl leading-19">
              The thinkers and doers were cha<span className="bg-[#ffc2ea] inline-block px-4 pl-4 text-center   rounded-full pb-3 ">nging</span> the <span className="bg-[#d7eedd] inline-block px-4 pl-4 text-center   rounded-full pb-3 ">status</span> Quo with
            </h1>
          </div>

          <div className="w-full md:w-[580px] text-center py-4">
            <p className="text-sm md:text-base text-gray-600">
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only happens
              when you refuse to play things safe.
            </p>
          </div>
          <img src={Image9} alt="" className="absolute hidden lg:block right-70 top-50"  />
          <img src={Image10} alt="" className="absolute hidden lg:block left-2 top-50 w-12" />
          <img src={Image11} alt="" className="absolute  hidden lg:block left-10 top-50 w-14" />

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 py-10 w-full place-items-center">

          
            <div className="relative w-[180px] md:w-[220px] h-[220px]">
              <img src={Image1} className="w-[160px] md:w-[180px] object-contain" />
              <img
                src={Image2}
                className="absolute -top-6 md:-top-20 -right-20 w-[160px] md:w-[180px] border-4 border-white rounded-full"
              />
            </div>

          
            <div className="relative w-[200px] md:w-[250px] h-[300px]">
              <img src={Image3} className="absolute rounded-full -top-6 left-0 w-[160px] md:w-[180px]" />
              <img src={Image4} className="absolute bottom-0 left-8 md:left-30 w-[160px] md:w-[180px]" />
            </div>

          
            <div className="relative w-[180px] md:w-[220px] h-[220px]">
              <img src={Image5} className="w-[160px] md:w-[180px]" />
              <img
                src={Image6}
                className="absolute top-25 -right-20 w-[160px] md:w-[180px] border-4 border-white rounded-full"
              />
            </div>

            <div className="relative w-[200px] md:w-[250px] h-[300px]">
              <img src={Image7} className="absolute -top-6 left-0 w-[160px] md:w-[180px]" />
              <img src={Image8} className="absolute bottom-0 left-8 md:left-30 w-[160px] md:w-[180px]" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;