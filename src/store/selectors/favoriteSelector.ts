import { RootState } from '../store'

export const favoritesSelect = (state: RootState) =>
  state.favoritesReducer.favorites
export const isLodingFavSelect = (state: RootState) =>
  state.favoritesReducer.isLoading
