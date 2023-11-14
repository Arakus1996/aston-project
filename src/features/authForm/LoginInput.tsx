import { UseFormRegister, FieldValues } from 'react-hook-form'

import { ValidateInput } from '../../shared/ui/ValidateInput/ValidateInput'

import { validateLogin } from './validationConfig'

import type { PropsWithChildren } from 'react'

interface Props {
  register: UseFormRegister<FieldValues>
  error: FieldValues | undefined
}

export const LoginInput = (props: PropsWithChildren<Props>) => {
  return (
    <ValidateInput
      register={props.register}
      error={props.error}
      typeValidation='login'
      placeholder='Логин'
      validation={validateLogin}
    />
  )
}
