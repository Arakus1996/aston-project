import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { userReducer } from './slices/userSlice'
import { favoritesReducer } from './slices/favoritesSlice'
import { moviesApi } from './moviesApi'

const rootReducer = combineReducers({
  userReducer,
  favoritesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
