import React from 'react'


const ImageView = ({link, description, setOpen}) => {
    return(
        <div 
        onClick = {()=>{setOpen(false)}}
        className="ImageView">
            <img 
                onClick = {()=>{setOpen(false)}}
                className="ImageView_image"
                src={link}
                alt={description}
            />
        </div>
    )
}

export default ImageView