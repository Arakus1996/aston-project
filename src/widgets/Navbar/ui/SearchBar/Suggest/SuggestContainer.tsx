import { Suggest } from './Suggest'
import style from './Suggest.module.css'

import type { PropsWithChildren } from 'react'

type Props = {
  searchValue: string
  show: boolean
}

export const SuggestContainer = (props: PropsWithChildren<Props>) => {
  return (
    <ul className={style.suggest}>
      <Suggest {...props} />
    </ul>
  )
}
