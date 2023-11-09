import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter basename='/aston-project'>
      <Routes>
        <Route path='/' element={<div>Hello</div>} />
      </Routes>
    </BrowserRouter>
  )
}
