import style from './Table.module.css'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Table = (props: Props) => {
  return (
    <table className={style.discriptionBlock__table}>
      <tbody>{props.children}</tbody>
    </table>
  )
}
