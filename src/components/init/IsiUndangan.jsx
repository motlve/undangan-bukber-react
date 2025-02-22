import React, { useEffect } from "react";
import About from "../About";
import SocialMedia from "../SocialMedia";
import Location from "../Location";
import Gallery from "../Gallery";
import Konfirmasi from "../Konfirmasi";
import Payment from "../Payment";

// Mengimpor gambar dari src/assets
import bgHero from "../../assets/bg/bgHero.jpg";

const IsiUndangan = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke atas saat komponen dimuat
  }, []);

  return (
    <div
      className="container mx-auto px-2 pt-20 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgHero})`, // Gunakan gambar yang diimpor
      }}
    >
      {/* Konten Undangan */}
      <About />
      <Location />
      <Gallery />
      <Konfirmasi />
      <Payment />
      <SocialMedia />
    </div>
  );
};

export default IsiUndangan;
