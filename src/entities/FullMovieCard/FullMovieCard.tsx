import classNames from 'classnames'

import { Table } from '../../shared/ui/Table/Table'
import { TableLine } from '../../shared/ui/Table/TibleLine/TableLine'
import { FavoriteButton } from '../../shared/ui/FavoriteButton/FavoriteButton'
import { useFavorite } from '../../shared/hooks/useFavorites'
import { Preloader } from '../../shared/ui/Preloader/Preloader'
import { useChekTheme } from '../../shared/hooks/useCheckTheme'

import style from './FullMovieCard.module.css'
import { RatingBlock } from './RatingBlock/RatingBlock'

import type { FullDescriptionMovie } from '../../shared/types/sharedType'

type Props = {
  movieData: FullDescriptionMovie
}

export const FullMovieCard = ({ movieData }: Props) => {
  const theme = useChekTheme(style.lightCard)
  const { isFavorite, toggleIsFavorite, isLoading } = useFavorite(
    movieData.imdbID
  )

  if (isLoading) {
    return <Preloader />
  }
  return (
    <div className={classNames(style.movie, theme)}>
      <div className={style.discriptionBlock__name}>
        <h2>{movieData.Title}</h2>
        <FavoriteButton
          handleClick={toggleIsFavorite}
          isActive={isFavorite}
          isLoading={isLoading}
        />
      </div>

      <div className={style.mediaBlock}>
        <img src={movieData.Poster} className={style.mediaBlock__poster} />
        <div className={style.mediaBlock__raiting}>
          <RatingBlock ratingName={'IMDb'} value={movieData.imdbRating} />
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
            name={'Рейтин mpaa:'}
            values={movieData.Rated}
            className={style.rating}
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
