import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages import with lazy function
const App = lazy(() => import('./App'))
const Loading = lazy(() => import('./pages/Loading'))
const Home = lazy(()=> import('./pages/Home'))

// const About = lazy(() => import('./pages/'))

const router = createBrowserRouter([{
  path: '/',
  element: <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  children: [
    {
      path: '',
      element: <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    },
  ]
}])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
