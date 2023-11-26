import { Link } from 'react-router-dom'

import { useAuth } from '../../../shared/hooks/useAuth'
import { GuestButtonGroup, UserButtonGroup } from '../ButtonGropu/ButtonGroup'

import { SearchBar } from './SearchBar/SearchBar'
import style from './Navbar.module.css'

export const Navbar = () => {
  const { isAuth } = useAuth()

  return (
    <nav>
      <div className={style.navHead}>
        <Link className={style.link} to='/'>
          <strong className={style.navLogo}>Кинопоказ</strong>
        </Link>
        <SearchBar />
        <div className={style.btnBlock}>
          {isAuth ? <UserButtonGroup /> : <GuestButtonGroup />}
        </div>
      </div>
    </nav>
  )
}
