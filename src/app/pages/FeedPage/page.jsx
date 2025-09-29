"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Fitness Enthusiast",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=200&h=200",
    text: "Joining this gym has transformed my life! The trainers are amazing and the community is so motivating.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Athlete",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
    text: "I’ve achieved results I never thought possible. The personalized programs really make a difference.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Beginner",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=200&h=200",
    text: "The environment is motivating and the support from trainers keeps me going. Highly recommend!",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Professional Trainer",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/009/856/694/small_2x/portrait-of-a-young-beautiful-girl-in-a-black-hat-on-a-winter-day-at-sunset-photo.jpg",
    text: "I love being part of this community. Everything from the equipment to the trainers is top-notch.",
  },
];

const page = () => {
  return (
    <div id="testimonial" className="w-screen min-h-screen bg-black flex flex-col items-center px-6 py-20">
      {/* Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-12 text-center drop-shadow-lg">
        What Our Members Say
      </h1>

      {/* Testimonial Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col items-center text-center bg-black/30 backdrop-blur-md rounded-xl p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(230,146,2,0.6)]"
          >
            {/* Member Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-[#e69202]"
            />

            {/* Name */}
            <h2 className="text-white font-bold text-xl">{t.name}</h2>
            <p className="text-[#e69202] mb-2">{t.role}</p>

            {/* Testimonial Text */}
            <p className="text-gray-300 leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
