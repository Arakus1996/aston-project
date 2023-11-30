import { ShortDescriptionMovie } from '../../types/sharedType'

import { MovieCard } from '../Card/MovieCard/MovieCard'
import { Pagination } from '../shared/Pagination/Pagination'

import style from './MovieCards.module.css'

type Props = {
  moviesData: ShortDescriptionMovie[]
  page?: number
  totalResults?: number
}

export const MovieCards = ({ moviesData, totalResults, page }: Props) => {
  return (
    <>
      <div className={style.cardsBlock}>
        {moviesData &&
          moviesData
            .map(item => <MovieCard key={item.imdbID} movieData={item} />)
            .reverse()}
      </div>
      {totalResults && page && (
        <Pagination page={page} totalPages={totalResults / 10} />
      )}
    </>
  )
}
