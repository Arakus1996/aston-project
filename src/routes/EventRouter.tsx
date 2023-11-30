import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  user: string | null
}

export const SuccessAuthRoute = ({ user }: Props) => {
  return <> {user ? <Navigate to='/' /> : <Outlet />}</>
}

export const FailureAuthRoute = ({ user }: Props) => {
  return <> {user ? <Outlet /> : <Navigate to='/' />}</>
}
