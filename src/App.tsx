import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Navbar } from './widgets/Navbar/ui/Navbar'
import { Login } from './pages/Login/Login'
import { Registration } from './pages/Registration/Registration'

export function App() {
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
