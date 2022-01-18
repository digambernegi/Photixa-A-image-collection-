import { useState, useEffect } from "react";
import { storage, db, timeStamp } from "../firebase/firebaseConfig";
import {collection,getDocs} from 'firebase/firestore';

 const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  
 /*  const mydbRef = collection(db,'images')
  useEffect(() =>{
    const getdata=async () =>{
      const data=await getDocs(mydbRef);
      console.log(data)
    }
  },[file])
}  */
  useEffect(() => {
    const storageRef = storage.ref(file.name);

    //crate db with 'image' name 
    const collectionRef = db.collection("images");
  
    //on eventlistener to get uploading % else return error
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let per = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        setProgress(per);
      },
      (error) => {
        setError(error.message);
      },

      // async fn to get image URL and store it in state + adding 2 attribute to images db collection with (url and createdAt)
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
