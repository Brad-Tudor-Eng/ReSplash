import React, { useState} from 'react';
import axios from '../api/unsplash'

import ImageList from './ImageList';
import SearchBar from './SearchBar';


const App = () => {

  const [images, setImages] = useState([])

const onSearchSubmit= async (term)=>{
  const response = await axios.get('/search/photos',
    { 
      params: { 
        query: term,
        per_page: 30
      } 
  })

  setImages(response.data.results)
}

  return (
    <div className="App">
      <SearchBar onSubmit={onSearchSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App;
