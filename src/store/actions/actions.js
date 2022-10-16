import {GetAllGames, GetGameDetail, GetFavorites, DeleteFavorite, Search, ChangePage, AllGames, Filter} from '../slices/movies/movies'



const URL = "https://free-to-play-games-database.p.rapidapi.com/api/games";


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "e63fd13559msh1a49cb3d208b5fap1a98cfjsna9c76a16715e",
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};



export function getAllGames(){
    return function (dispatch) {
       return fetch(URL, options)
                    .then(response => response.json())
                    .then(json => dispatch(GetAllGames(json)))
                    
    }
}


export function getGameDetail(id){
    return function (dispatch) {
        return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        .then(response => response.json())
        .then(json => dispatch(GetGameDetail(json)), err => console.log(err))
        
    }
} 

export function getFavorites(game){
  return GetFavorites(game)
}

export function deleteFavorite(game){
  return DeleteFavorite(game)
}

export function SearchGame(title){
  return Search(title)
}

export function changePage(numero){
  return ChangePage(numero)
}

export function allGames(){
  return AllGames()
}

export function filter(genre){
  return Filter(genre)
}

