import style from './Fallback.module.css'

import type { FallbackProps } from 'react-error-boundary'

export const Fallback = ({ error }: FallbackProps) => {
  return (
    <div className='container'>
      <h1>Что то пошло не так...:</h1>
      <p className={style.error}>{error.message}</p>
    </div>
  )
}
