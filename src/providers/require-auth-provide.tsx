import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

import { routes } from '@/config/routes'

export const RequireAuthProvider = ({ children }: PropsWithChildren) => {
  const isAuth = !!localStorage.getItem('accessToken')

  if (!isAuth) {
    return (
      <Navigate
        to={routes.login}
        replace
      />
    )
  }

  return children
}

