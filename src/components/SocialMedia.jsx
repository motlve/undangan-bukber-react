import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import bgHero from "../assets/bg/bgHero.jpg";

const iconVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const SocialMedia = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-6 min-h-[50vh] w-full text-white p-6 lg:p-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
      id="social-media"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-16 text-xl font-extrabold text-white relative inline-block px-4 py-2 border-2 border-gray-500 bg-pink-700 rounded-lg shadow-lg"
      >
        Follow Us On{" "}
        <span className="text-yellow-400 drop-shadow-lg font-extrabold">
          Instagram
        </span>
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center"
      >
        <motion.a
          href="https://www.instagram.com/real.trashexxe?igsh=eDF2eDhhbTdxamY1"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="relative p-4 rounded-full bg-black border-2 border-pink-500 shadow-lg hover:shadow-pink-400 transition-all duration-300"
        >
          <FaInstagram className="text-5xl text-pink-500 drop-shadow-md" />
          <div className="absolute inset-0 rounded-full border-2 border-pink-500 animate-pulse"></div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default SocialMedia;
