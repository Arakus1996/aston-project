import { ShortDescriptionMovie } from '../../types/sharedType'

import { MovieCard } from '../Card/MovieCard/MovieCard'

import style from './MovieCards.module.css'

type Props = {
  moviesData: ShortDescriptionMovie[]
}

export const MovieCards = ({ moviesData }: Props) => {
  return (
    <div className={style.cardsBlock}>
      {moviesData &&
        moviesData
          .map(item => <MovieCard key={item.imdbID} movieData={item} />)
          .reverse()}
    </div>
  )
}
