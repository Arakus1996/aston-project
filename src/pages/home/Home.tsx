import { MovieCards } from '../../componetns/MovieCards/MovieCards'
import { useGetMoviesQuery } from '../../store/moviesApi'
import { Preloader } from '../../componetns/shared/Preloader/Preloader'
import { useAppSelector } from '../../store/hooks'

export const Home = () => {
  const { data, isLoading } = useGetMoviesQuery('2')
  const isLoadingUserData = useAppSelector(store => store.userReducer.isLoading)

  if (isLoading || isLoadingUserData) {
    return <Preloader />
  }
  return data && <MovieCards moviesData={data.Search} />
}
