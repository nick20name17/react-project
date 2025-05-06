import { api } from '../api'

import { Category, CategoryPayload, UpdateCategoryPayload } from './categories-types'

export const getCategories = async () => {
  const { data } = await api.get<Category[]>('/categories')
  return data
}

export const getCategorie = async (id: string) => {
  const { data } = await api.get<Category>(`/categories/${id}`)
  return data
}

export const createCategorie = async (payload: CategoryPayload) => {
  const { data } = await api.post('/categories', payload)
  return data
}

export const updateCategorie = async (
  id: number,
  payload: UpdateCategoryPayload
) => {
  const { data } = await api.put(`/categories/${id}`, payload)
  return data
}

export const deleteCategorie = async (id: number) => {
  const { data } = await api.delete(`/categories/${id}`)
  return data
}
