import { ShortDescriptionMovie } from '../../shared/types/sharedType'

import { MovieCard } from './MovieCard/MovieCard'

import style from './MovieCards.module.css'

type Props = {
  moviesData: ShortDescriptionMovie[]
  head?: string
}

export const MovieCards = ({ moviesData, head }: Props) => {
  return (
    <>
      <div className={style.head}>
        <h2>{head}</h2>
      </div>
      <div className={style.cardsBlock}>
        {moviesData
          .map(item => <MovieCard key={item.imdbID} movieData={item} />)
          .reverse()}
      </div>
    </>
  )
}
