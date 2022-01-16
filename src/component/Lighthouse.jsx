import React from 'react'

const Lighhouse = ({selectedImage,setSelectedImage}) => {
    return (
        <div className='lighthouse'
        onClick={() => setSelectedImage('')}>
         <img src={selectedImage} alt="img" />   
        </div>
    )
}

export default Lighhouse
