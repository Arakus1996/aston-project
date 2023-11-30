import { useSelector } from 'react-redux'

import { MovieCards } from '../../componetns/MovieCards/MovieCards'
import { NoDataComponent } from '../../componetns/shared/NoDataInfo/NoDataInfo'
import { Title } from '../../componetns/shared/Title/Title'
import { favoritesSelect } from '../../store/selectors/favoriteSelector'

export const Favorites = () => {
  const favoriteMovies = useSelector(favoritesSelect)

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
