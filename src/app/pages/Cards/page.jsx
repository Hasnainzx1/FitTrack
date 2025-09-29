import { FaDumbbell, FaAppleAlt, FaUsers } from "react-icons/fa";

const page = () => {
  return (
    <section className="w-screen bg-black py-20 px-6" id="featured">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex items-start bg-white/5 backdrop-blur-md rounded-xl p-6 space-x-4 shadow-md hover:scale-105 transition duration-300">
          <FaDumbbell className="text-yellow-400 text-4xl" />
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Workout Tracking</h3>
            <p className="text-gray-300 text-sm">
              Keep track of your daily workouts and monitor progress easily.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start bg-white/5 backdrop-blur-md rounded-xl p-6 space-x-4 shadow-md hover:scale-105 transition duration-300">
          <FaAppleAlt className="text-green-400 text-4xl" />
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Diet Plans</h3>
            <p className="text-gray-300 text-sm">
              Manage your diet and calories with personalized plans.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start bg-white/5 backdrop-blur-md rounded-xl p-6 space-x-4 shadow-md hover:scale-105 transition duration-300">
          <FaUsers className="text-blue-400 text-4xl" />
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Memberships</h3>
            <p className="text-gray-300 text-sm">
              Track your memberships and connect with the fitness community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
