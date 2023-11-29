import type { FirebaseError } from 'firebase/app'

export enum FORM_FIELDS {
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
}

export const authErrors: { [x: string]: string } = {
  'auth/user-not-found': 'Пользователь не зарегистрирован',
  'auth/wrong-password': 'Неверный пароль',
  'auth/email-already-in-use': 'Такой пользователь уже существует',
}

export const printError = (e: unknown) => {
  return authErrors[(e as FirebaseError)?.code] || 'Неизвестная ошибка'
}
