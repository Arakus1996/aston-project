import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginForm } from '../../features/AuthForm/LoginForm/LoginForm'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { signInUser } from '../../store/middleware/thunk/userThunk'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const authError = useAppSelector(state => state.userReducer.error)
  const navigate = useNavigate()

  const onAuth = () => {
    dispatch(signInUser({ email, password }))
  }

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onAuth={onAuth}
      error={authError}
    />
  )
}
