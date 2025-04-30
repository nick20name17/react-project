import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from './components/layout/layout'
import { routes } from './config/routes'
import { HomePage } from './pages/home-page'

const NotFoundPage = lazy(() => import('./pages/not-found-page'))

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <NotFoundPage />
            </Suspense>
        ),
    },
])

export const App = () => {
    return <RouterProvider router={router} />
}
