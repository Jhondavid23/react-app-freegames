
import React from 'react'
import { useDispatch } from 'react-redux'
import {changePage, filter as filterr} from '../../store/actions/actions'
import {allGames as AllGames} from '../../store/actions/actions'

const Filter = function ({allGames}) {
    
    //Here is all the logic for change the genre
    const dispatch = useDispatch();
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(e.target.value === "All"){
            dispatch(AllGames())
        }else{
            dispatch(AllGames())
            dispatch(filterr(e.target.value))
            dispatch(changePage(1))
        } 
    }
    
    //Here we filter the all the games of the list, in a list with no genre repetition
    let optionList = [];

    allGames.forEach(game => {
        if(!optionList.includes(game.genre)){
            optionList.push(game.genre)
        }
    });
    return (
        <div>
            {/* Another form to make a form list */}
            {/* <input list='filter' onChange={(e)=> console.log(e.target.value)}/>
        <datalist id="filter" >
            <option value="All"></option>
            {games && games.map(game => 
                <option value={game.genre}></option>
            )}
        </datalist> */}

            <select name="" id="" onChange={(e) => handlesubmit(e)}>
                <option value="All">All</option>
                {optionList && optionList.map(game =>
                    
                    <option value={game} key={game}>{game}</option>
                )}
            </select>
        </div>
    )
}

export default Filter