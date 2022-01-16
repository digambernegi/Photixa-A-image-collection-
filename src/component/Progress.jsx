import React, { useEffect } from "react";
import useStorage from "../hook";

const Progress = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url,setFile]);

  return (
    <div className="progressbar" style={{ width: progress + "%" }}>
      uploading
    </div>
  );
};

export default Progress;
