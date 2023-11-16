import { PropsWithChildren } from 'react'

import { ValidateInput } from '../../../shared/ui/ValidateInput/ValidateInput'

import type { InputType as Props } from '../../../shared/types/sharedType'

export const ConfirmPasswordInput = (props: PropsWithChildren<Props>) => {
  return (
    <ValidateInput
      {...props}
      placeholder={props.placeholder || 'Повторите пароль'}
      inputType='password'
    />
  )
}
