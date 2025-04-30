import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router'
import ErrorPage from '../../pages/error-page'
import { Header } from './header'

export const Layout = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Header />
            <main>
                <Outlet />
            </main>
        </ErrorBoundary>
    )
}
