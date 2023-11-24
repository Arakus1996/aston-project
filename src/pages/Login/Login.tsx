import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginForm } from '../../features/AuthForm/LoginForm/LoginForm'
import { useAppDispatch } from '../../store/hooks'
import { signInUser } from '../../store/middleware/thunk/userThunk'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onAuth = () => {
    dispatch(signInUser({ email, password }))
    navigate('/')
  }

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onAuth={onAuth}
    />
  )
}
