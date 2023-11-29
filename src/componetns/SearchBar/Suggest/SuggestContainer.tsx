import classNames from 'classnames'

import { useChekTheme } from '../../../hooks/useCheckTheme'

import { Suggest } from './Suggest'
import style from './Suggest.module.css'

import type { PropsWithChildren } from 'react'

type Props = {
  searchValue: string
  show: boolean
}

export const SuggestContainer = (props: PropsWithChildren<Props>) => {
  const theme = useChekTheme(style.light)
  return (
    <ul className={classNames(style.suggest, theme)}>
      <Suggest {...props} />
    </ul>
  )
}
