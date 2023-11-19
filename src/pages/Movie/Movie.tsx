import { useParams } from 'react-router-dom'

import { FullMovieCard } from '../../entities/FullMovieCard/FullMovieCard'
import { useGetMovieByIdQuery } from '../../store/moviesApi'
import { Preloader } from '../../shared/ui/Preloader/Preloader'

export const Movie = () => {
  const { id } = useParams<{ id: string | undefined }>()
  const { data, isLoading } = useGetMovieByIdQuery(id)

  if (isLoading) {
    return <Preloader />
  }
  return <FullMovieCard movieData={data} />
}
