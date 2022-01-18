import React, { useState } from "react";
import ProgressBar from "./Progress";
import { motion } from "framer-motion";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  //onImageChange function which will update the image state every time the user supplied a new file to the input field.
  const handleUpload = (e) => {
    let files = e.target.files[0];
    if (files && types.includes(files.type)) {
      setFile(files);
      setError("");
    } else {
      setFile(null);
      setError("Invalid file type");
    }
    console.log(file);
  };

 
  return (
    <form>
      <label>
        <input type="file" onChange={handleUpload} 
        /* accept="image/x-png,image/jpeg" *//>
        <motion.svg
        
           style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            color: "grey",
          }}

          initial={{ opacity: "0", y:'80px' }}
          animate={{ opacity: 1, y:'0px' }}
          transition={{ delay: 2 }}

          xmlns="http://www.w3.org/2000/svg"
          className="svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        
>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </motion.svg>
      </label>
      <div className="msg">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;
