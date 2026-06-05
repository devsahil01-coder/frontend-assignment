import React from "react";
import image1 from "../../assets/Ellipse 739.png"
import image2 from "../../assets/Vector 2518.png"
// import image1 from "../../assets/Ellipse 739.png"

export default function Footer() {
  return (
    <footer className="w-full bg-[#d8ede0] font-sans">
      <div className="relative px-20 pt-16 pb-10 text-center  py-10 overflow-hidden">
      

        <h2 className="text-6xl text-gray-900 pt-10 pb-4 ">
         Subscribe to
<br />
          
our newsletter
        </h2>
        <p className="text-sm text-gray-600 mb-7">
          To make your stay special and even more memorable
        </p>
        <button className="bg-gray-900 text-white rounded-full px-8 py-3.5 text-sm hover:bg-gray-700 transition-colors">
          Subscribe Now
        </button>
        <img src={image1} alt="" className="absolute top-40 hidden w-30 lg:block right-60"/>
        <img src={image2} alt="" className="absolute top-0 hidden w-30 lg:block left-160"/>
        <img src={image2} alt="" className="absolute top-0 hidden w-30 lg:block left-140"/>
      </div>

      <hr className="border-t text-gray-500 mx-20" />

      <div className="max-w-[1420px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-10 ">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
          {["Home", "Studio", "Service", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-sm text-gray-800 mb-2.5 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Terms & Policies
          </h4>
          {[
            "Privacy Policy",
            "Terms & Conditions",
            "Explore",
            "Accessibility",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-sm text-gray-800 mb-2.5 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Follow Us
          </h4>
          {["Instagram", "LinkedIn", "Youtube", "Twitter"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-sm text-gray-800 mb-2.5 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
          <p className="text-sm text-gray-800 leading-relaxed mb-2">
            1498 W Fulton St, Ste 2D
            <br />
            Chicago, IL 63867
          </p>
          <p className="text-sm text-gray-800 mb-2">(123) 456-7890</p>
          <p className="text-sm text-gray-800">info@elementum.com</p>
        </div>
      </div>

      <div className="text-center pb-8 text-sm text-gray-800">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
}
