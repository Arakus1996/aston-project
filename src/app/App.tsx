import { useEffect } from 'react'

import { useAppDispatch } from '../store/hooks'
import { checkAuth } from '../store/middleware/thunk/userThunk'
import { RootRouter } from '../routes/RootRouter'

export function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  return <RootRouter />
}
