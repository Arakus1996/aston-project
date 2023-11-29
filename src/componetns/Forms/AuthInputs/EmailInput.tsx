import { ValidateInput } from '../../shared/ValidateInput/ValidateInput'

import type { PropsWithChildren } from 'react'
import type { InputType as Props } from '../../../types/sharedType'

export const EmailInput = (props: PropsWithChildren<Props>) => {
  return <ValidateInput {...props} placeholder={props.placeholder || 'Email'} />
}
