import { createSlice } from '@reduxjs/toolkit'

import { ShortDescriptionMovie } from '../../shared/types/sharedType'
import {
  addFavoriteItem,
  getFavorites,
  removeFavoriteItem,
} from '../middleware/thunk/favoritesThunk'

type State = {
  favoriteMovies: ShortDescriptionMovie[]
}

const initialState: State = {
  favoriteMovies: [],
}

export const favoritesSlice = createSlice({
  name: 'FAVORITES',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addFavoriteItem.fulfilled, (state, action) => {
        state.favoriteMovies.push(action.payload)
      })
      .addCase(removeFavoriteItem.fulfilled, (state, action) => {
        state.favoriteMovies = state.favoriteMovies.filter(
          ({ imdbID }) => imdbID !== action.payload
        )
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.favoriteMovies = action.payload
      })
  },
})

export const favoritesReducer = favoritesSlice.reducer
