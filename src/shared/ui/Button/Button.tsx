import style from './Button.module.css'

import type { PropsWithChildren } from 'react'

interface Props {
  onClick?: () => void
  text: string
  isNotDefaultButton?: boolean
}

export const Button = (props: PropsWithChildren<Props>) => {
  const styleBtn = props.isNotDefaultButton
    ? style.notDefaultButton
    : style.defaultButton

  return (
    <button onClick={props.onClick} className={styleBtn}>
      {props.children}
      {props.text}
    </button>
  )
}
