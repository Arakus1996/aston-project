import { useEffect } from 'react'

import { MovieCard } from '../../entities/MovieCards/MovieCard/MovieCard'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getFavorites } from '../../store/middleware/thunk/favoritesThunk'

export const Favorites = () => {
  const movies = useAppSelector(store => store.favoritesReducer.favoriteMovies)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

  return (
    <>
      <h2>Избранное</h2>
      <div className='container'>
        {movies &&
          movies.map(item => <MovieCard key={item.imdbID} movieData={item} />)}
      </div>
    </>
  )
}
