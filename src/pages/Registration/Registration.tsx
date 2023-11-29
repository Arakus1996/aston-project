import { useState } from 'react'

import { RegistrationForm } from '../../componetns/Forms/RegistrationForm/RegistrationForm'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { createUser } from '../../store/middleware/thunk/userThunk'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const errorRegister = useAppSelector(state => state.userReducer.error)
  const dispatch = useAppDispatch()

  const onAuth = () => {
    dispatch(createUser({ email, password }))
  }

  return (
    <RegistrationForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onAuth={onAuth}
      error={errorRegister}
    />
  )
}
