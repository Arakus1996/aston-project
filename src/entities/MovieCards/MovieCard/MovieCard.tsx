import { useNavigate } from 'react-router-dom'

import style from './MovieCard.module.css'

import type { PropsWithChildren } from 'react'

interface Props {
  movie: {
    Title: string
    Year: string
    Type: string
    Poster: string
    imdbID: string
  }
}

export const MovieCard = (props: PropsWithChildren<Props>) => {
  const movie = props.movie
  const navigate = useNavigate()
  const handleClick = () => navigate(`/movie/${movie.imdbID}`)

  return (
    <div className={style.movieCard}>
      <img
        className={style.moviePoster}
        src={movie.Poster}
        onClick={handleClick}
      />

      <div className={style.movieCard_info}>
        <h2 className={style.movieInfo_name}>{movie.Title}</h2>
        <p className={style.movieInfo_description}>
          <b>Год:</b> {movie.Year}
        </p>
      </div>
    </div>
  )
}
