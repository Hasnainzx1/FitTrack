"use client";

import React from "react";

const instagramPics = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/2075354173/photo/fitness-couple-is-doing-kettlebell-twist-in-a-gym-togehter.jpg?s=612x612&w=0&k=20&c=lfs1V1d0YB33tn72myi6FElJnylPJYYM9lW5ZhlnYqY=",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/1a/a0/eb/1aa0eb5681d9250535cf12dd8124b67c.jpg",
  },
  {
    id: 3,
    image:
      "https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=faces&fit=crop&w=400&h=400",
  },
];

const page = () => {
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col items-center px-6 py-20 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e69202]/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#ffaa33]/15 rounded-full filter blur-2xl animate-pulse"></div>

      {/* Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-12 text-center drop-shadow-lg z-10">
        Follow Us on Instagram
      </h1>

      {/* Instagram Grid */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {instagramPics.map((pic) => (
          <div
            key={pic.id}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(230,146,2,0.6)]"
          >
            <img
              src={pic.image}
              alt={`Instagram ${pic.id}`}
              className="w-full h-64 md:h-72 object-cover transition-transform duration-500"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">View</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
