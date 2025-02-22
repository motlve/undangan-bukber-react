import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Beranda from "./components/Beranda";
import IsiUndangan from "./components/init/IsiUndangan";
import bgHero from "./assets/bg/bgHero.jpg";

function App() {
  const handleStart = () => {
    console.log("Start button clicked!");
  };

  return (
    <Router>
      <div className="flex w-full h-screen overflow-hidden">
        {/* Left Section (Fixed & Non-Scrollable) */}
        <motion.div
          className="hidden md:flex md:w-[70%] fixed top-0 left-0 h-full flex-col items-center justify-center bg-pink-200/50 
             before:content-[''] before:absolute before:inset-0 before:bg-white/40 before:backdrop-blur-sm 
             before:z-0"
          style={{
            backgroundImage: `url(${bgHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative z-10 text-center p-6 max-w-[800px]">
            <motion.h1
              className="text-xl md:text-3xl lg:text-5xl font-extrabold text-yellow-400 
                 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] 
                 [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:white]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              You Are Invited!
            </motion.h1>

            <motion.p
              className="text-sm md:text-lg lg:text-xl text-gray-300 font-semibold mt-4 
                 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Kureng Warash 2025: Kumpul Bareng Warga Trash Dkk.
            </motion.p>

            <motion.h2
              className="text-lg md:text-2xl lg:text-4xl font-extrabold text-pink-400 mt-2 
                 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] 
                 [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Iftar Jama'i
            </motion.h2>
          </div>
        </motion.div>

        {/* Right Section (Scrollable & Fixed to the Right) */}
        <div className="w-full md:w-[30%] ml-auto relative h-screen bg-white overflow-y-auto">
          <Routes>
            <Route path="/" element={<Beranda onStart={handleStart} />} />
            <Route path="/init" element={<IsiUndangan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
