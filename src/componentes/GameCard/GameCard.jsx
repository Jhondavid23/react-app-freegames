import React from 'react'
import { useDispatch } from 'react-redux'
import { getFavorites} from '../../store/actions/actions'
import { NavLink } from 'react-router-dom'
import './styles-gameCard/gameCard.css'
import swal from 'sweetalert';
import { deleteFavorite } from '../../store/actions/actions'

function GameCard({ game, gameId, gamePagina, favoritePagina }) {
  const dispatch = useDispatch()

  const onClick = ()=>{
    dispatch(getFavorites(game))
    swal("Good job!", "You added a new favorite", "success");

  }

  const onClickDelete = ()=>{
    dispatch(deleteFavorite(game.id))
    swal("Oh!", "You deleted a favorite", "warning");
  }

  return (
    <section>
      <div className='cards-container'>
        <div className='product-card'>
          <header className='first-container' >
            <figure className='container-img' >
            <NavLink to={`/games/${gameId}`}><img src={game.thumbnail} alt="game_image" className='image' /></NavLink>
            </figure>
            <div className='container-title-button'>
              <div className='container-title'>
                <NavLink to={`/games/${gameId}`} key={gameId} className='title'>{game.title}</NavLink>
              </div>
            </div>
            {gamePagina && <button onClick={onClick} className='button'>Favorite</button>}
            {favoritePagina && <button onClick={onClickDelete} className='button'>Delete</button> }
          </header>

          <section className='container-text'>
            <p>Short description</p>
            <p className='description'>{game.short_description}</p>
            <p className='genre'>Genre: {game.genre}</p>
            <div className='playnow'>
              <a href={game.game_url} className='link-play'>Play now</a>
            </div>
          </section>
        </div>
      </div>

    </section>
  )
}


export default GameCard