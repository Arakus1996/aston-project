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
          <Button
            text='Регистрация'
            onClick={() => {
              //заглушка
              return
            }}
            isNotDefaultButton={true}
          />
          <Button
            text='Войти'
            onClick={() => {
              //заглушка
              return
            }}
          />
        </div>
      </div>
    </nav>
  )
}
