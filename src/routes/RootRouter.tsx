import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSelector } from 'react-redux'

const Home = lazy(() => import('../pages/home'))
const Login = lazy(() => import('../pages/Login'))
const Registration = lazy(() => import('../pages/Registration'))
const Movie = lazy(() => import('../pages/Movie'))
const Favorites = lazy(() => import('../pages/Favorites'))
const Search = lazy(() => import('../pages/Search'))
const History = lazy(() => import('../pages/History'))
import { Navbar } from '../componetns/Navbar/Navbar'
import { Preloader } from '../componetns/shared/Preloader/Preloader'
import { ThemeProvider } from '../app/theme/ThemeProvider'
import { Layout } from '../app/Layout/Layout'
import { Fallback } from '../componetns/shared/ErrorFallback/Fallback'
import {
  emailSelect,
  isLodingUserSelect,
} from '../store/selectors/userSelector'

import { SuccessAuthRoute } from './EventRouter'

export function RootRouter() {
  const isLoading = useSelector(isLodingUserSelect)
  const user = useSelector(emailSelect)

  if (isLoading) {
    return <Preloader />
  }

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <ThemeProvider>
          <Layout>
            <Navbar />
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<Movie />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/search' element={<Search />} />
                <Route path='/history' element={<History />} />
                <Route element={<SuccessAuthRoute user={user} />}>
                  <Route path='/login' element={<Login />} />
                  <Route path='/registration' element={<Registration />} />
                </Route>
              </Routes>
            </Suspense>
          </Layout>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
