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
      {products?.map((item) => (
        <ItemCard
          key={item.id}
          badgeText={item.price?.toString() + '$'}
          description={item.description}
          img={item.images[0]}
          title={item.title}
        />
      ))}
    </PageTemplate>
  )
}

