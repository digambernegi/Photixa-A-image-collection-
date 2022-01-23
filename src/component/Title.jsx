import React from "react";
import { motion } from "framer-motion";


//header
const Title = () => {
  return (
    <div className="title">
      <motion.h1 initial={{ y: "-80px" }} animate={{ y: 0 }}>
        PHOTiXA
      </motion.h1>

      <motion.h2
        initial={{ opacity: "0" }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        YOUR MOMENTS
      </motion.h2>

      <motion.p
        initial={{ opacity: "0" }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Give Your Moments a Space to Live
      </motion.p>
    </div>
  );
};

export default Title;
