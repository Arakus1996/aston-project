import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, useEffect, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/Login'))
const Registration = lazy(() => import('./pages/Registration'))
const Movie = lazy(() => import('./pages/Movie'))
const Favorites = lazy(() => import('./pages/Favorites'))
const Search = lazy(() => import('./pages/Search'))
const History = lazy(() => import('./pages/History'))
import { Navbar } from './widgets/Navbar/ui/Navbar'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { checkAuth } from './store/middleware/thunk/userThunk'
import { Preloader } from './shared/ui/Preloader/Preloader'
import { ThemeProvider } from './shared/providers/ThemeProvider'
import { Layout } from './shared/ui/Layout/Layout'
import { Fallback } from './shared/ui/ErrorFallback/Fallback'

export function App() {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.userReducer.isLoading)
  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <BrowserRouter basename='/aston-project'>
      <ErrorBoundary FallbackComponent={Fallback}>
        <ThemeProvider>
          <Layout>
            <Navbar />
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/movie/:id' element={<Movie />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/search' element={<Search />} />
                <Route path='/history' element={<History />} />
              </Routes>
            </Suspense>
          </Layout>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
