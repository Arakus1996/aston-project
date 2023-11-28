import { MovieCards } from '../../entities/MovieCards/MovieCards'
import { useAppSelector } from '../../store/hooks'

export const Favorites = () => {
  const favoriteMovies = useAppSelector(
    store => store.favoritesReducer.favorites
  )

  return <MovieCards moviesData={favoriteMovies} head={'Избранное'} />
}
