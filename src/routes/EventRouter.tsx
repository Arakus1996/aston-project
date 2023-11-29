import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  user: string | null
}

export const SuccessAuthRoute = ({ user }: Props) => {
  return <> {user ? <Navigate to='/' /> : <Outlet />}</>
}
