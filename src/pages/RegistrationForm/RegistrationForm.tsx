import { useForm } from 'react-hook-form'

import { Button } from '../../shared/ui/Button/Button'
import { LoginInput } from '../../features/authForm/LoginInput'
import { PasswordInput } from '../../features/authForm/PasswordInput'

import style from './RegistrationForm.module.css'

export const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <div className={style.registrationCssave}>
      <form onSubmit={onSubmit}>
        <h3 className={style.textCenter}>Войти</h3>
        <LoginInput register={register} error={errors.login} />
        <PasswordInput register={register} error={errors.password} />
        <Button text='Вход в аккаунт' />
      </form>
    </div>
  )
}
