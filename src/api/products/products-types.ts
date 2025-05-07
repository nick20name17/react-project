export interface Product {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: Category
  images: string[]
}

export interface ProductsQueryParams {
  title?: string
  limit?: number
  offset?: number
  categoryId?: number
}

export interface ProductPayload {
  title: string
  price: number
  description: string
  categoryId: number
  images: string[]
}

export interface UpdateProductPayload {
  title: string
  price: number
}

export interface Category {
  id: number
  name: string
  image: string
  slug: string
}

