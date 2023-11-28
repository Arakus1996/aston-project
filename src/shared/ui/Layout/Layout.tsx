import { ReactNode, useContext } from 'react'

import { ThemeContext } from '../../context/Context'

import style from './Layout.module.css'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { isLight } = useContext(ThemeContext)
  return (
    <main
      className={isLight ? `${style.layout} ${style.light}` : `${style.layout}`}
    >
      <section>{children}</section>
    </main>
  )
}
