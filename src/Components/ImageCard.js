import React, { useRef, useState } from 'react'





const ImageCard = ({image, setView, setLink, setDescription, setOpen}) => {

    const imgRef = useRef("")
    const [spans, setSpans] = useState(null)
    const [opacity, setOpacity] = useState(0)
    

   const setHeight = () => {
        const imageHeight = imgRef.current.clientHeight
        const space = Math.ceil(imageHeight / 10)
        setSpans(space)
        setOpacity(1)
   }

   const openImage = () => {
    setLink(image.urls.full)
    setDescription(image.description)
    setOpen(true)
    window.scrollTo(0, 0)
   }

    return (
        <img 
            onLoad = {()=>{setHeight()}}
            onClick = {()=>{openImage()}}
            style = { {gridRowEnd:`span ${spans}`, opacity: opacity}}
            className="ImageCard"
            ref={imgRef}
            src={image.urls.small}
            alt={image.description}
        />
    )
}

export default ImageCard

