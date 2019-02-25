import React, {useState} from 'react'
import ImageCard from './ImageCard'

const ImageList = ({images}) => {

    const renderImages = () => {
        return images.map(image=>{
            return <ImageCard 
                key={image.id} 
                image={image}
            />
        })
    }


    return (
        <div className="ImageList">
            {renderImages()}
        </div>
    )
}

export default ImageList