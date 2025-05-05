import { api } from '../api'

import { UpdateUserPayload, User, UserPayload } from './users-types'

export const getUsers = async () => {
  const { data } = await api.get<User[]>('/users')
  return data
}

export const getUser = async (id: string) => {
  const { data } = await api.get<User>(`/users/${id}`)
  return data
}

export const createUser = async (payload: UserPayload) => {
  const { data } = await api.post('/users', payload)
  return data
}

export const updateUser = async (id: number, payload: UpdateUserPayload) => {
  const { data } = await api.put(`/users/${id}`, payload)
  return data
}

export const deleteUser = async (id: number) => {
  const { data } = await api.delete(`/users/${id}`)
  return data
}
