import { useState, useEffect } from "react";
import { onSnapshot, orderBy } from "firebase/firestore";
import { colRef } from "../firebase/firebaseConfig";

const useFirestore = (collection) => {
  const [data, setData] = useState([]);

  //supervise documents in collection for changes and keep in sync
  useEffect(() => {
    const unsubscribe = colRef;
    orderBy("createdAt", "desc");
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
