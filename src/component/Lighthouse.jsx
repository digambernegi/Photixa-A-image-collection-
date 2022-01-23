import React from "react";
import { motion } from "framer-motion";


//dipicts overlay image
const Lighhouse = ({ selectedImage, setSelectedImage }) => {
  return (
    <motion.div
      className="lighthouse"
      initial={{ opacity: 0, y: "100px" }}
      animate={{ opacity: 1, y: "0px" }}
      onClick={() => setSelectedImage("")}
    >
      <img src={selectedImage} alt="img" />
    </motion.div>
  );
};

export default Lighhouse;
