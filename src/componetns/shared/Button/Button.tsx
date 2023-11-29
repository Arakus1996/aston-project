import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useChekTheme } from '../../../hooks/useCheckTheme'

import style from './Button.module.css'

import type { PropsWithChildren } from 'react'

interface Props {
  onClick?: () => void
  text: string
  isNotDefaultButton?: boolean
  isLight?: boolean
}

export const Button = (props: PropsWithChildren<Props>) => {
  const theme = useChekTheme(style.light)
  const styleBtn = props.isNotDefaultButton
    ? style.notDefaultButton
    : style.defaultButton

  return (
    <button onClick={props.onClick} className={classNames(styleBtn, theme)}>
      {props.children}
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.string,
  isNotDefaultButton: PropTypes.string,
}
