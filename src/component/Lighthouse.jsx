import React from "react";
import { motion } from "framer-motion";

const Lighhouse = ({ selectedImage, setSelectedImage }) => {
  return (
    <motion.div
      className="lighthouse"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setSelectedImage("")}
    >
      <img src={selectedImage} alt="img" />
    </motion.div>
  );
};

export default Lighhouse;
