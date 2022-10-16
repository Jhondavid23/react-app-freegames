import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGameDetail } from '../../store/actions/actions'
import './styles-gameCard/gameDetail.css'

function GameDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);


  // ComponentdidMount, it makes the call of the api 
  useEffect(() => {

    setLoading(true)
    dispatch(getGameDetail(params.id))
    setTimeout(() => setLoading(false), 1000)
    window.scrollTo(0, 0)

  }, [dispatch, params.id]);

  //Nos traemos la información de la store

  const { gamesDetails } = useSelector(state => state.movieSlice)

  // Si la llamada a la api se demora, porcedemos a mostrar un loading
  if (loading) {
    return (
      <div id="contenedor">
        <div class="loader" id="loader">Loading...</div>
      </div>
    )
  }


  if (gamesDetails.title) {
    return < div className='container-gameDetail'>
      <header className='main'>
        <h1 >{gamesDetails.title}</h1>
        <figure className='image'>
          <img src={gamesDetails.thumbnail} alt="gameImageDetails" />
        </figure>
      </header>


      <section className='container-info'>
        <div className='container-description'>

          <article className='description'>
            <h3>About {gamesDetails.title}</h3>
            <p>{gamesDetails.description}</p>
          </article>

          <article >
            <h1 className='description-data-title'>Aditional information</h1>
            <div className='description-data'>

              <div>
                <h4>Genre </h4>
                <p>{gamesDetails.genre}</p>
              </div>
              <div>
                <h4>Platform </h4>
                <p>{gamesDetails.platform}</p>
              </div>
              <div>
                <h4>Developer </h4>
                <p>{gamesDetails.developer}</p>
              </div>
              <div>
                <h4>Release date </h4>
                <p>{gamesDetails.release_date}</p>
              </div>
            </div>


          </article>

        </div>
        <h4 className='title-screenshot'>{gamesDetails.title} SCREENSHOTS</h4>
        <figure className='screenshots'>
          
          
            <img src={gamesDetails.screenshots[0].image} alt="screenshot1" />
            <img src={gamesDetails.screenshots[1].image} alt="screenshot2" />
            <img src={gamesDetails.screenshots[2].image} alt="screenshot3" />
          
        </figure>
      </section>


      {/* <div>
        <h4>Minium system requeriments</h4>
        <ul>
          <li>{gamesDetails.minimum_system_requirements.graphics}</li>
          <li>{gamesDetails.minimum_system_requirements.memory}</li>
          <li>{gamesDetails.minimum_system_requirements.os}</li>
          <li>{gamesDetails.minimum_system_requirements.processor}</li>
          <li>{gamesDetails.minimum_system_requirements.storage}</li>
        </ul>      </div> */}

      <div className='button-play'>
        <a href={gamesDetails.game_url} target="_blank" rel="noreferrer">Play the game</a>
      </div>

    </div>
  }


};

export default GameDetail