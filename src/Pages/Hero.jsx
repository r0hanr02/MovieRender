import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="/Vdo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-red-500">Movie</span>{" "}
          <span className="text-blue-500">Render</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-200 mt-6 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Your AI-powered gateway to{" "}
          <span className="font-semibold text-amber-400">
            personalized movie recommendations
          </span>
          . Discover films that match your{" "}
          <span className="font-semibold text-emerald-400">mood</span>,
          <span className="font-semibold text-indigo-400"> genre</span>, and{" "}
          <span className="font-semibold text-pink-400">language</span>.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => navigate("/render")}
            className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-lg px-8 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
          >
            🎬 Let’s Start
          </Button>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
