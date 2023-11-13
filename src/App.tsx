import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/home/Home'
import Navbar from './widgets/Navbar/ui/Navbar'
import { MovieCards } from './entities/MovieCards/MovieCards'
import { useAppDispatch } from './store/hooks'
import { getMovies } from './shared/api/moviesApi'

export function App() {
  const dispatch = useAppDispatch()
  dispatch(getMovies())
  return (
    <BrowserRouter basename='/aston-project'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movieCard' element={<MovieCards />} />
      </Routes>
    </BrowserRouter>
  )
}
