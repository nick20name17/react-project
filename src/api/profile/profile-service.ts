import { api } from '../api'

import { Profile } from './profile-types'

export const getProfile = async () => {
  const { data } = await api.get<Profile>(
    'https://api.escuelajs.co/api/v1/auth/profile'
  )
  return data
}

