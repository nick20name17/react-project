export interface Category {
  id: number
  name: string
  slug: string
  image: string
}

export interface CategoryPayload {
  id: number
  name: string
  slug: string
  image: string
}

export interface UpdateCategoryPayload {
  name: string
  image: string
}
