import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetMoviesFromSearchQuery } from '../../../../../store/moviesApi'
import { useDebounce } from '../../../../../shared/hooks/useDebounce'
import { Preloader } from '../../../../../shared/ui/Preloader/Preloader'

import style from './Suggest.module.css'

import type { ShortDescriptionMovie } from '../../../../../shared/types/sharedType'

type Props = {
  searchValue: string
  show: boolean
}

export const Suggest = ({ searchValue, show }: Props) => {
  const debounceValue = useDebounce(searchValue, 500)
  const { data, isLoading } = useGetMoviesFromSearchQuery(debounceValue)
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
  if (isLoading || debounceValue !== searchValue) {
    return (
      <li>
        <Preloader />
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
