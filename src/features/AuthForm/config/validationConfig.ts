const textRequired = 'Поле обязательно для заполнения'
const confirmPassError = 'Пароли не совпадают'
const passError = 'Не надежный пароль'
const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const validateLogin = {
  required: textRequired,
}

export const validatePassword = {
  required: textRequired,
  pattern: {
    value: regPass,
    message: passError,
  },
}

export const validateConfirmPassword = (pwd: string | undefined) => {
  return {
    validate: (value: string) => value === pwd || confirmPassError,
  }
}
