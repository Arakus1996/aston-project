import style from './MovieCard.module.css'

import type { PropsWithChildren } from 'react'

interface Props {
  movie: {
    Title: string
    Year: string
    Type: string
    Poster: string
  }
}

export const MovieCard = (props: PropsWithChildren<Props>) => {
  const movie = props.movie

  return (
    <div className={style.movieCard}>
      <img className={style.moviePoster} src={movie.Poster} />

      <div className={style.movieCard_info}>
        <h2 className={style.movieInfo_name}>{movie.Title}</h2>
        <p className={style.movieInfo_description}>
          <b>Год:</b> {movie.Year}
        </p>
      </div>
    </div>
  )
}
