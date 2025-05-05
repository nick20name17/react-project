import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'

import { UsersPage } from './pages/users/users-page'
import { Layout } from '@/components/layout/layout'
import { routes } from '@/config/routes'
import { CataloguePage } from '@/pages/catalogue/catalogue-page'
import { HomePage } from '@/pages/home/home-page'

const NotFoundPage = lazy(() => import('@/pages/not-found-page'))

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: routes.catalogue,
        element: <CataloguePage />
      },
      {
        path: routes.users,
        element: <UsersPage />
      }
    ]
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFoundPage />
      </Suspense>
    )
  }
])

export const App = () => {
  return <RouterProvider router={router} />
}
