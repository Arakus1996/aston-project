import { ValidateInput } from '../../../shared/ui/ValidateInput/ValidateInput'

import type { PropsWithChildren } from 'react'
import type { InputType as Props } from '../../../shared/types/sharedType'

export const EmailInput = (props: PropsWithChildren<Props>) => {
  return <ValidateInput {...props} placeholder={props.placeholder || 'Email'} />
}
