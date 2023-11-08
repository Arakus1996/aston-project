////router вынести отдельно??
//// сами роуты тож отдельно

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>f</div>, ///заменим компонентой реакт пока так
    children: [{}],
  },
  {},
])

export function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
