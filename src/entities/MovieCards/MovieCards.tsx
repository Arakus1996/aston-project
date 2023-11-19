import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useGetMoviesQuery } from '../../store/moviesApi'
import {
  MoviesResponce,
  ShortDescriptionMovie,
} from '../../shared/types/sharedType'

import { MovieCard } from './MovieCard/MovieCard'

import style from './MovieCards.module.css'

type Props = {
  moviesData: ShortDescriptionMovie[]
}

export const MovieCards = ({ moviesData }: Props) => {
  //const { data, isLoading } = useGetMoviesQuery('2')
  // const dispatch = useAppDispatch()
  //const movies = data.Search
  // useEffect(() => {
  //dispatch(getMovies())
  // const { data, isLoading } = useGetMoviesQuery('')
  // console.log(data)
  //}, [])
  console.log(moviesData)
  // const movies = useAppSelector(state => state.movieReducer.movies)
  return (
    <div className={style.cardsBlock}>
      {moviesData.map(item => (
        <MovieCard key={item.imdbID} movieData={item} />
      ))}
    </div>
  )
}
