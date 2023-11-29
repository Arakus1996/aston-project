import { Link } from 'react-router-dom'
import { useContext } from 'react'
import classNames from 'classnames'

import { useAuth } from '../../../shared/hooks/useAuth'
import { GuestButtonGroup, UserButtonGroup } from '../ButtonGropu/ButtonGroup'
import { ThemeContext } from '../../../shared/context/Context'
import { ButtonTheme } from '../../../shared/ui/ButtonTheme/ButtonTheme'
import { useChekTheme } from '../../../shared/hooks/useCheckTheme'

import { SearchBar } from './SearchBar/SearchBar'
import style from './Navbar.module.css'

export const Navbar = () => {
  const { isAuth } = useAuth()
  const { isLight, setIsLight } = useContext(ThemeContext)
  const theme = useChekTheme(style.light)
  return (
    <nav>
      <div className={classNames(style.navHead, theme)}>
        <Link className={style.link} to='/'>
          <strong className={classNames(style.navLogo, theme)}>
            Кинопоказ
          </strong>
        </Link>
        <SearchBar />
        <div className={style.btnBlock}>
          {isAuth ? <UserButtonGroup /> : <GuestButtonGroup />}
        </div>
        <ButtonTheme setIsLight={setIsLight} isLight={isLight} />
      </div>
    </nav>
  )
}
