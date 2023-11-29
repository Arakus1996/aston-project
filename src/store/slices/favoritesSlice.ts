import { createSlice } from '@reduxjs/toolkit'

import {
  addFavoriteItem,
  getFavorites,
  removeFavoriteItem,
} from '../middleware/thunk/favoritesThunk'

import type { ShortDescriptionMovie } from './../../shared/types/sharedType'

type State = {
  favorites: ShortDescriptionMovie[]
  isLoading: boolean
}

const initialState: State = {
  favorites: [],
  isLoading: false,
}

export const favoritesSlice = createSlice({
  name: 'FAVORITES',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload
      })

      .addCase(addFavoriteItem.fulfilled, (state, action) => {
        state.favorites.push(action.payload)
        state.isLoading = false
      })
      .addCase(addFavoriteItem.pending, state => {
        state.isLoading = true
      })

      .addCase(removeFavoriteItem.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          ({ imdbID }) => imdbID !== action.payload
        )
        state.isLoading = false
      })
      .addCase(removeFavoriteItem.pending, state => {
        state.isLoading = true
      })
  },
})

export const favoritesReducer = favoritesSlice.reducer
