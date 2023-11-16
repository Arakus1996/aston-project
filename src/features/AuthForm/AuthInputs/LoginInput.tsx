import { UseFormRegister, FieldValues, RegisterOptions } from 'react-hook-form'

import { ValidateInput } from '../../../shared/ui/ValidateInput/ValidateInput'

import type { PropsWithChildren } from 'react'

interface Props {
  register: UseFormRegister<FieldValues>
  error: FieldValues | undefined
  placeholder?: string
  validation?: RegisterOptions<FieldValues>
  value: string
  handleOnChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}

export const LoginInput = (props: PropsWithChildren<Props>) => {
  return (
    <ValidateInput
      register={props.register}
      error={props.error}
      value={props.value}
      handleOnChange={props.handleOnChange}
      typeValidation='login'
      placeholder={props.placeholder || 'Логин'}
      validation={props.validation}
    />
  )
}
