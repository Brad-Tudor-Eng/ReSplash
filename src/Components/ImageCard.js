import React, { useRef, useState } from 'react'

const ImageCard = ({image}) => {

    const imgRef = useRef("")
    const [spans, setSpans] = useState(null)

   const setHeight = () => {
        const imageHeight = imgRef.current.clientHeight
        const space = Math.ceil(imageHeight / 10)
        setSpans(space)
   }

    return (
        <img 
            onLoad = {()=>{setHeight()}}
            style = { {gridRowEnd:`span ${spans}`}}
            className="ImageCard"
            ref={imgRef}
            src={image.urls.regular}
            alt={image.description}
        />
    )
}

export default ImageCard

