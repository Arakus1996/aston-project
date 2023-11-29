import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useChekTheme } from '../../../hooks/useCheckTheme'
import { FavoriteButton } from '../../shared/FavoriteButton/FavoriteButton'
import { useFavorite } from '../../../hooks/useFavorites'
import { useAuth } from '../../../hooks/useAuth'

import style from './MovieCard.module.css'

import type { ShortDescriptionMovie } from '../../../types/sharedType'

type Props = {
  movieData: ShortDescriptionMovie
}

export const MovieCard = ({ movieData }: Props) => {
  const theme = useChekTheme(style.lightCard)
  const { isAuth } = useAuth()

  const navigate = useNavigate()
  const handleClick = () => navigate(`/movie/${movieData.imdbID}`)
  const { isFavorite, toggleIsFavorite, isLoading } = useFavorite(
    movieData.imdbID
  )

  return (
    <div className={classNames(style.movieCard, theme)}>
      <img
        className={style.moviePoster}
        src={movieData.Poster}
        onClick={handleClick}
      />

      <div className={classNames(style.movieCard_info)}>
        <h2
          className={classNames(style.movieInfo_name, theme)}
          onClick={handleClick}
        >
          {movieData.Title}
        </h2>
        <p className={style.movieInfo_description}>
          <b>Год:</b> {movieData.Year}
        </p>
        <div className={style.movieInfo_btn}>
          {isAuth && (
            <FavoriteButton
              handleClick={toggleIsFavorite}
              isActive={isFavorite}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
  }),
}
