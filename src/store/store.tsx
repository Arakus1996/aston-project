import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { movieReducer } from './slices/movieSlice'
import { userReducer } from './slices/userSlice'
import { moviesApi } from './moviesApi'

const rootReducer = combineReducers({
  movieReducer,
  userReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
