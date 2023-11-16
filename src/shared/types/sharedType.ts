import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

export type InputEvent = React.ChangeEvent<HTMLInputElement>

export type InputType = {
  register: UseFormRegister<FieldValues>
  error: FieldValues | undefined
  typeValidation: string
  setValue?: (value: string) => void
  validation?: RegisterOptions<FieldValues>
  placeholder?: string
  inputType?: string
  value?: string
  handleOnChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}
