export type AuthType = {
  email: string
  password: string
  setEmail: (value: string) => void
  setPassword: (value: string) => void
  onAuth: () => void
  error?: string
}
