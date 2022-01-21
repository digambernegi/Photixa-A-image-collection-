import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { colRef } from "../firebase/firebaseConfig";

const useFirestore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = colRef;
    orderBy("timeStamp", "desc");
    onSnapshot(unsubscribe, (snapshot) => {
      let documents = [];
      snapshot.docs.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setData(documents);
    });
    return () => unsubscribe();
  }, [collection]);

  return { data }; // return array containing no of data images
};

export default useFirestore;
