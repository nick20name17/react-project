import { api } from '../api'

import { LoginPayload, LoginResponse } from './auth-types'

export const login = async (payload: LoginPayload) => {
  const { data } = await api.post<LoginResponse>('/auth/login', payload)

  return data
}

