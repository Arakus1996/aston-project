import { useSearchParams } from 'react-router-dom'

import { MovieCards } from '../../componetns/MovieCards/MovieCards'
import { useGetMoviesQuery } from '../../store/rtkquery/moviesApi'
import { Preloader } from '../../componetns/shared/Preloader/Preloader'
import { useAppSelector } from '../../store/hooks'

export const Home = () => {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const { data, isLoading, isFetching } = useGetMoviesQuery(page)
  const isLoadingUserData = useAppSelector(store => store.userReducer.isLoading)
  if (isLoading || isLoadingUserData || isFetching) {
    return <Preloader />
  }
  return (
    data && (
      <MovieCards
        moviesData={data.Search}
        totalResults={Number(data.totalResults)}
        page={page}
      />
    )
  )
}
