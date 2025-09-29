"use client";

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage (or send to backend later)
    const contactData = { name, email, message, date: new Date() };
    localStorage.setItem("contactForm", JSON.stringify(contactData));
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="relative w-screen min-h-screen bg-black flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* Background floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-[#e69202] rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-[#ffaa33] rounded-full opacity-60 animate-ping"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.02),transparent)]"></div>
      </div>

      {/* Main Form Container */}
      <div className="relative w-full max-w-2xl bg-black/40 backdrop-blur-xl rounded-3xl p-10 flex flex-col gap-6 text-white shadow-2xl border border-white/20">

        {/* Back Button */}
        {/* <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#e69202] hover:text-[#ffaa33] font-semibold mb-2"
        >
          <FaArrowLeft /> Back
        </button> */}

        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#e69202] to-[#ffaa33] mb-6 drop-shadow-lg">
          Contact Now
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e69202] transition duration-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e69202] transition duration-300"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full p-4 rounded-xl bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e69202] transition duration-300"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-2 px-8 py-4 bg-gradient-to-r from-[#e69202] to-[#ffaa33] text-black font-bold rounded-full hover:from-[#ffaa33] hover:to-[#e69202] transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="text-[#e69202] font-semibold text-center mt-4 animate-pulse">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </div>
  );
};

export default page;
