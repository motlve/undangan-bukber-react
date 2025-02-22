import { motion } from "framer-motion";

const Button = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-pink-600 font-semibold py-2 px-6 
                 rounded shadow-lg hover:bg-pink-100 transition-all 
                 duration-300"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export { Button };
