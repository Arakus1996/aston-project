import { MovieCards } from '../../entities/MovieCards/MovieCards'
import { useGetMoviesQuery } from '../../store/moviesApi'
import { Preloader } from '../../shared/ui/Preloader/Preloader'
import { useAppSelector } from '../../store/hooks'

import style from './Home.module.css'

export const Home = () => {
  const { data, isLoading } = useGetMoviesQuery('2')
  const isLoadingUserData = useAppSelector(store => store.userReducer.isLoading)

  if (isLoading || isLoadingUserData) {
    return <Preloader />
  }

  return (
    <div className={style.movieCatalog}>
      {<MovieCards moviesData={data.Search} />}
    </div>
  )
}
