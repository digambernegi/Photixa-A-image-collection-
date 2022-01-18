import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";

const useFirestore = (collection) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let imageCollection = [];
        snap.forEach((img) => {
          imageCollection.push({ ...img.data(), id: img.id });
          
        });
        setData(imageCollection);
      });
    return () => unsub();
  }, [collection]);
  return { data };
};

export default useFirestore;
