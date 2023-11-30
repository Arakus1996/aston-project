import { useAppSelector } from '../store/hooks'

export function useAuth() {
  const email = useAppSelector(state => state.userReducer.email)
  return {
    isAuth: !!email,
    email,
  }
}
