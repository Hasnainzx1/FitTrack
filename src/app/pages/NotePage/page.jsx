"use client";
import React from "react";
import { FaFireAlt } from "react-icons/fa";

const Page = () => {
  return (
    <div
      className="w-screen h-screen bg-black flex items-center justify-center px-6 relative"
      style={{
        backgroundImage: "url('/Images/gym-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Card */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
        <div
          className="w-full flex flex-col md:flex-row gap-8
          bg-black/30 backdrop-blur-md rounded-xl p-8
          border border-white/20
          hover:scale-105 hover:shadow-[0_0_20px_rgba(230,146,2,0.7)]
          transition-all duration-500 ease-in-out relative overflow-hidden"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e69202] to-[#ffaa33] opacity-0 hover:opacity-20 transition-all duration-500 pointer-events-none"></div>

          {/* Left Content */}
          <div className="md:w-1/2 text-white relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-4">
              <FaFireAlt className="text-[#ffaa33] text-3xl" />
              <h2 className="text-4xl font-bold">Burn Calories & Stay Healthy</h2>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
              Curabitur vehicula elit nec ligula fermentum, a dignissim nulla tristique.  
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.  
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.  
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
            <div className="w-full h-64 md:h-80 bg-black/40 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:border-[#e69202] transition-all duration-500 ease-in-out shadow-lg hover:shadow-[#ffaa33]/40">
              <img
                src="/Images/note.jpg"
                alt="Gym"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
