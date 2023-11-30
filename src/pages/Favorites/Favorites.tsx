import { MovieCards } from '../../componetns/MovieCards/MovieCards'
import { NoDataComponent } from '../../componetns/shared/NoDataInfo/NoDataInfo'
import { Title } from '../../componetns/shared/Title/Title'
import { useAppSelector } from '../../store/hooks'

export const Favorites = () => {
  const favoriteMovies = useAppSelector(
    store => store.favoritesReducer.favorites
  )

  return (
    <>
      <Title value={'Избранное'} />
      {favoriteMovies.length ? (
        <MovieCards moviesData={favoriteMovies} />
      ) : (
        <NoDataComponent value='Пусто' />
      )}
    </>
  )
}
