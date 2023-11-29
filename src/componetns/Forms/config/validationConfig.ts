const textRequired = 'Поле обязательно для заполнения'
const confirmPassError = 'Пароли не совпадают'
const passError = 'Не надежный пароль'
const emailError = 'Не валидный Email'
const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const regEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i

export const validateEmail = {
  required: textRequired,
  pattern: {
    value: regEmail,
    message: emailError,
  },
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
