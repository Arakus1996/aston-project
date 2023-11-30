import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MovieCards } from '../../componetns/MovieCards/MovieCards'
import { NotFound } from '../../componetns/shared/NotFound/NotFound'
import { Preloader } from '../../componetns/shared/Preloader/Preloader'
import { useGetMoviesFromSearchQuery } from '../../store/rtkquery/moviesApi'
import { isLodingUserSelect } from '../../store/selectors/userSelector'

export const Search = () => {
  const isLoadingUserData = useSelector(isLodingUserSelect)
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const search = searchParams.get('s')
  const { data, isLoading, isFetching } = useGetMoviesFromSearchQuery({
    search,
    page,
  })

  if (isLoading || isLoadingUserData || isFetching) {
    return <Preloader />
  }
  return (
    <div>
      {!data && <NotFound />}
      {data && (
        <MovieCards
          moviesData={data.Search}
          totalResults={Number(data.totalResults)}
          page={page}
        />
      )}
    </div>
  )
}
