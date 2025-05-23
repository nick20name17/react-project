import { useQuery } from '@tanstack/react-query'
import { Heart, ShoppingCart } from 'lucide-react'
import { useQueryState } from 'nuqs'

import { CategoryFilter } from './components/category-filter'
import { getProducts } from '@/api/products/products-service'
import { ItemCard } from '@/components/common/page-template/item-card'
import { PageTemplate } from '@/components/common/page-template/page-template'
import { Button } from '@/components/ui/button'
import { DEFAULT_LIMIT } from '@/config/api'

export const CataloguePage = () => {
  const [search] = useQueryState('search', {
    defaultValue: ''
  })

  const [offset] = useQueryState('offset', {
    defaultValue: 0,
    parse: (value) => +value
  })

  const [limit] = useQueryState('limit', {
    defaultValue: DEFAULT_LIMIT,
    parse: (value) => +value
  })

  const [category] = useQueryState('category', {
    defaultValue: ''
  })

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', search, category, offset, limit],
    queryFn: () =>
      getProducts({
        title: search ? search : undefined,
        categoryId: !category || category === 'all' ? undefined : +category,
        offset,
        limit
      })
  })

  return (
    <PageTemplate
      data={products || []}
      isLoading={isLoading}
      headerActions={<CategoryFilter />}
      title='Products'
      count={51}
    >
      {products?.map((item) => (
        <ItemCard
          key={item.id}
          description={item.description}
          img={item.images[0]}
          title={item.title}
        >
          <div className='flex w-full items-center justify-between gap-4'>
            <div>{item.price?.toString() + '$'}</div>
            <div className='flex items-center gap-2'>
              <Button
                size='icon'
                variant='outline'
              >
                <Heart />
              </Button>
              <Button size='icon'>
                <ShoppingCart />
              </Button>
            </div>
          </div>
        </ItemCard>
      ))}
    </PageTemplate>
  )
}

