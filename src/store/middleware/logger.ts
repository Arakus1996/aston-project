import { type Middleware } from '@reduxjs/toolkit'

export const loggerMiddleware: Middleware = () => next => action => {
  const result = next(action)
  const date = new Date()
  if (action.type === 'USER/signInUser/fulfilled') {
    console.group('User login')
    console.log('LogIn with Email: ', action.payload)
    console.log(date.toTimeString())
    console.groupEnd()
  }
  if (action.type === 'USER/signOutUser/fulfilled') {
    console.group('User logOut')
    console.log(date.toTimeString())
    console.groupEnd()
  }
  return result
}
