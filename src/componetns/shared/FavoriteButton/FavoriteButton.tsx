import PropTypes from 'prop-types'

import { ReactComponent as FavoriteIcon } from '../../assets/favorite.svg'
import { Loader } from '../Loader/Loader'

import style from './FavoriteButton.module.css'

type Props = {
  handleClick: () => void
  isActive: boolean
  isLoading: boolean
}

export const FavoriteButton = (props: Props) => {
  return (
    <div onClick={props.handleClick} className={style.favBtn}>
      {props.isLoading ? (
        <Loader />
      ) : (
        <FavoriteIcon
          className={
            props.isActive ? style.favoriteIcon__active : style.favoriteIcon
          }
        />
      )}
    </div>
  )
}

FavoriteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
}
