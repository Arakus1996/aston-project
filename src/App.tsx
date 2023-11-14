import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

import { Home } from './pages/home/Home'
import { Navbar } from './widgets/Navbar/ui/Navbar'
import { useAppDispatch } from './store/hooks'
import { getMovies } from './shared/api/moviesApi'

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
      </Routes>
    </BrowserRouter>
  )
}
