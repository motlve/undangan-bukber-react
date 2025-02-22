import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg/bg.jpg";

function Beranda({ onStart }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Tombol diklik, navigasi ke /init");
    setIsClicked(true);
    onStart();
    navigate("/init");
  };

  return (
    <motion.div
      className="flex h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Transparent Section */}
      <motion.div
        className="flex-1 p-8 relative min-h-screen flex flex-col items-center justify-center bg-pink-200/50 backdrop-blur-sm"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-end mt-auto mb-16">
          <motion.button
            onClick={handleClick}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            aria-label="Buka Undangan"
            className="bg-white text-pink-600 font-semibold py-2 px-6 rounded shadow-lg hover:bg-pink-100 transition"
            whileHover={{ scale: 1.1 }}
          >
            Buka Undangan
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Beranda;
