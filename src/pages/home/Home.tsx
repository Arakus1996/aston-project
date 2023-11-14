import { MovieCards } from '../../entities/MovieCards/MovieCards'

import style from './Home.module.css'

export const Home = () => {
  return (
    <div className={style.movieCatalog}>
      <MovieCards />
    </div>
  )
}
