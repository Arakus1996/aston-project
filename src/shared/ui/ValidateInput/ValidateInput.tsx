import { UseFormRegister, FieldValues, RegisterOptions } from 'react-hook-form'

import style from './ValidateInput.module.css'

import type { PropsWithChildren } from 'react'

interface Props {
  register: UseFormRegister<FieldValues>
  error: FieldValues | undefined
  placeholder?: string
  typeValidation: string
  validation?: RegisterOptions<FieldValues>
}

export const ValidateInput = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <input
        className={style.input}
        placeholder={props.placeholder}
        {...props.register(props.typeValidation, props.validation)}
      />
      {props.error && <p>{props.error.message}</p>}
    </>
  )
}
