import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getMovies } from '../../shared/api/moviesApi'

import { MovieCard } from './MovieCard/MovieCard'

import style from './MovieCards.module.css'

export const MovieCards = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, [])

  const movies = useAppSelector(state => state.movieReducer.movies)
  return (
    <div className={style.cardsBlock}>
      {movies.map(item => (
        <MovieCard key={item.imdbID} movie={item} />
      ))}
    </div>
  )
}
