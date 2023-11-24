import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  addFavoriteItem,
  removeFavoriteItem,
} from '../../store/middleware/thunk/favoritesThunk'

import type { ShortDescriptionMovie } from '../types/sharedType'

export const useFavorite = (data: ShortDescriptionMovie) => {
  const dispatch = useAppDispatch()
  const isFavorite = !!useAppSelector(store =>
    store.favoritesReducer.favorites.find(item => item.imdbID === data.imdbID)
  )
  const toggleIsFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteItem(data.imdbID))
    } else {
      dispatch(addFavoriteItem(data.imdbID))
    }
  }
  return { isFavorite, toggleIsFavorite }
}
