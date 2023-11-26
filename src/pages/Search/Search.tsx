import { useSearchParams } from 'react-router-dom'

import { MovieCards } from '../../entities/MovieCards/MovieCards'
import { NotFound } from '../../shared/ui/NotFound/NotFound'
import { Preloader } from '../../shared/ui/Preloader/Preloader'
import { useAppSelector } from '../../store/hooks'
import { useGetMoviesFromSearchQuery } from '../../store/moviesApi'

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
      {!data.Search && <NotFound />}
      {data.Search && <MovieCards moviesData={data.Search} />}
    </div>
  )
}
