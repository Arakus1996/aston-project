import { MovieCards } from '../../entities/MovieCards/MovieCards'
import { useAuth } from '../../shared/hooks/useAuth'
import { useAppDispatch } from '../../store/hooks'
import { removeUser } from '../../store/slices/userSlice'

import style from './Home.module.css'
import Stub from './Stub'

export const Home = () => {
  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()

  return isAuth ? (
    <div className='Заглушка'>
      <Stub />
      <button onClick={() => dispatch(removeUser())}>logout</button>
    </div>
  ) : (
    <div className={style.movieCatalog}>
      <MovieCards />
    </div>
  )
}
