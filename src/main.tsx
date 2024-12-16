import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from './components/Loading/Loading'

// pages import with lazy function
const App = lazy(()=> import('./App'))


const router = createBrowserRouter([{
  path: '/',
  element: <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  children: []
}])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
