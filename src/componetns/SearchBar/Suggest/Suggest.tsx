import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetMoviesFromSearchQuery } from '../../../store/moviesApi'
import { useDebounce } from '../../../hooks/useDebounce'
import { Loader } from '../../shared/Loader/Loader'

import style from './Suggest.module.css'

import type { ShortDescriptionMovie } from '../../../types/sharedType'

type Props = {
  searchValue: string
  show: boolean
}

export const Suggest = ({ searchValue, show }: Props) => {
  const debounceValue = useDebounce(searchValue, 500)
  const { data, isLoading, isFetching } =
    useGetMoviesFromSearchQuery(debounceValue)
  const foundData = data?.Search

  const [showOnHover, setShowOnHover] = useState(false)
  const navigate = useNavigate()
  const handleClick = (id: string) => {
    navigate(`/movie/${id}`)
    setShowOnHover(false)
  }

  if ((!searchValue || !show) && !showOnHover) {
    return null
  }
  if (isLoading || isFetching || debounceValue !== searchValue) {
    return (
      <li className={style.field}>
        <Loader />
      </li>
    )
  }
  return (
    <>
      {foundData ? (
        foundData.map((item: ShortDescriptionMovie) => (
          <li
            onMouseEnter={() => setShowOnHover(true)}
            onMouseLeave={() => setShowOnHover(false)}
            key={item.imdbID}
            onClick={() => handleClick(item.imdbID)}
            className={`${style.field} ${style.data}`}
          >
            {item.Title}
          </li>
        ))
      ) : (
        <li className={`${style.field} ${style.error}`}>
          По вашему запросу ничего не найдено
        </li>
      )}
    </>
  )
}
