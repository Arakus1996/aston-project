import { MovieCards } from '../../entities/MovieCards/MovieCards'
import { useGetMoviesQuery } from '../../store/moviesApi'
import { Preloader } from '../../shared/ui/Preloader/Preloader'

import style from './Home.module.css'

export const Home = () => {
  const { data, isLoading } = useGetMoviesQuery('2')

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className={style.movieCatalog}>
      <MovieCards moviesData={data.Search} />
    </div>
  )
}
