import React from 'react'

import GameCard from './GameCard';
import './styles-gameCard/countainer.css'
import Filter from '../NavBar/Filter';


function CountainerCard({ game, loading, allGames, gamePagina, favoritePagina }) {



  if (loading) {
    return <div id="contenedor">
    <div class="loader" id="loader">Loading...</div>
</div>
  }
  return (
    <div className='container-contend' >
      {gamePagina && <div className='filter'>
        <Filter allGames={allGames} className='filter-filter'/>
      </div>}
      
      <div className='container-cards'>

        {game && game.map(game =>
          <div key={game.id}><GameCard game={game} gameId={game.id} gamePagina={gamePagina} favoritePagina={favoritePagina}/></div>)}

      </div>
    </div>

  )
}

export default CountainerCard