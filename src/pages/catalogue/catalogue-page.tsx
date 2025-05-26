import { useQuery } from '@tanstack/react-query'
import { Heart, ShoppingCart } from 'lucide-react'
import { useQueryState } from 'nuqs'

import { CreateProduct } from './components/actions/create-product'
import { CategoryFilter } from './components/category-filter'
import { getProducts } from '@/api/products/products-service'
import { ItemCard } from '@/components/common/page-template/item-card'
import { PageTemplate } from '@/components/common/page-template/page-template'
import { Button } from '@/components/ui/button'
import { DEFAULT_LIMIT } from '@/config/api'
import { useAuth } from '@/providers/auth-provider'

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

  const { isAuth } = useAuth()

  return (
    <PageTemplate
      data={products || []}
      isLoading={isLoading}
      headerActions={
        <div className='flex items-center gap-4'>
          {isAuth ? <CreateProduct /> : null}
          <CategoryFilter />
        </div>
      }
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

