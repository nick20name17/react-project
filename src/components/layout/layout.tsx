import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router'

import { Footer } from './footer'
import { Header } from '@/components/layout/header'
import ErrorPage from '@/pages/error-page'

export const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Header />
      <main className='mt-20'>
        <Outlet />
      </main>
      <Footer />
    </ErrorBoundary>
  )
}

