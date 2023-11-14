import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { movieReducer } from './slices/movieSlice'

const rootReducer = combineReducers({
  movieReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
