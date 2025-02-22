import { motion } from "framer-motion";
import bcaCard from "../assets/payment/bca_logo.png"; // Ganti dengan path gambar kartu BCA
import qrisImage from "../assets/payment/qris.jpg"; // Ganti dengan path gambar QRIS

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

const PaymentMethods = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-4 min-h-[30vh] w-full text-white p-4 lg:p-8 bg-cover bg-center"
      id="payment-methods"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-4 text-xl lg:text-2xl font-extrabold text-white inline-flex items-center gap-4 px-6 py-3 bg-pink-700 rounded-lg shadow-lg border-4 border-gray-500"
      >
        Metode{" "}
        <span className="text-yellow-400 drop-shadow-lg font-extrabold">
          Pembayaran
        </span>
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        {/* BCA Card */}
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="relative p-3 rounded-lg bg-white border-4 border-blue-500 shadow-lg hover:shadow-blue-400 transition-all duration-300 text-black w-[200px]"
        >
          <img
            src={bcaCard}
            alt="BCA Card"
            className="w-full h-auto rounded-md shadow-md"
          />
          <div className="mt-4 text-center">
            <p className="font-bold text-lg">BCA</p>
            <p className="text-md">No. Rek: 6871264241</p>
            <p className="text-sm text-gray-500">a.n. MARVIN</p>
          </div>
        </motion.div>

        {/* QRIS */}
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="relative p-3 rounded-lg bg-white border-4 border-green-500 shadow-lg hover:shadow-green-400 transition-all duration-300 w-[200px]"
        >
          <img
            src={qrisImage}
            alt="QRIS Payment"
            className="w-full h-auto rounded-md shadow-md"
          />
          <div className="mt-3 text-center">
            <p className="text-black text-lg font-bold">QRIS</p>
            <p className="text-sm text-gray-500">Scan untuk pembayaran</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentMethods;
