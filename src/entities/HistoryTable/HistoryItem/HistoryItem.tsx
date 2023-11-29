import classNames from 'classnames'

import { useChekTheme } from '../../../shared/hooks/useCheckTheme'

import style from './HistoryItem.module.css'

import type { ValueWithId } from '../../../shared/types/sharedType'

type Props = {
  handleLink: (value: string) => void
  handleRemove: (value: ValueWithId) => void
  item: ValueWithId
}

export const HistoryItem = ({ handleLink, handleRemove, item }: Props) => {
  const theme = useChekTheme(style.light)

  return (
    <div className={style.historyElement}>
      <button
        onClick={() => handleLink(item.value)}
        className={classNames(style.historyBtn, theme)}
      >
        {item.value}
      </button>
      <button onClick={() => handleRemove(item)} className={style.closeBtn}>
        x
      </button>
    </div>
  )
}
