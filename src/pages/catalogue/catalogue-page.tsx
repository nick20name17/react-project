import { useQuery } from '@tanstack/react-query'
import { Heart, ShoppingCart } from 'lucide-react'
import { useQueryState } from 'nuqs'

import { getProducts } from '@/api/products/products-service'
import { ItemCard } from '@/components/common/page-template/item-card'
import { PageTemplate } from '@/components/common/page-template/page-template'
import { Button } from '@/components/ui/button'

export const CataloguePage = () => {
  const [search] = useQueryState('search', {
    defaultValue: ''
  })

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', search],
    queryFn: () =>
      getProducts({
        title: search ? search : undefined
      })
  })

  return (
    <PageTemplate
      data={products || []}
      isLoading={isLoading}
      title='Products'
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

