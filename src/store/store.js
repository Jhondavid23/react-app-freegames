import {configureStore} from '@reduxjs/toolkit';
import movieSlice from './slices/movies/movies'

// In this step we create a redux store and automatically redux-toolkit configure Redux DevTools extension, so that we can inspect the store while develeoping
export const store = configureStore({
    reducer: {
      movieSlice,
    },
})