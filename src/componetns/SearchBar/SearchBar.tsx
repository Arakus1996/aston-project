import { useNavigate } from 'react-router-dom'
import { ChangeEvent, SyntheticEvent, useState, useRef } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../store/hooks'
import { setValue } from '../../store/slices/searchSlice'
import { addToHistory } from '../../store/middleware/thunk/historyThunk'
import { ReactComponent as LogoFind } from '../../assets/find.svg'
import { useChekTheme } from '../../hooks/useCheckTheme'
import { valueSelect } from '../../store/selectors/searchSelector'

import style from './SearchBar.module.css'
import { SuggestContainer } from './Suggest/SuggestContainer'

export const SearchBar = () => {
  const theme = useChekTheme(style.light)
  const inputRef = useRef<HTMLInputElement>(null)

  const [showFields, setShowFields] = useState(false)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const searchValue = useSelector(valueSelect)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(e.target.value))
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!searchValue) {
      return
    }
    setShowFields(false)
    if (inputRef.current !== null) {
      inputRef.current.blur()
    }
    dispatch(addToHistory({ value: searchValue, id: Date.now() }))
    navigate(`search?s=${searchValue}`)
  }

  return (
    <form onSubmit={handleSubmit} className={style.findForm}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={handleChange}
        onFocus={() => setShowFields(true)}
        onBlur={() => setShowFields(false)}
        placeholder='Поиск...'
        className={theme}
      />
      <button className={classNames(style.btnFindForm, theme)}>
        <LogoFind className={style.logoBtnFind} />
      </button>
      <SuggestContainer searchValue={searchValue} show={showFields} />
    </form>
  )
}
