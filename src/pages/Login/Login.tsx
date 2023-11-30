import { useState } from 'react'
import { useSelector } from 'react-redux'

import { LoginForm } from '../../componetns/Forms/LoginForm/LoginForm'
import { useAppDispatch } from '../../store/hooks'
import { signInUser } from '../../store/middleware/thunk/userThunk'
import { userErrorSelect } from '../../store/selectors/userSelector'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const authError = useSelector(userErrorSelect)

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
