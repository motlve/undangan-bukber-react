import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/TempButton";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/bg/bglogo2.jpg";

// Defining the pages for each section
const KurengWarashPage = () => (
  <motion.div
    className="page-content"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl text-yellow-400">
      KURENG WARASH: KUMPUL BARENG WARGA TRASH 2025
    </h3>
  </motion.div>
);

const BukanWacanaPage = () => (
  <motion.div
    className="page-content"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-lg text-yellow-400">
      Ini bukan wacana, ini bukan taktik yahudi, bukan juga janji manis
      pemerintah. Lo kita undang buat ikut bukber bareng TRASH nih!
    </p>
  </motion.div>
);

const PTPTPage = () => (
  <motion.div
    className="page-content"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-lg text-yellow-400">
      PTPT: 100.000/Pax <br />
      Benefit: <br />
      ✅ Konsumsi <br />
      ✅ Stiker <br />
      ✅ Karaoke Night <br />
      ✅ Jodoh (Opsional) <br />
      ✅ Kenangan dan kesenangan <br />✅ Hadiah menarik up to 2jt Rupiah!
    </p>
  </motion.div>
);

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activePage, setActivePage] = useState("kureng-warash");
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderPageContent = () => {
    switch (activePage) {
      case "kureng-warash":
        return <KurengWarashPage />;
      case "bukan-wacana":
        return <BukanWacanaPage />;
      case "ptpt":
        return <PTPTPage />;
      default:
        return <KurengWarashPage />;
    }
  };

  const handleNextPage = () => {
    switch (activePage) {
      case "kureng-warash":
        setActivePage("bukan-wacana");
        break;
      case "bukan-wacana":
        setActivePage("ptpt");
        break;
      case "ptpt":
        setActivePage("kureng-warash");
        break;
      default:
        setActivePage("kureng-warash");
    }
  };

  const handlePreviousPage = () => {
    switch (activePage) {
      case "kureng-warash":
        setActivePage("ptpt");
        break;
      case "bukan-wacana":
        setActivePage("kureng-warash");
        break;
      case "ptpt":
        setActivePage("bukan-wacana");
        break;
      default:
        setActivePage("kureng-warash");
    }
  };

  const isLastPage = activePage === "ptpt"; // Check if it's the last page

  return (
    <div
      ref={ref}
      className="border-b border-neutral-900 pb-16 relative text-center"
      id="tentang"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl font-extrabold text-white relative inline-block px-6 py-2 border-4 border-gray-500 bg-pink-700 rounded-lg shadow-lg"
      >
        KURENG WARASH:{" "}
        <span className="text-yellow-400 drop-shadow-lg font-extrabold">
          KUMPUL BARENG WARGA TRASH 2025
        </span>
      </motion.h2>

      <div className="flex flex-col items-center justify-center w-full">
        <AnimatePresence>
          <motion.div
            key="card-container"
            className="max-w-[400px] w-full bg-gray-800 bg-opacity-90 shadow-lg rounded-2xl p-4 relative"
          >
            {!expanded ? (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-center"
              >
                <motion.img
                  src={aboutImg}
                  alt="Buka Bersama"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.8 }
                  }
                  transition={{ duration: 1 }}
                  className="rounded-2xl w-64 h-auto cursor-pointer"
                  onClick={() => setExpanded(true)}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-4"
                >
                  <Button
                    className="bg-yellow-400 text-black"
                    onClick={() => setExpanded(true)}
                  >
                    YOKK GAS NGENGGG🔥
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                className="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
              >
                <motion.div
                  initial={{ x: 0, opacity: 1 }}
                  animate={
                    inView
                      ? { x: isMobile ? 0 : -50, opacity: 1 }
                      : { x: 0, opacity: 0 }
                  }
                  exit={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center relative"
                >
                  <img
                    className={`rounded-2xl w-${isMobile ? "56" : "72"} h-auto`}
                    src={aboutImg}
                    alt="Buka Bersama"
                  />
                  <button
                    className="absolute top-2 right-2 p-2 bg-white text-red-500 rounded-full text-xl"
                    onClick={() => setExpanded(false)}
                  >
                    ❌
                  </button>
                </motion.div>

                <motion.div
                  initial={{ x: isMobile ? 0 : 50, opacity: 0 }}
                  animate={
                    inView
                      ? { x: 0, opacity: 1 }
                      : { x: isMobile ? 0 : 50, opacity: 0 }
                  }
                  exit={{ x: isMobile ? 0 : -50, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-md text-center md:text-left text-white pb-20"
                >
                  <AnimatePresence>
                    <motion.div
                      key={activePage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {renderPageContent()}
                    </motion.div>
                  </AnimatePresence>
                  {/* Display next and previous buttons only if not on the last page */}
                  {!isLastPage && (
                    <div className="absolute bottom-6 left-0 right-0 flex justify-between px-4">
                      <Button
                        className="bg-white text-pink-500"
                        onClick={handlePreviousPage}
                      >
                        Previous
                      </Button>
                      <Button
                        className="bg-white text-pink-500"
                        onClick={handleNextPage}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;
