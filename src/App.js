import React,{useState} from 'react'
import './App.css';
import Title from './component/Title'
import Upload from './component/Upload'
import Home from './component/Home'
import Lighthouse from './component/Lighthouse'




function App() {
const[selectedImage,setSelectedImage]=useState('');

  return (
    <div className="App">
     <Title/>
     <Upload/>
     <Home setSelectedImage={setSelectedImage}/>
     {selectedImage &&<Lighthouse selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
