import { PropsWithChildren } from 'react'

import { ValidateInput } from '../../shared/ValidateInput/ValidateInput'

import type { InputType as Props } from '../../../types/sharedType'

export const ConfirmPasswordInput = (props: PropsWithChildren<Props>) => {
  return (
    <ValidateInput
      {...props}
      placeholder={props.placeholder || 'Повторите пароль'}
      inputType='password'
    />
  )
}
