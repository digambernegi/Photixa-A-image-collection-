import React, { useEffect } from "react";
import useStorage from "../hooks/hook";
import { motion } from "framer-motion";

const Progress = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progressbar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default Progress;
