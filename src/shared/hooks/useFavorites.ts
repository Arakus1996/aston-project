import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  addFavoriteItem,
  removeFavoriteItem,
} from '../../store/middleware/thunk/favoritesThunk'

export const useFavorite = (id: string) => {
  const dispatch = useAppDispatch()
  const isFavorite = useAppSelector(store =>
    store.favoritesReducer.favorites.some(item => item.imdbID === id)
  )
  const toggleIsFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteItem(id))
    } else {
      dispatch(addFavoriteItem(id))
    }
  }
  return { isFavorite, toggleIsFavorite }
}
