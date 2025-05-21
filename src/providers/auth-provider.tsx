import { PropsWithChildren, createContext, useContext, useState } from 'react'

interface AuthContext {
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
  logout: () => void
}

const initialState: AuthContext = {
  isAuth: false,
  setIsAuth: () => {},
  logout: () => {}
}

const authContent = createContext(initialState)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('accessToken'))

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsAuth(false)
  }

  return (
    <authContent.Provider
      value={{
        isAuth,
        setIsAuth,
        logout
      }}
    >
      {children}
    </authContent.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContent)
}

