import { useQuery } from '@tanstack/react-query'

import { getCategories } from '@/api/categories/categories-service'
import type { Category } from '@/api/categories/categories-types'
import { ItemCard } from '@/components/common/page-template/item-card'
import { PageTemplate } from '@/components/common/page-template/page-template'

export const CategoriesPage = () => {
  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  return (
    <PageTemplate
      data={categories || []}
      isLoading={isLoading}
      title='Products'
    >
      {categories?.map((item) => (
        <ItemCard
          key={item.id}
          img={item.image}
          title={item.name}
        />
      ))}
    </PageTemplate>
  )
}

