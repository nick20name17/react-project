import { useQuery } from '@tanstack/react-query'

import { getProducts } from '@/api/products/products-service'
import { ItemCard } from '@/components/common/page-template/item-card'
import { PageTemplate } from '@/components/common/page-template/page-template'

export const CataloguePage = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return (
    <PageTemplate
      data={products || []}
      isLoading={isLoading}
      title='Products'
    >
      <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products?.map((item) => (
          <ItemCard
            key={item.id}
            badgeText={item.price?.toString() + '$'}
            description={item.description}
            img={item.images[0]}
            title={item.title}
          />
        ))}
      </div>
    </PageTemplate>
  )
}

