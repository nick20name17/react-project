import { Header } from '@/components/layout/header'
import ErrorPage from '@/pages/error-page'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router'

export const Layout = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Header />
            <main className="min-h-1000">
                <Outlet />
            </main>
        </ErrorBoundary>
    )
}
