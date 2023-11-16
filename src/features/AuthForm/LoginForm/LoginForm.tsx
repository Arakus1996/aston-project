import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { Button } from '../../../shared/ui/Button/Button'
import { LoginInput } from '../AuthInputs/LoginInput'
import { PasswordInput } from '../AuthInputs/PasswordInput'
import { useAppDispatch } from '../../../store/hooks'
import { setUser } from '../../../store/slices/userSlice'

import style from './LoginForm.module.css'

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  })

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit(() => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
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
      <form onSubmit={() => onSubmit()}>
        <h3 className={style.textCenter}>Войти</h3>
        <LoginInput
          register={register}
          error={errors.login}
          value={email}
          handleOnChange={handleOnChangeEmail}
        />
        <PasswordInput
          register={register}
          error={errors.password}
          value={password}
          handleOnChange={handleOnChangePass}
        />
        <Button text='Вход в аккаунт' />
      </form>
    </div>
  )
}
