"use client";

import React, { useState } from "react";
import { FaDumbbell, FaRunning, FaBiking } from "react-icons/fa";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$29/mo",
    description: "Ideal for beginners starting their fitness journey.",
    icon: <FaRunning className="text-[#e69202] text-6xl mb-4" />,
  },
  {
    id: 2,
    name: "Pro Plan",
    price: "$49/mo",
    description: "For fitness enthusiasts who want more features.",
    icon: <FaDumbbell className="text-[#e69202] text-6xl mb-4" />,
  },
  {
    id: 3,
    name: "Ultimate Plan",
    price: "$79/mo",
    description: "All features included for peak performance.",
    icon: <FaBiking className="text-[#e69202] text-6xl mb-4" />,
  },
];

const page = () => {
  const [activePlan, setActivePlan] = useState(2); // default center card

  return (
    <div
    id="plan"
      className="w-screen h-screen bg-black relative flex flex-col items-center justify-start pt-20 px-6"
      style={{
        backgroundImage: "url('/Images/gym-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Heading */}
      <h1 className="relative text-white text-5xl md:text-6xl font-bold mb-12 z-10 text-center">
        Subscribe to Our Plan
      </h1>

      {/* Main Container */}
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-6 z-10">
        {plans.map((plan) => {
          const isActive = plan.id === activePlan;
          return (
            <div
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              className={`cursor-pointer transition-all duration-500 ease-in-out
                flex flex-col items-center text-center p-6 rounded-xl
                bg-black/30 backdrop-blur-md border border-white/20
                hover:border-[#e69202]
                ${
                  isActive
                    ? "md:flex-1 scale-105 shadow-[0_0_30px_rgba(230,146,2,0.6)] z-10"
                    : "md:flex-[0.8] scale-95 opacity-70"
                }
              `}
            >
              {/* Icon */}
              {plan.icon}

              {/* Plan Name */}
              <h2 className="text-white font-bold text-2xl mb-2">{plan.name}</h2>

              {/* Price */}
              <p className="text-[#e69202] font-semibold text-xl mb-2">{plan.price}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4">{plan.description}</p>

              {/* Apply Button */}
              <button className="px-6 py-2 rounded-full bg-[#e69202] text-black font-semibold hover:bg-[#ffaa33] transition duration-300">
                Subscribe
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
