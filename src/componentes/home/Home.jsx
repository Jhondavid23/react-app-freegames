import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllGames } from '../../store/actions/actions'
import ShortCard from '../GameCard/ShortCard'
import './home.css'



function Home() {

    const dispatch = useDispatch();
    const { allGames } = useSelector(state => state.movieSlice)
    const newArray = [];
    //ComponentDidMount
    React.useEffect(() => {
        const fetchPost = function () {
            dispatch(getAllGames()) 
            window.scrollTo(0, 0)      
        }
        fetchPost()
        
    }, [dispatch])

    //Filter genre
    if (allGames !== undefined) {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }
        var i = 1;
        while (i <= 3) {
            let indexFilter = getRandomInt(0, allGames.length)
            newArray.push(allGames[indexFilter])
            i++
        }
    }


    return (
        <div className='container-home'>
            <header className='header'>
                <div className='text'>
                    <h1>Free Games</h1>
                    <p>Find your favorite game</p>
                    <div>
                        <NavLink to={"/games"}><button className='button'>Browse games</button></NavLink>
                    </div>
                </div>
            </header>
            <section className='section-recomended'>
                <h2>Top Games recomended for you</h2>
                <div className='container-recomended'>
                    {allGames[0] && newArray.map(game => <div key={game.id} >
                        <ShortCard game={game} gameId={game.id} />
                    </div>
                    )}
                </div>

            </section>
        </div>
    )
}

export default Home