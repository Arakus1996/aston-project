import { Link } from 'react-router-dom'

import { useAuth } from '../../../shared/hooks/useAuth'
import { GuestButtonGroup, UserButtonGroup } from '../ButtonGropu/ButtonGroup'

import { ReactComponent as LogoFind } from './icons/find.svg'

import style from './Navbar.module.css'

export const Navbar = () => {
  const { isAuth } = useAuth()

  return (
    <nav>
      <div className={style.navHead}>
        <Link className={style.link} to='/'>
          <strong className={style.navLogo}>Кинопоказ</strong>
        </Link>
        <div className={style.findForm}>
          <input type='text' placeholder='Поиск...' />
          <button className={style.btnFindForm}>
            <LogoFind className={style.logoBtnFind} />
          </button>
        </div>
        <div className={style.btnBlock}>
          {isAuth ? <UserButtonGroup /> : <GuestButtonGroup />}
        </div>
      </div>
    </nav>
  )
}
