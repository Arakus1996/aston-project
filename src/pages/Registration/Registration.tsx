import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { RegistrationForm } from '../../features/AuthForm/RegistrationForm/RegistrationForm'
import { setUser } from '../../store/slices/userSlice'
import { useAppDispatch } from '../../store/hooks'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()

  const createUser = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        })
      )
    })
    // .catch(console.error)
  }

  return (
    <RegistrationForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onAuth={createUser}
    />
  )
}
