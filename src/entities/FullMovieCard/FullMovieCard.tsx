import { Table } from '../../shared/ui/Table/Table'
import { TableLine } from '../../shared/ui/Table/TibleLine/TableLine'
import { FavoriteButton } from '../../shared/ui/FavoriteButton/FavoriteButton'
import { useFavorite } from '../../shared/hooks/useFavorites'

import style from './FullMovieCard.module.css'
import { RatingBlock } from './RatingBlock/RatingBlock'

import type { FullDescriptionMovie } from '../../shared/types/sharedType'

type Props = {
  movieData: FullDescriptionMovie
}

export const FullMovieCard = ({ movieData }: Props) => {
  const { isFavorite, toggleIsFavorite } = useFavorite(movieData)

  return (
    <div className={style.movie}>
      <div className={style.discriptionBlock__name}>
        <h2>{movieData.Title}</h2>
      </div>
      <div className={style.mediaBlock}>
        <img src={movieData.Poster} className={style.mediaBlock__poster} />
        <div className={style.mediaBlock__raiting}>
          <RatingBlock ratingName={'IMDb'} value={movieData.imdbRating} />
          <FavoriteButton
            handleClick={toggleIsFavorite}
            isActive={isFavorite}
          />
        </div>
      </div>

      <div className={style.discriptionBlock}>
        <Table>
          <TableLine name={'Жанр:'} values={movieData.Genre} />
          <TableLine name={'Страна:'} values={movieData.Country} />
          <TableLine name={'Год:'} values={movieData.Year} />
          <TableLine name={'Длительность:'} values={movieData.Runtime} />
          <TableLine name={'Режисер:'} values={movieData.Director} />
          <TableLine name={'В главных ролях:'} values={movieData.Actors} />
          <TableLine name={'Сценарий:'} values={movieData.Writer} />
          <TableLine name={'Премьера в Мире:'} values={movieData.Released} />
          <TableLine
            className={style.rating}
            name={'Рейтинг MPAA:'}
            values={movieData.Rated}
          />
        </Table>
      </div>

      <div className={style.etcBlock}>
        <section className={style.etcBlock__discription}>
          <h3>Описание</h3>
          <p>{movieData.Plot}</p>
        </section>
      </div>
    </div>
  )
}
