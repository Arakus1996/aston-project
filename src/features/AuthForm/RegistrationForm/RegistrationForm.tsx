import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { Button } from '../../../shared/ui/Button/Button'
import { LoginInput } from '../AuthInputs/LoginInput'
import {
  validateConfirmPassword,
  validatePassword,
  validateLogin,
} from '../config/validationConfig'
import { PasswordInput } from '../AuthInputs/PasswordInput'
import { ConfirmPasswordInput } from '../AuthInputs/ConfirmPassInput'
import { setUser } from '../../../store/slices/userSlice'
import { useAppDispatch } from '../../../store/hooks'

import style from './RegistrationForm.module.css'

export const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onBlur',
  })
  const pwd = watch('password')

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  const onSubmit = handleSubmit(() => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            // token: user.accessToken,
          })
        )
      })
      .catch(console.error)
  })

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleOnChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className={style.registrationCssave}>
      <form onSubmit={e => onSubmit(e)}>
        <h3 className={style.textCenter}>Регистрация</h3>
        <LoginInput
          register={register}
          error={errors.login}
          validation={validateLogin}
          value={email}
          handleOnChange={handleOnChangeEmail}
        />
        <PasswordInput
          register={register}
          error={errors.password}
          validation={validatePassword}
          value={password}
          handleOnChange={handleOnChangePass}
        />
        <ConfirmPasswordInput
          register={register}
          error={errors.confirmPassword}
          validation={validateConfirmPassword(pwd)}
        />
        <Button text='Зарегистрироваться' />
      </form>
    </div>
  )
}
