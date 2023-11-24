import style from './RatingBlock.module.css'

import type { PropsWithChildren } from 'react'

interface Props {
  ratingName: string
  value?: string
}

const valueColor = (rating: number) => {
  if (rating >= 7) return { color: '#60C60A' }
  else if (rating < 7 && rating >= 5) return { color: '#FD9B25' }
  else return { color: '#F84B2F' }
}

export const RatingBlock = (props: PropsWithChildren<Props>) => {
  const value = Number(props.value)
  return (
    <div className={style.rating}>
      <span className={style.ratingName}>{props.ratingName}:</span>
      <span className={style.ratingValue} style={valueColor(value)}>
        {value}
      </span>
    </div>
  )
}
