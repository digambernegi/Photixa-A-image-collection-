import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, colRef, timeStamp } from "../firebase/firebaseConfig";
import { addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);
    console.log(colRef);

    //get Progress
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        const progress = Math.round(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },

      // Handle successful uploads on complete
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("File available at", url);

        //creating new documnet object inside 'images' collection and storing FieldValues({url:url and createdAt:createdAt})
        const createdAt = timeStamp;
        await addDoc(colRef, { url, createdAt });

        setUrl(url);
      }
    );
  }, [file]);
  return { progress, error, url };
};

export default useStorage;
