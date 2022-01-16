import React, { useState } from "react";
import ProgressBar from './Progress';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

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
      <input type="file" onChange={handleUpload} />
      <div className="msg">
    {error && <div className="error">{error}</div>}
    {file && <div className="file">{file.name}</div>}
    {file && <ProgressBar file={file} setFile={setFile}/>}
    </div>
    </form>
  );
};

export default Upload;
