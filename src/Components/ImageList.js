import React from 'react'
import ImageCard from './ImageCard'


const ImageList = ({images, setLink, setDescription, setOpen}) => {

    const renderImages = () => {
        return images.map(image=>{
            return <ImageCard 
                key={image.id} 
                image={image}
                setLink={setLink} 
                setDescription={setDescription} 
                setOpen={setOpen}
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