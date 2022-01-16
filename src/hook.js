import {useState,useEffect} from 'react'
import {storage,db,timeStamp} from './firebase'


const useStorage=(file)=>{
    const[progress,setProgress]=useState(0);
    const[error,setError]=useState(null);
    const[url,setUrl]=useState(null);


    useEffect(() =>{
       const storageRef= storage.ref(file.name);
        const collectionRef=db.collection('images');
       //uploading file to db + on event listener state change
       storageRef.put(file).on('state_changed',(snap) =>{
           let per=(snap.bytesTransferred / snap.totalBytes)*100;
           setProgress(per);

       },(error) =>{
           setError(error.message)
       }, async () =>{
        const url=await storageRef.getDownloadURL();
        const createdAt=timeStamp();
        collectionRef.add({url,createdAt})
        setUrl(url);
       }) 

    },[file])

    return{progress,error,url}
}

export default useStorage;