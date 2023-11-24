import { useState } from 'react'

import { RegistrationForm } from '../../features/AuthForm/RegistrationForm/RegistrationForm'
import { useAppDispatch } from '../../store/hooks'
import { createUser } from '../../store/middleware/thunk/userThunk'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    />
  )
}
