import React, { useRef, useState } from 'react'

const ImageCard = ({image}) => {

    const imgRef = useRef("")
    const [spans, setSpans] = useState(null)
    const [opacity, setOpacity] = useState(0)

   const setHeight = () => {
        const imageHeight = imgRef.current.clientHeight
        const space = Math.ceil(imageHeight / 10)
        setSpans(space)
        setOpacity(1)
   }

    return (
        <img 
            onLoad = {()=>{setHeight()}}
            style = { {gridRowEnd:`span ${spans}`, opacity: opacity}}
            className="ImageCard"
            ref={imgRef}
            src={image.urls.regular}
            alt={image.description}
        />
    )
}

export default ImageCard

