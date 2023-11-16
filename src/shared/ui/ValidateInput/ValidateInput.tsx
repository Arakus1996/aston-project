import { UseFormRegister, FieldValues, RegisterOptions } from 'react-hook-form'

import style from './ValidateInput.module.css'

import type { PropsWithChildren } from 'react'

interface Props {
  register: UseFormRegister<FieldValues>
  error: FieldValues | undefined
  setValue?: (value: string) => void
  typeValidation: string
  validation?: RegisterOptions<FieldValues>
  placeholder?: string
  inputType?: string
  value?: string
  handleOnChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}

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
        //onChange={(e) => setValue(e.target.value)}
      />
      <div className={style.errorBlock}>
        {props.error && <p>{props.error.message}</p>}
      </div>
    </>
  )
}
