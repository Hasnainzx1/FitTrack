"use client";

import React, { useState } from "react";
import { FaDumbbell, FaRunning, FaBiking } from "react-icons/fa";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$29/mo",
    description: "Ideal for beginners starting their fitness journey.",
    icon: <FaRunning className="text-[#e69202] text-4xl md:text-6xl mb-4" />,
    features: ["Access to gym", "Basic equipment", "1 free trainer session"]
  },
  {
    id: 2,
    name: "Pro Plan",
    price: "$49/mo",
    description: "For fitness enthusiasts who want more features.",
    icon: <FaDumbbell className="text-[#e69202] text-4xl md:text-6xl mb-4" />,
    features: ["All Basic features", "Unlimited trainer sessions", "Group classes", "Nutrition plan"]
  },
  {
    id: 3,
    name: "Ultimate Plan",
    price: "$79/mo",
    description: "All features included for peak performance.",
    icon: <FaBiking className="text-[#e69202] text-4xl md:text-6xl mb-4" />,
    features: ["All Pro features", "24/7 access", "Personal trainer", "Premium facilities", "Massage therapy"]
  },
];

const Page = () => {
  const [activePlan, setActivePlan] = useState(2);

  return (
    <div
      id="plan"
      className="min-h-screen bg-black relative flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:py-20 lg:px-8"
      style={{
        backgroundImage: "url('/Images/gym-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Heading */}
      <div className="relative w-full max-w-6xl text-center mb-8 sm:mb-12 lg:mb-16 z-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Subscribe to Our Plan
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Choose the perfect plan for your fitness journey
        </p>
      </div>

      {/* Plans Container */}
      <div className="relative w-full max-w-6xl z-10">
        {/* Mobile - Vertical Layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {plans.map((plan) => {
            const isActive = plan.id === activePlan;
            return (
              <div
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`cursor-pointer transition-all duration-300 ease-in-out
                  flex flex-col items-center text-center p-6 rounded-xl
                  bg-black/70 backdrop-blur-md border-2
                  ${isActive ? "border-[#e69202] shadow-lg shadow-[#e69202]/30" : "border-white/20"}
                `}
              >
                {/* Icon */}
                {plan.icon}

                {/* Plan Name */}
                <h2 className="text-white font-bold text-xl mb-2">{plan.name}</h2>

                {/* Price */}
                <p className="text-[#e69202] font-bold text-2xl mb-3">{plan.price}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{plan.description}</p>

                {/* Features */}
                <ul className="text-gray-300 text-sm mb-6 space-y-2 w-full">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <span className="text-[#e69202] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                <button className="w-full max-w-xs px-6 py-3 rounded-full bg-[#e69202] text-black font-bold hover:bg-[#ffaa33] transition duration-300 transform hover:scale-105 active:scale-95">
                  Subscribe Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Desktop - Horizontal Layout */}
        <div className="hidden md:flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          {plans.map((plan) => {
            const isActive = plan.id === activePlan;
            return (
              <div
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`cursor-pointer transition-all duration-500 ease-in-out
                  flex flex-col items-center text-center p-6 rounded-xl
                  bg-black/70 backdrop-blur-md border-2 min-h-[500px]
                  hover:border-[#e69202] hover:shadow-lg hover:shadow-[#e69202]/20
                  ${
                    isActive
                      ? "lg:flex-1 scale-105 border-[#e69202] shadow-2xl shadow-[#e69202]/40 z-10"
                      : "lg:flex-[0.8] scale-95 opacity-80 border-white/20"
                  }
                `}
              >
                {/* Icon */}
                {plan.icon}

                {/* Plan Name */}
                <h2 className="text-white font-bold text-2xl mb-3">{plan.name}</h2>

                {/* Price */}
                <p className="text-[#e69202] font-bold text-3xl mb-4">{plan.price}</p>

                {/* Description */}
                <p className="text-gray-300 text-base mb-6 leading-relaxed">{plan.description}</p>

                {/* Features */}
                <ul className="text-gray-300 text-sm mb-8 space-y-3 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <span className="text-[#e69202] mr-2 text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                <button className="px-8 py-3 rounded-full bg-[#e69202] text-black font-bold hover:bg-[#ffaa33] transition duration-300 transform hover:scale-105 w-full max-w-xs">
                  Subscribe Now
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Info */}
      <div className="relative mt-8 sm:mt-12 lg:mt-16 text-center z-10">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">
            Why Choose Our Plans?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-gray-300">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#e69202] rounded-full flex items-center justify-center mb-3">
                <span className="text-black font-bold">✓</span>
              </div>
              <p className="font-semibold">Flexible Membership</p>
              <p className="text-sm mt-1">Cancel anytime</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#e69202] rounded-full flex items-center justify-center mb-3">
                <span className="text-black font-bold">✓</span>
              </div>
              <p className="font-semibold">Expert Trainers</p>
              <p className="text-sm mt-1">Certified professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#e69202] rounded-full flex items-center justify-center mb-3">
                <span className="text-black font-bold">✓</span>
              </div>
              <p className="font-semibold">24/7 Support</p>
              <p className="text-sm mt-1">We're here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;