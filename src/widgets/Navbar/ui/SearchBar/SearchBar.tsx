import { useNavigate } from 'react-router-dom'
import { ChangeEvent, SyntheticEvent, useState, useRef } from 'react'

import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { setValue } from '../../../../store/slices/searchSlice'

import { ReactComponent as LogoFind } from '../icons/find.svg'

import style from './SearchBar.module.css'
import { SuggestContainer } from './Suggest/SuggestContainer'

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showFields, setShowFields] = useState(false)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(state => state.searchReducer.value)

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
      />
      <button className={style.btnFindForm}>
        <LogoFind className={style.logoBtnFind} />
      </button>
      <SuggestContainer searchValue={searchValue} show={showFields} />
    </form>
  )
}
