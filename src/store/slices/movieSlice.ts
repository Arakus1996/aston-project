import { createSlice } from '@reduxjs/toolkit'

import { getMovies } from '../../shared/api/moviesApi'

interface Movie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

interface State {
  movies: Movie[]
  status: string
}

const initialState: State = {
  movies: [],
  status: '',
}

const movieSlice = createSlice({
  name: 'MOVIES_ACTION',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMovies.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.status = 'resolved'
      state.movies = action.payload.Search
    })
  },
})
export const movieReducer = movieSlice.reducer
