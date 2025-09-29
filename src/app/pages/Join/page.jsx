"use client";

import React from "react";

const page = () => {
  return (
    <div  id="why-join-us" className="w-screen min-h-screen bg-black relative flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e69202]/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#ffaa33]/15 rounded-full filter blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#e69202]/10 rounded-full filter blur-2xl animate-pulse"></div>

      {/* Main Container */}
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 z-10">
        {/* Left Side - Images in triangle style */}
        <div className="relative w-full md:w-1/2 flex justify-center h-80 md:h-96 overflow-visible">
          {/* Top Image */}
          <div className="absolute top-0 md:top-0 left-1/4 w-56 h-72 md:w-60 md:h-80 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
            <img
              src="https://goldsgym.in/wp-content/uploads/2023/12/compress-strong-man-training-gym-min-scaled.jpg"
              alt="Join 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Image */}
          <div className="absolute top-32 md:top-24 left-0 w-56 h-72 md:w-60 md:h-80 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
            <img
              src="https://images.squarespace-cdn.com/content/v1/63b64fb4acb3d03e2b30d54a/596084d2-02c9-4820-9c12-4c4e6157c926/P1057823.jpg"
              alt="Join 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Why Join Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Join our fitness family and unlock your potential. We provide expert trainers, modern equipment, and personalized plans to help you achieve your goals efficiently. Whether you are a beginner or a professional, we are here to guide you every step of the way.
          </p>
          <p className="text-gray-400 text-md md:text-lg">
            Experience a motivating environment, supportive community, and structured programs designed to deliver real results. Become part of a fitness journey that transforms not only your body but your lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
