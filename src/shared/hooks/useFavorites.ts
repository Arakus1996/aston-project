import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  addFavoriteItem,
  removeFavoriteItem,
} from '../../store/middleware/thunk/favoritesThunk'

export const useFavorite = (id: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const isFavorite = useAppSelector(store =>
    store.favoritesReducer.favorites.some(item => item.imdbID === id)
  )

  const toggleIsFavorite = async () => {
    setIsLoading(true)
    if (isFavorite) {
      await dispatch(removeFavoriteItem(id))
    } else {
      await dispatch(addFavoriteItem(id))
    }
    setIsLoading(false)
  }
  return { isFavorite, toggleIsFavorite, isLoading }
}
