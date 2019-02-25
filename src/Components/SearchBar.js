import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {

    const [text, setText] = useState('')

    const onFormSubmit=(e)=>{
        e.preventDefault()
        onSubmit(text)
        setText("")
    }

    return (
        <form 
            onSubmit={(e)=>{onFormSubmit(e)}}
            className="SearchBar"
        >
            <div>
                <h1>ReSplash</h1>

                <p>Beautiful, free photos.</p>
                <p>Gifted by the world's most generous community of photographers.</p>
                
                <input 
                    className="SearchBar_input"
                    placeholder="Search free high-resolution photos"
                    type="text"
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                />
                <i class="fas fa-search"></i>
                <h6>This site is a clone of unsplash.com
                all images are brought to you though the unsplash api</h6>
            </div>
        </form>
    )
}

export default SearchBar