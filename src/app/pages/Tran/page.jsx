"use client";

import React from "react";

const trainers = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://images.squarespace-cdn.com/content/v1/603a73e7e541b709395810f2/1708102771889-JWMA9KDZCVR0IK73FULA/image-asset.jpeg",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://media.istockphoto.com/id/2027278927/photo/young-athletic-woman-exercising-with-barbell-during-sports-training-in-a-gym.jpg?s=612x612&w=0&k=20&c=ifFL7Mqc8NwTj25PAx4ONy1OOQZvc1S_kVOofsbLgFw=",
  },
  {
    id: 3,
    name: "Mike Johnson",
    image:
      "https://t4.ftcdn.net/jpg/00/96/37/35/360_F_96373592_TRI8RJPhiIZTfwujOyRSdkS6RLhKqKSA.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    image:
      "https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205542.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

const page = () => {
  return (
    <div
    id="leaders"
      className="w-screen h-screen relative flex flex-col items-center justify-start px-6 pt-20"
      style={{
        backgroundImage: "url('/Images/Tranbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 backdrop-blur-sm"></div>

      {/* Heading */}
      <h1 className="relative text-white text-5xl md:text-6xl font-bold mb-12 z-10 text-center drop-shadow-lg">
        Meet Our Trainers
      </h1>

      {/* Trainers Grid */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(230,146,2,0.7)]"
          >
            {/* Trainer Image */}
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Name */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-2xl font-bold text-center">
                {trainer.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
