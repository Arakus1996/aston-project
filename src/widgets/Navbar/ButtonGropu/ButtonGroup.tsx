import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../../store/hooks'
import { Button } from '../../../shared/ui/Button/Button'
import { removeUser } from '../../../store/slices/userSlice'

export const UserButtonGroup = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <Link to='favorites'>
        <Button text='Избранное' isNotDefaultButton={true} />
      </Link>
      <Link to='history'>
        <Button text='История' isNotDefaultButton={true} />
      </Link>
      <Link to='/'>
        <Button text='Выход' onClick={() => dispatch(removeUser())} />
      </Link>
    </>
  )
}

export const GuestButtonGroup = () => {
  return (
    <>
      <Link to='registration'>
        <Button text='Регистрация' isNotDefaultButton={true} />
      </Link>
      <Link to='login'>
        <Button text='Войти' />
      </Link>
    </>
  )
}
