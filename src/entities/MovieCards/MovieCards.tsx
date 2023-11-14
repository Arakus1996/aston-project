import { useAppSelector } from '../../store/hooks'

import { MovieCard } from './MovieCard/MovieCard'

import style from './MovieCards.module.css'

export const MovieCards = () => {
  const movies = useAppSelector(state => state.movieReducer.movies)
  return (
    <div className={style.cardsBlock}>
      {movies.map(item => (
        <MovieCard key={item.imdbID} movie={item} />
      ))}
    </div>
  )
}
