import { type Middleware } from '@reduxjs/toolkit'

export const loggerMiddleware: Middleware = () => next => action => {
  const result = next(action)
  const date = new Date()
  if (action.type === 'USER/signInUser/fulfilled') {
    /* eslint-disable no-console */
    console.group('User login')
    console.log('LogIn with Email: ', action.payload)
    console.log(date.toTimeString())
    console.groupEnd()
    /* eslint-enable no-console */
  }
  if (action.type === 'USER/signOutUser/fulfilled') {
    /* eslint-disable no-console */
    console.group('User logOut')
    console.log(date.toTimeString())
    console.groupEnd()
    /* eslint-enable no-console */
  }
  return result
}
