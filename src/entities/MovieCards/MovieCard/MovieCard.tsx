import { useNavigate } from 'react-router-dom'

import { FavoriteButton } from '../../../shared/ui/FavoriteButton/FavoriteButton'
import { useFavorite } from '../../../shared/hooks/useFavorites'
import { useAuth } from '../../../shared/hooks/useAuth'
import { Preloader } from '../../../shared/ui/Preloader/Preloader'
import { useAppSelector } from '../../../store/hooks'

import style from './MovieCard.module.css'

import type { FullDescriptionMovie } from '../../../shared/types/sharedType'

type Props = {
  movieData: FullDescriptionMovie
}

export const MovieCard = ({ movieData }: Props) => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const handleClick = () => navigate(`/movie/${movieData.imdbID}`)

  const { isFavorite, toggleIsFavorite } = useFavorite(movieData.imdbID)
  const isLoadingFavorites = useAppSelector(
    state => state.favoritesReducer.isLoading
  )

  return (
    <div className={style.movieCard}>
      <img
        className={style.moviePoster}
        src={movieData.Poster}
        onClick={handleClick}
      />

      <div className={style.movieCard_info}>
        <h2 className={style.movieInfo_name}>{movieData.Title}</h2>
        <p className={style.movieInfo_description}>
          <b>Год:</b> {movieData.Year}
        </p>
        {isAuth && (
          <FavoriteButton handleClick={toggleIsFavorite} isActive={isFavorite}>
            {isLoadingFavorites && <Preloader />}
          </FavoriteButton>
        )}
      </div>
    </div>
  )
}
