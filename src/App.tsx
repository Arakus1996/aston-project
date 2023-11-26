import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/home/Home' //
import { Navbar } from './widgets/Navbar/ui/Navbar'
import { Login } from './pages/Login/Login'
import { Registration } from './pages/Registration/Registration'
import { Movie } from './pages/Movie/Movie'
import { Favorites } from './pages/Favorites/Favorites'
import { Search } from './pages/Search/Search'

export function App() {
  return (
    <BrowserRouter basename='/aston-project'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}
