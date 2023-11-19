import { ShortDescriptionMovie } from '../../shared/types/sharedType'

import { MovieCard } from './MovieCard/MovieCard'

import style from './MovieCards.module.css'

type Props = {
  moviesData: ShortDescriptionMovie[]
}

export const MovieCards = ({ moviesData }: Props) => {
  return (
    <div className={style.cardsBlock}>
      {moviesData.map(item => (
        <MovieCard key={item.imdbID} movieData={item} />
      ))}
    </div>
  )
}
