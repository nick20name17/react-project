import { NuqsAdapter } from 'nuqs/adapters/react'
import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'

import { LoginPage } from './pages/login/login-page'
import { RequireAuthProvider } from './providers/require-auth-provide'
import { Layout } from '@/components/layout/layout'
import { routes } from '@/config/routes'
import { CataloguePage } from '@/pages/catalogue/catalogue-page'
import { CategoriesPage } from '@/pages/categories/categories-page'
import { HomePage } from '@/pages/home/home-page'
import { UsersPage } from '@/pages/users/users-page'

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
      },
      {
        path: routes.categories,
        element: (
          <RequireAuthProvider>
            <CategoriesPage />
          </RequireAuthProvider>
        )
      },
      {
        path: routes.login,
        element: <LoginPage />
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
  return (
    <NuqsAdapter>
      <RouterProvider router={router} />
    </NuqsAdapter>
  )
}

