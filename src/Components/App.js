import React, { useState, useEffect} from 'react';
import axios from '../api/unsplash'

import ImageList from './ImageList'
import ImageView from './ImageView'
import SearchBar from './SearchBar'
import Spinner from './Spinner'

const App = () => {

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    initalLoad()
  },[])

const initalLoad = async () => {
  const terms = ['city', 'sunset', 'stars', 'mountians', 'beach', 'nature']
  const index = Math.floor(Math.random()*5)
  onSearchSubmit(terms[index])
}


const onSearchSubmit= async (term)=>{
  setImages([])
  setLoading(true)
  const response = await axios.get('/search/photos',
    { 
      params: { 
        query: term,
        per_page: 30
      } 
  })
  setLoading(false)
  setImages(response.data.results)
}

const renderSpinner = () => {
  if(loading){
    return ( <Spinner/> )
  }
}

const renderImageView = () => {
  if(open){
    return <ImageView link={link} description={description} setOpen={setOpen}/>
  }
}

  return (
    <div className="App">
      <SearchBar onSubmit={onSearchSubmit}/>
        {renderImageView()}
        {renderSpinner()}
      <ImageList 
        images={images} 
        loading={loading} 
        setLink={setLink} 
        setDescription={setDescription} 
        setOpen={setOpen}/>
    </div>
  )
}

export default App;
