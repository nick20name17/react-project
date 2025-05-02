import { useQuery } from '@tanstack/react-query'

import { CatalogueHeader } from './components/catalogue-header'
import { ProductList } from './components/product-list'
import { getProducts } from '@/api/products/products-service'

export const CataloguePage = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return (
    <section className='container'>
      <CatalogueHeader
        products={products || []}
        isLoading={isLoading}
      />

      {isLoading ? '...' : <ProductList products={products || []} />}
    </section>
  )
}

