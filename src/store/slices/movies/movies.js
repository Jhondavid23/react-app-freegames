import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    games: [],
    allGames :[],
    favorites: [],
    gamesDetails: {}, 
    currentPage : 1
}


export const movieSlice = createSlice({
    name: 'games',
    initialState,
    // in this section we place the reducers, that reducers recives the store and the actions
    reducers: { 
        GetAllGames: (state, action)=>{
            state.games = action.payload
            state.allGames = action.payload
        },
        AllGames:(state, action)=>{
            state.games = state.allGames
        },
        GetGameDetail : (state, action)=> {
            state.gamesDetails = action.payload
        },
        GetFavorites : (state, action)=>{
            state.favorites = state.favorites.concat(action.payload)
        },
        DeleteFavorite: (state, action)=>{
            state.favorites = state.favorites.filter(game => game.id !== action.payload)
        },
        Search: (state, action)=>{
            state.games = state.games.filter(game=> game.title.toLowerCase().includes(action.payload))
        },
        ChangePage: (state, action)=>{
            state.currentPage = action.payload	
        },
        Filter: (state, action)=>{
            state.games = state.games.filter(game => game.genre === action.payload)
        },
        
    }
})





export const { GetAllGames, GetGameDetail, GetFavorites, DeleteFavorite, Search, ChangePage, AllGames, Filter} = movieSlice.actions;

export default movieSlice.reducer