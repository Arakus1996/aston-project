import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

import { Home } from './pages/Home/Home'
import { Navbar } from './widgets/Navbar/ui/Navbar'
import { useAppDispatch } from './store/hooks'
import { getMovies } from './shared/api/moviesApi'
import { Login } from './pages/Login/Login'
import { Registration } from './pages/Registration/Registration'

export function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return (
    <BrowserRouter basename='/aston-project'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}
