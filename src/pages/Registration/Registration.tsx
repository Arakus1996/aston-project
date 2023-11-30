import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RegistrationForm } from '../../componetns/Forms/RegistrationForm/RegistrationForm'
import { useAppDispatch } from '../../store/hooks'
import { createUser } from '../../store/middleware/thunk/userThunk'
import { userErrorSelect } from '../../store/selectors/userSelector'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const errorRegister = useSelector(userErrorSelect)
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
