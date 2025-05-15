import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router'

import { Footer } from './footer'
import { Header } from '@/components/layout/header'
import { Toaster } from '@/components/ui/sonner'
import ErrorPage from '@/pages/error-page'

export const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Header />
      <main className='mt-[var(--layout-y-offset)]'>
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors />
    </ErrorBoundary>
  )
}

