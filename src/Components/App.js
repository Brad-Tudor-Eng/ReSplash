import React, { useState} from 'react';
import axios from '../api/unsplash'

import ImageList from './ImageList';
import SearchBar from './SearchBar';
import Spinner from './Spinner'

const App = () => {

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

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

  return (
    <div className="App">
      <SearchBar onSubmit={onSearchSubmit}/>
        {renderSpinner()}
      <ImageList images={images} loading={loading}/>
    </div>
  )
}

export default App;
