import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const Home = ({ setSelectedImage }) => {
  const { data } = useFirestore("images");

  return (
    <div className="home">
      {data &&
        data.map((image) => (
          <motion.div
            key={image.id}
            className="collection"
            onClick={() => setSelectedImage(image.url)}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              drag
              dragDirectionLock
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ scale: 0.8, cursor: "grabbing" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              src={image.url}
              alt="img"
            />
          </motion.div>
        ))}
    </div>
  );
};

export default Home;
