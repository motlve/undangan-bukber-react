import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgHero from "../assets/bg/bgHero.jpg";

const borderVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Lokasi = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showText, setShowText] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="lokasi"
      ref={ref}
      className="relative flex flex-col items-center justify-center gap-6 min-h-[50vh] w-full text-white p-6 lg:p-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 text-4xl font-extrabold text-white relative inline-flex items-center gap-4 px-6 py-3 border-4 border-gray-500 bg-pink-700 rounded-lg shadow-lg"
      >
        <div className="relative flex items-center justify-center">
          <FaMapMarkerAlt className="text-2xl text-yellow-400 drop-shadow-lg" />
          <motion.div
            variants={borderVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 rounded-full border-4 border-gray-500"
          ></motion.div>
        </div>
        <span className="drop-shadow-lg">Lokasi Acara</span>
      </motion.h2>

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
        className="relative w-full max-w-3xl h-80 md:h-96 rounded-lg overflow-hidden shadow-lg border-4 border-pink-500 hover:border-pink-700 transition-all duration-300"
      >
        <motion.div className="absolute inset-0 rounded-lg border-4 border-pink-500 animate-pulse"></motion.div>

        <iframe
          title="Lokasi Acara"
          className="w-full h-full border-0 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9934581797943!2d106.843739!3d-6.2645895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f315043f04b7%3A0x811e5af841ba018e!2sTADOR%20Coffee!5e0!3m2!1sen!2sid!4v1739535866111!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {showText && (
          <motion.div
            className="absolute px-3 py-1 bg-yellow-400 text-black font-bold rounded-lg shadow-lg"
            style={{
              left: cursorPos.x - 50,
              top: cursorPos.y - 40,
              pointerEvents: "none",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            📍 Tador Coffee
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="mt-6"
      >
        <a
          href="https://maps.app.goo.gl/5NhYB8vJ9ojBvttc6"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-300 shadow-lg"
        >
          📌 Buka di Google Maps
        </a>
      </motion.div>
    </section>
  );
};

export default Lokasi;
