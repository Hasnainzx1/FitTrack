"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/Images/Bgimage.jpg')" }}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20" />


      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#e69202] rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#e69202] rounded-full opacity-60 animate-ping"></div>


        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>


      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 py-4 z-50">

        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src="/favicon.ico"
            alt="logo"
            className="h-10 w-10 sm:h-[50px] sm:w-[50px] object-contain"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">FitTrack</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-12 text-sm">
          {["Home", "Featured", "BMI","Testimonial","Leaders", "Plan", "Why Join Us"].map((item) => (
            <li key={item}>
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : item === "BMI"
                      ? "/BMI"
                      : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="cursor-pointer px-3 py-2 rounded-md transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Show only when the menu is NOT open */}
        {!isOpen && (
          <div className="md:hidden z-50">
            <FaBars
              className="text-2xl cursor-pointer transition-all duration-300 hover:text-[#e69202]"
              onClick={() => setIsOpen(true)}
            />
          </div>
        )}

        {/* Enhanced Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-lg p-6 transform transition-all duration-500 ease-in-out z-40 md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Single Close Button - Centered */}
          <div className="flex justify-between items-center mb-8 pt-4 border-b border-gray-700 pb-4">
            <h2 className="text-xl font-bold text-[#e69202]">Menu</h2>
            <FaTimes
              className="text-2xl cursor-pointer text-white hover:text-[#e69202] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Navigation Links */}
          <ul className="space-y-4">
            {["Home", "Featured", "BMI Calculator", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link href={item === "Home" ? "/" : item === "BMI Calculator" ? "/bmi" : `#${item.toLowerCase().replace(' ', '')}`}
                  className="block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-[#e69202]/20 hover:text-[#e69202] hover:translate-x-2 border-l-2 border-transparent hover:border-[#e69202]"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Additional Mobile Menu Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-gray-400 text-sm">
              <p>Transform Your Journey</p>
            </div>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      {/* Enhanced Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        {/* Main Heading with Adjusted Styling */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 drop-shadow-2xl leading-tight">
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e69202] to-[#ffaa33] animate-pulse">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Body
            </span>
          </h1>
        </div>

        {/* Subtitle with Adjusted Spacing */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-4 sm:mb-6 drop-shadow-lg font-light italic text-gray-200 animate-fade-in-up">
          Your path to a healthier you, simplified with cutting-edge technology and personalized guidance.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
          <a
            href="#contact"
            className="px-8 sm:px-10 py-4 font-bold text-base sm:text-lg transition-all duration-300
        bg-gradient-to-r from-[#e69202] to-[#ffaa33] text-white
        hover:from-[#c77d01] hover:to-[#e69202] hover:scale-105 
        hover:shadow-2xl hover:shadow-[#e69202]/40
        active:scale-95 border-0 transform hover:-translate-y-1
        flex items-center justify-center min-w-[160px] 
        tracking-wide uppercase "
            style={{ borderRadius: '0px' }}
          >
            Contact Now
          </a>
          <a
            href="#"
            className="px-8 sm:px-10 py-4 flex gap-3 items-center justify-center sm:text-lg transition-all duration-300
        bg-transparent text-white border-2 border-white/60
        hover:bg-white/10 hover:scale-105 hover:border-white/90 hover:shadow-2xl hover:shadow-white/20
        active:scale-95 transform hover:-translate-y-1 backdrop-blur-sm
        min-w-[120px] font-semibold uppercase text-sm"
            style={{ borderRadius: '0px' }}
          >
            <span>Explore</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;