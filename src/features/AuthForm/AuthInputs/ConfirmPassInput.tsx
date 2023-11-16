import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { PropsWithChildren } from 'react'

import { ValidateInput } from '../../../shared/ui/ValidateInput/ValidateInput'

interface Props {
  register: UseFormRegister<FieldValues>
  error?: FieldValues | undefined
  placeholder?: string
  validation?: RegisterOptions<FieldValues>
}

export const ConfirmPasswordInput = (props: PropsWithChildren<Props>) => {
  return (
    <ValidateInput
      register={props.register}
      error={props.error}
      typeValidation='confirmPassword'
      placeholder={props.placeholder || 'Повторите пароль'}
      validation={props.validation}
      inputType='password'
    />
  )
}
