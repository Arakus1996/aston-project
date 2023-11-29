import { useSearchParams } from 'react-router-dom'

import { MovieCards } from '../../componetns/MovieCards/MovieCards'
import { NotFound } from '../../componetns/shared/NotFound/NotFound'
import { Preloader } from '../../componetns/shared/Preloader/Preloader'
import { useAppSelector } from '../../store/hooks'
import { useGetMoviesFromSearchQuery } from '../../store/rtkquery/moviesApi'

export const Search = () => {
  const isLoadingUserData = useAppSelector(store => store.userReducer.isLoading)
  const [searchParams] = useSearchParams()
  const searchValue = searchParams.get('s')
  const { data, isLoading } = useGetMoviesFromSearchQuery(searchValue)

  if (isLoading || isLoadingUserData) {
    return <Preloader />
  }
  return (
    <div>
      {!data && <NotFound />}
      {data && <MovieCards moviesData={data.Search} />}
    </div>
  )
}
