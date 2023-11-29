import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RegistrationForm } from '../../features/AuthForm/RegistrationForm/RegistrationForm'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { createUser } from '../../store/middleware/thunk/userThunk'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const errorRegister = useAppSelector(state => state.userReducer.error)
  const dispatch = useAppDispatch()

  const onAuth = () => {
    dispatch(createUser({ email, password }))
    // navigate('/')
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
