import React from "react";
import { HiOutlineBars2 } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-[1420px] h-[70px] md:h-[80px] flex mx-auto items-center justify-between px-4 md:px-6">

          
          <div className="cursor-pointer">
            <h1 className="font-normal text-xl md:text-[28px] leading-[46px]">
              Elementum
            </h1>
          </div>

          
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-10 text-gray-700">
              <li className="cursor-pointer hover:text-black transition">Home</li>
              <li className="cursor-pointer hover:text-black transition">Studio</li>
              <li className="cursor-pointer hover:text-black transition">Services</li>
              <li className="cursor-pointer hover:text-black transition">Contact</li>
              <li className="cursor-pointer hover:text-black transition">FAQ's</li>
            </ul>
          </nav>

          
          <div> <HiOutlineBars2 className="text-3xl cursor-pointer" /> </div>

        </div>
      </header>

      <div className="h-[70px] md:h-[80px]"></div>
    </>
  );
};

export default Header;