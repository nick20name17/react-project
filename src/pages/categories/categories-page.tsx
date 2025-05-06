import { useQuery } from '@tanstack/react-query'

import { CategoriesHeader } from './components/categories-header'
import { CategoriesList } from './components/categories-list'
import { getCategories } from '@/api/categories/categories-service'
import type { Category } from '@/api/categories/categories-types'

export const CategoriesPage = () => {
  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  return (
    <section className='container'>
      <CategoriesHeader
        categories={categories}
        isLoading={isLoading}
      />
      {isLoading ? '...' : <CategoriesList categories={categories} />}
    </section>
  )
}
