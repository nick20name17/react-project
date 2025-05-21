import { useQuery } from '@tanstack/react-query'

import { getProducts } from '@/api/products/products-service'
import { ItemCard } from '@/components/common/page-template/item-card'
import { TemplateSkeleton } from '@/components/common/page-template/template-skeleton'

export const Showcase = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      getProducts({
        offset: 0,
        limit: 8
      })
  })

  return (
    <section className='w-full py-12 md:py-16 lg:py-20'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Featured Products
          </h2>
          <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Check out our most popular items loved by our customers
          </p>
        </div>
        <div className='grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3'>
          {isLoading ? (
            <TemplateSkeleton />
          ) : (
            products?.map((product) => {
              return (
                <ItemCard
                  img={product.images[0]}
                  title={product.title}
                  badgeText={product.price + '$'}
                  key={product.id}
                  description={product.description}
                />
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}

