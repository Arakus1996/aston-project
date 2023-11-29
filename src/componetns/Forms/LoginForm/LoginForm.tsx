import { useForm } from 'react-hook-form'
import { PropsWithChildren } from 'react'

import { Button } from '../../shared/Button/Button'
import { EmailInput } from '../AuthInputs/EmailInput'
import { PasswordInput } from '../AuthInputs/PasswordInput'
import { validateEmail } from '../config/validationConfig'
import { useChekTheme } from '../../../hooks/useCheckTheme'

import style from './LoginForm.module.css'

import type { InputEvent } from '../../../types/sharedType'
import type { AuthType as Props } from '../types/types'

export const LoginForm = (props: PropsWithChildren<Props>) => {
  const theme = useChekTheme(style.lightForm)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

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
        <h3 className={style.textCenter}>Войти</h3>
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
          value={props.password}
          handleOnChange={handleOnChangePass}
        />
        <div className={style.errorForm}>
          <p className={style.errorForm_message}>{props.error}</p>
        </div>
        <div className={style.btnForm}>
          <Button text='Вход в аккаунт' />
        </div>
      </form>
    </div>
  )
}
