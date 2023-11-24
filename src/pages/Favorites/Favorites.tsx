import { MovieCard } from '../../entities/MovieCards/MovieCard/MovieCard'
import { useAppSelector } from '../../store/hooks'

export const Favorites = () => {
  const favoriteMovies = useAppSelector(
    store => store.favoritesReducer.favorites
  )

  return (
    <>
      <h2>Избранное</h2>
      <div className='container'>
        {favoriteMovies &&
          favoriteMovies.map(item => (
            <MovieCard key={item.imdbID} movieData={item} />
          ))}
      </div>
    </>
  )
}
