import React from "react";
import useFirestore from "../useFirestore";

const Home = ({setSelectedImage}) => {
  const { data } = useFirestore("images");
  console.log(data);
  return (
    <div className="home">
      {data &&
        data.map((image) => (
          <div key={image.id} 
          className="collection"
          onClick={() => setSelectedImage(image.url)}
          >
          <img src={image.url} alt="img" />
          </div>
        ))}
    </div>
  );
};

export default Home;
