import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useState } from 'react'

export const Form = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = () => {
    const auth = getAuth()
    console.log(auth)
    createUserWithEmailAndPassword(auth, login, password)
      .then(console.log)
      .catch(console.error)
  }

  return (
    <div>
      <input
        type='email'
        value={login}
        placeholder='mail'
        onChange={e => setLogin(e.target.value)}
      />
      <input
        type='password'
        value={password}
        placeholder='pass'
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>ТЫК</button>
    </div>
  )
}
