"use client";

import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-[#e69202]">FitnessPro</h1>
          <p className="text-gray-400">
            Transform your body, mind, and lifestyle with our expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <a href="#" className="text-gray-400 hover:text-[#e69202] transition duration-300">Home</a>
          <a href="#" className="text-gray-400 hover:text-[#e69202] transition duration-300">About Us</a>
          <a href="#" className="text-gray-400 hover:text-[#e69202] transition duration-300">Plans</a>
          <a href="#" className="text-gray-400 hover:text-[#e69202] transition duration-300">Trainers</a>
          <a href="#" className="text-gray-400 hover:text-[#e69202] transition duration-300">Contact</a>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#e69202] transition duration-300"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-[#e69202] transition duration-300"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-[#e69202] transition duration-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-[#e69202] transition duration-300"><FaYoutube size={24} /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400">123 Fitness Street</p>
          <p className="text-gray-400">City, Country</p>
          <p className="text-gray-400">+123 456 7890</p>
          <p className="text-gray-400">info@fitnesspro.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} FitnessPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
