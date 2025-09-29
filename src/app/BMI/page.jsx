"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Page = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateInputs = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!weight || weight <= 0) {
      newErrors.weight = "Please enter a valid weight.";
    }
    if (!feet || feet < 0 || feet > 9) {
      newErrors.feet = "Please enter a valid number of feet (0-9).";
    }
    if (inches === "" || inches < 0 || inches > 11) {
      newErrors.inches = "Please enter a valid number of inches (0-11).";
    }
    return newErrors;
  };

  useEffect(() => {
    const newErrors = validateInputs();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && weight && (feet || inches)) {
      const totalInches = (parseFloat(feet) * 12) + parseFloat(inches);
      const heightInCm = totalInches * 2.54;

      const heightInM = heightInCm / 100;
      const bmiValue = (weight / (heightInM * heightInM)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 24.9) setCategory("Normal weight");
      else if (bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");

      const bmiRecord = { name, weight, feet, inches, bmi: bmiValue, category };
      localStorage.setItem("bmiRecord", JSON.stringify(bmiRecord));
    } else {
      setBmi(null);
      setCategory("");
    }
  }, [name, weight, feet, inches]);

  return (
    <div className="relative w-screen min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-20">
      <style jsx global>{`
        /* Hide the arrows/spinners for number input fields */
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-[#e69202] rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-[#ffaa33] rounded-full opacity-60 animate-ping"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.02),transparent)]"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-2xl bg-black/40 backdrop-blur-xl rounded-3xl p-10 flex flex-col gap-6 text-white shadow-2xl border border-white/20">

        {/* Back to Home Page Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-[#e69202] hover:text-[#ffaa33] font-semibold mb-2"
        >
          <FaArrowLeft /> Back to Home Page
        </button>

        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#e69202] to-[#ffaa33] mb-6 drop-shadow-lg">
          BMI Calculator
        </h1>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e69202] transition duration-300"
        />
        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

        <input
          type="number"
          placeholder="Enter your Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-4 rounded-xl bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e69202] transition duration-300"
        />
        {errors.weight && <p className="text-red-400 text-sm">{errors.weight}</p>}

        {/* Height Input in Feet and Inches */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <input
              type="number"
              placeholder="Height (feet)"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              className="w-full p-4 rounded-xl bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e69202] transition duration-300"
            />
            {errors.feet && <p className="text-red-400 text-sm mt-2">{errors.feet}</p>}
          </div>
          <div className="w-1/2">
            <input
              type="number"
              placeholder="Height (inches)"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              className="w-full p-4 rounded-xl bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e69202] transition duration-300"
            />
            {errors.inches && <p className="text-red-400 text-sm mt-2">{errors.inches}</p>}
          </div>
        </div>

        {/* BMI Result */}
        {bmi && Object.keys(errors).length === 0 && (
          <div className="text-center mt-4 p-6 bg-black/30 rounded-2xl border border-white/10 shadow-inner">
            <p className="text-xl">
              <span className="font-semibold">{name}</span>, your BMI is{" "}
              <span className="text-[#e69202] font-bold">{bmi}</span>
            </p>
            <p className="text-gray-300 mt-2">Category: {category}</p>
          </div>
        )}

        {/* Clear Button */}
        <button
          onClick={() => {
            setName("");
            setWeight("");
            setFeet("");
            setInches("");
            setBmi(null);
            setCategory("");
            setErrors({});
            localStorage.removeItem("bmiRecord");
          }}
          className="mt-4 px-8 py-4 bg-gradient-to-r from-[#e69202] to-[#ffaa33] text-black font-bold rounded-full hover:from-[#ffaa33] hover:to-[#e69202] transition duration-300 shadow-lg"
        >
          Clear
        </button>

      </div>
    </div>
  );
};

export default Page;