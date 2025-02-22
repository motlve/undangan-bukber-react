import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/galeri/galeriAsli1.jpg";
import img2 from "../assets/galeri/galeriAsli2.jpg";
import img3 from "../assets/galeri/galeriAsli3.jpg";
import img4 from "../assets/galeri/galeriAsli4.jpg";
import img5 from "../assets/galeri/galeriAsli5.jpg";
import img6 from "../assets/galeri/galeriAsli6.jpg";

const initialImages = [img1, img2, img3, img4, img5, img6];

function Gallery() {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 6 + images.length) % images.length
    );
  };

  // Fungsi untuk menambah gambar dari input file
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, newImageUrl]);
    }
  };

  return (
    <div className="text-center py-10 text-gray-200 font-[Amiri]">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 text-4xl font-extrabold text-white relative inline-flex items-center gap-4 px-6 py-3 border-4 border-gray-500 bg-pink-700 rounded-lg shadow-lg"
      >
        <span className="text-yellow-400">Galeri</span>{" "}
        <span className="text-white">Bukber</span>
      </motion.h2>

      {/* Input untuk menambahkan gambar */}
      <div className="mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer"
        />
      </div>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-pink-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden">
          {images.slice(currentIndex, currentIndex + 6).map((image, index) => (
            <motion.div key={index}>
              <motion.img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg cursor-pointer border-4 border-pink-400 shadow-lg hover:shadow-pink-200"
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedImage(image)}
              />
            </motion.div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-4 rounded-lg relative border-4 border-yellow-500 shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-700"
            >
              ❌
            </button>
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="w-96 rounded-lg border-4 border-yellow-500"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
