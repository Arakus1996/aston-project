import style from './ValidateInput.module.css'

import type { PropsWithChildren } from 'react'
import type { InputType as Props } from '../../../types/sharedType'

export const ValidateInput = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <input
        className={`${style.input} ${props.error && style.inputError}`}
        value={props.value}
        type={props.inputType}
        placeholder={props.placeholder}
        {...props.register(props.typeValidation, {
          ...props.validation,
          onChange: props.handleOnChange,
        })}
      />
      <div className={style.errorBlock}>
        {props.error && <p>{props.error.message}</p>}
      </div>
    </>
  )
}
