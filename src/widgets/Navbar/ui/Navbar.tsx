import { Link } from 'react-router-dom'

import { Button } from '../../../shared/ui/Button/Button'

import { ReactComponent as LogoFind } from './icons/find.svg'

import style from './Navbar.module.css'

export const Navbar = () => {
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
          <Link className={style.link} to='registration'>
            <Button text='Регистрация' isNotDefaultButton={true} />
          </Link>
          <Link className={style.link} to='login'>
            <Button text='Войти' />
          </Link>
        </div>
      </div>
    </nav>
  )
}
