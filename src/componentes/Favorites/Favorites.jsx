import React from 'react'
import { useSelector } from 'react-redux'
import { FaRegGrinWink } from 'react-icons/fa';
import './favorite.css'
import { useState } from 'react';
import CountainerCard from '../GameCard/CountainerCard';


function Favorites() {

  React.useEffect(() => {
    const fetchPost = function () {        
      setLoading(true)
      setTimeout(()=> setLoading(false),1000 )       
    }       
    fetchPost()
  }, [])

  const [loading, setLoading]= useState(false)
  const { favorites } = useSelector(state => state.movieSlice)
  const [favoritePagina] = useState(true)


  if (favorites[0] === undefined) {
    return (
      <div className='icon-container'>
        <div className='icon'>
          <FaRegGrinWink className='icon-icon' />
        </div>
        <div className='icon-text'>
          <h1>You don't have favorites yet</h1>
        </div>
      </div>)

  }
  return (
    <div className='favorite-contend'>
      {<CountainerCard game={favorites} favoritePagina = {favoritePagina} loading={loading} />}
    </div>

  )
}

export default Favorites