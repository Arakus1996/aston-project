import { useForm } from 'react-hook-form'

import { Button } from '../../../shared/ui/Button/Button'
import { EmailInput } from '../AuthInputs/EmailInput'
import {
  validateConfirmPassword,
  validatePassword,
  validateEmail,
} from '../config/validationConfig'
import { PasswordInput } from '../AuthInputs/PasswordInput'
import { ConfirmPasswordInput } from '../AuthInputs/ConfirmPassInput'
import { useChekTheme } from '../../../shared/hooks/useCheckTheme'

import style from './RegistrationForm.module.css'

import type { PropsWithChildren } from 'react'
import type { InputEvent } from '../../../shared/types/sharedType'
import type { AuthType as Props } from '../types/types'

export const RegistrationForm = (props: PropsWithChildren<Props>) => {
  const theme = useChekTheme(style.lightForm)
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onChange',
  })
  const pwd = watch('password')

  const onSubmit = handleSubmit(() => {
    props.onAuth()
  })

  const handleOnChangeEmail = (e: InputEvent) => {
    props.setEmail(e.target.value)
  }

  const handleOnChangePass = (e: InputEvent) => {
    props.setPassword(e.target.value)
  }

  return (
    <div className={style.registrationCssave}>
      <form onSubmit={onSubmit} className={theme}>
        <h3 className={style.textCenter}>Регистрация</h3>
        <EmailInput
          register={register}
          error={errors.email}
          typeValidation='email'
          validation={validateEmail}
          value={props.email}
          handleOnChange={handleOnChangeEmail}
        />
        <PasswordInput
          register={register}
          error={errors.password}
          typeValidation='password'
          validation={validatePassword}
          value={props.password}
          handleOnChange={handleOnChangePass}
        />
        <ConfirmPasswordInput
          register={register}
          error={errors.confirmPassword}
          typeValidation='confirmPassword'
          validation={validateConfirmPassword(pwd)}
        />
        <Button text='Зарегистрироваться' />
      </form>
    </div>
  )
}
