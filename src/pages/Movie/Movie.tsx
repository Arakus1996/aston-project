import { useParams } from 'react-router-dom'

import { useGetMovieQuery } from '../../store/moviesApi'
import { Table } from '../../shared/ui/Table/Table'
import { TableLine } from '../../shared/ui/Table/TibleLine/TableLine'

import style from './Movie.module.css'
import RatingBlock from './RatingBlock/RatingBlock'
import { parseMovieLength } from './parseMovieLength'

export const Movie = () => {
  const { id } = useParams<{ id: string | undefined }>()
  const { data, isLoading } = useGetMovieQuery(id)
  if (isLoading) return <h1>LOADING</h1>
  return (
    <div className={style.movie}>
      <div className={style.discriptionBlock__name}>
        <h2>{data.Title}</h2>
      </div>
      <div className={style.mediaBlock}>
        <img src={data.Poster} className={style.mediaBlock__poster} />
        <div className={style.mediaBlock__raiting}>
          <RatingBlock ratingName={'IMDb'} value={data.imdbRating} />
        </div>
      </div>

      <div className={style.discriptionBlock}>
        <Table>
          <TableLine name={'Жанр:'} values={data.Genre} />
          <TableLine name={'Страна:'} values={data.Country} />
          <TableLine name={'Год:'} values={data.Year} />
          <TableLine
            name={'Длительность:'}
            values={parseMovieLength(data.Runtime) + ` (${data.Runtime})`}
          />
          <TableLine name={'Режисер:'} values={data.Director} />
          <TableLine name={'В главных ролях:'} values={data.Actors} />
          <TableLine name={'Сценарий:'} values={data.Writer} />
          <TableLine name={'Премьера в Мире:'} values={data.Released} />
          <TableLine
            className={style.rating}
            name={'Рейтинг MPAA:'}
            values={data.Rated}
          />
        </Table>
      </div>

      <div className={style.etcBlock}>
        <section className={style.etcBlock__discription}>
          <h3>Описание</h3>
          <p>{data.Plot}</p>
        </section>
      </div>
    </div>
  )
}
