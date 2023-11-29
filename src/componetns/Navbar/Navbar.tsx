import { Link } from 'react-router-dom'
import { useContext } from 'react'
import classNames from 'classnames'

import { useAuth } from '../../hooks/useAuth'

import { ThemeContext } from '../../app/theme/Context'
import { ButtonTheme } from '../shared/ButtonTheme/ButtonTheme'
import { useChekTheme } from '../../hooks/useCheckTheme'

import { SearchBar } from '../SearchBar/SearchBar'

import { GuestButtonGroup, UserButtonGroup } from './ButtonGropu/ButtonGroup'

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
