import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SearchGame, allGames, changePage } from '../../store/actions/actions'
import './NavStyle/Searchbar.css'


function SearchBar() {
  const [search, setSearch] = useState({ game: "" })
  const dispatch = useDispatch();
 

  // Despues de la primera busqueda, al tipear seteamos el estado inicial nuevamente, y al hacer el submir buscamos nuevamente en la lista completa de games 
  const handleChange = function (event) {
    setSearch({ game: event.target.value.toLowerCase() })
    dispatch(allGames())
  }
  const onSubmit = function (e) {
    e.preventDefault();
    dispatch(SearchGame(search.game))
    dispatch(changePage(1))
    setSearch({ game: "" })

  }
  return (
    <div className='container'>
      <form onSubmit={(e) => onSubmit(e)} className='form'>
        
        <div>
          <input type="text"
            value={search.game}
            onChange={(e) => handleChange(e)}
            autoComplete='off'
            className='input'
            placeholder='Search your game' />
        </div>

        <div>
          <button type='submit' className='btn'>Search</button>
        </div>


      </form>
      {/* <select name="" id="" onChange={(e)=> console.log(e.target.value)}>
        <option value="action">Action</option>
        <option value="shooter">Shooter</option>
        <option value="adventure">Adventure</option>
      </select> */}
      {/* <Filter/> */}
      

    </div>
  )
}

export default SearchBar