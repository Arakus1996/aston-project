import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { removeFromHistory } from '../../store/middleware/thunk/historyThunk'
import { setValue } from '../../store/slices/searchSlice'
import { ValueWithId } from '../../types/sharedType'
import { HistoryItem } from '../HistoryItem/HistoryItem'
import { NoDataComponent } from '../shared/NoDataInfo/NoDataInfo'

import style from './HistoryTable.module.css'

export const HistoryTable = () => {
  const history = useAppSelector(store => store.historyReducer.history)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLink = (value: string) => {
    dispatch(setValue(value))
    navigate(`/search?s=${value}`)
  }

  const handleRemove = (value: ValueWithId) => {
    dispatch(removeFromHistory(value))
  }

  if (!history.length) {
    return <NoDataComponent value='Пусто' />
  }

  return (
    <div className={classNames(style.history)}>
      {history
        .map(item => (
          <HistoryItem
            key={item.id}
            item={item}
            handleLink={handleLink}
            handleRemove={handleRemove}
          />
        ))
        .reverse()}
    </div>
  )
}
