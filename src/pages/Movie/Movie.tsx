import { useParams } from 'react-router-dom'

import { FullMovieCard } from '../../componetns/Card/FullMovieCard/FullMovieCard'
import { useGetMovieByIdQuery } from '../../store/rtkquery/moviesApi'
import { Preloader } from '../../componetns/shared/Preloader/Preloader'

export const Movie = () => {
  const { id } = useParams<{ id: string | undefined }>()
  const { data, isLoading } = useGetMovieByIdQuery(id)

  if (isLoading) {
    return <Preloader />
  }
  return <FullMovieCard movieData={data} />
}
