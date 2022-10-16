import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getFavorites } from '../../store/actions/actions'
import './styles-gameCard/shortCard.css'
import swal from 'sweetalert';

function ShortCard({game, gameId}) {

    const dispatch = useDispatch()

    const onClick = ()=>{
      dispatch(getFavorites(game))
      swal("Good job!", "You added a new favorite", "success");
    }
  return (
    <div>
        <header className='container-recomendation' >
            <figure className='container-img' >
            <NavLink to={`/games/${gameId}`}><img src={game.thumbnail} alt="game_image" className='image' /></NavLink>
            </figure>
            <div className='container-title-button'>
              <div className='container-title'>
                <NavLink to={`/games/${gameId}`} key={gameId} className='title'>{game.title}</NavLink>
              </div>
            </div>
            <button onClick={ onClick } className='button'>Favorite</button>
          </header>
    </div>
  )
}

export default ShortCard