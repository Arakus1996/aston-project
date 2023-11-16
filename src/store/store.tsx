import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { movieReducer } from './slices/movieSlice'
import { userReducer } from './slices/userSlice'

const rootReducer = combineReducers({
  movieReducer,
  userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
