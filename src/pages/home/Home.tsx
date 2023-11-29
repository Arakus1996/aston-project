import { MovieCards } from '../../entities/MovieCards/MovieCards'
import { useGetMoviesQuery } from '../../store/moviesApi'
import { Preloader } from '../../shared/ui/Preloader/Preloader'
import { useAppSelector } from '../../store/hooks'

export const Home = () => {
  const { data, isLoading } = useGetMoviesQuery('2')
  const isLoadingUserData = useAppSelector(store => store.userReducer.isLoading)

  if (isLoading || isLoadingUserData) {
    return <Preloader />
  }
  return data && <MovieCards moviesData={data.Search} />
}
