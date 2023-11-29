import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { userReducer } from './slices/userSlice'
import { favoritesReducer } from './slices/favoritesSlice'
import { historyReducer } from './slices/historySlice'
import { searchReducer } from './slices/searchSlice'
import { moviesApi } from './rtkquery/moviesApi'
import { loggerMiddleware } from './middleware/logger'

const rootReducer = combineReducers({
  userReducer,
  favoritesReducer,
  searchReducer,
  historyReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(loggerMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
