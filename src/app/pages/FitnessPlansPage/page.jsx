"use client";
import {
  FaRunning,
  FaDumbbell,
  FaAppleAlt,
  FaWeight,
  FaHeartbeat,
  FaGlassWhiskey,
} from "react-icons/fa";

const plans = [
  {
    icon: <FaRunning className="text-yellow-400 text-5xl mb-4" />,
    title: "Cardio Training",
    desc: "Improve stamina and burn calories with professional cardio routines.",
    hover: "hover:shadow-yellow-500/40",
  },
  {
    icon: <FaDumbbell className="text-green-400 text-5xl mb-4" />,
    title: "Strength Training",
    desc: "Build muscles and enhance endurance with expert-designed workouts.",
    hover: "hover:shadow-green-500/40",
  },
  {
    icon: <FaAppleAlt className="text-red-400 text-5xl mb-4" />,
    title: "Healthy Nutrition",
    desc: "Get personalized diet plans to balance your fitness journey.",
    hover: "hover:shadow-blue-500/40",
  },
  {
    icon: <FaWeight className="text-pink-400 text-5xl mb-4" />,
    title: "Weight Loss",
    desc: "Follow step-by-step programs to lose fat effectively & safely.",
    hover: "hover:shadow-pink-500/40",
  },
  {
    icon: <FaHeartbeat className="text-purple-400 text-5xl mb-4" />,
    title: "Heart Health",
    desc: "Boost your cardiovascular health with guided fitness routines.",
    hover: "hover:shadow-purple-500/40",
  },
  {
    icon: <FaGlassWhiskey className="text-orange-400 text-5xl mb-4" />,
    title: "Hydration Plans",
    desc: "Learn the right hydration habits to maximize your fitness results.",
    hover: "hover:shadow-orange-500/40",
  },
];

const page = () => {
  return (
    <section className="w-screen min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Fitness Plans & Nutrition</h2>
        <p className="text-gray-400 text-lg">
          Achieve your goals with our customized fitness programs and diet plans
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white/5 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-lg ${plan.hover} transition duration-300 hover:scale-105`}
          >
            {plan.icon}
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-gray-300 text-sm text-center">{plan.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
