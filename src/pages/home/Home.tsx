import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MovieCards } from '../../componetns/MovieCards/MovieCards'
import { useGetMoviesQuery } from '../../store/rtkquery/moviesApi'
import { Preloader } from '../../componetns/shared/Preloader/Preloader'
import { isLodingUserSelect } from '../../store/selectors/userSelector'

export const Home = () => {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const { data, isLoading, isFetching } = useGetMoviesQuery(page)
  const isLoadingUserData = useSelector(isLodingUserSelect)
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
