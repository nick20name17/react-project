import { Navigate } from 'react-router'

import { LoginForm } from './components/login-form'
import { routes } from '@/config/routes'
import { useAuth } from '@/providers/auth-provider'

export const LoginPage = () => {
  const { isAuth } = useAuth()

  if (isAuth) {
    return (
      <Navigate
        to={routes.catalogue}
        replace
      />
    )
  }

  return (
    <section className='flex h-[calc(100vh-var(--header-height)-var(--footer-height)-2*var(--layout-y-offset))] flex-col items-center justify-center'>
      <LoginForm />
    </section>
  )
}

