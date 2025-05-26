import { api } from '../api'

import {
  Product,
  ProductPayload,
  ProductsQueryParams,
  UpdateProductPayload
} from './products-types'

export const getProducts = async (params: ProductsQueryParams) => {
  const { data } = await api.get<Product[]>('/products/', {
    params
  })
  return data
}

export const getProduct = async (id: string) => {
  const { data } = await api.get<Product>(`/products/${id}`)
  return data
}

export const createProduct = async (payload: ProductPayload) => {
  const { data } = await api.post('/products', payload)
  return data
}

export const updateProduct = async (id: number, payload: UpdateProductPayload) => {
  const { data } = await api.put(`/products/${id}`, payload)
  return data
}

export const removeProduct = async (id: number) => {
  const { data } = await api.delete(`/products/${id}`)
  return data
}

