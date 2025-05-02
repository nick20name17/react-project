import { Loader } from 'lucide-react'

import { Product } from '@/api/products/production-types'

interface CatalogueHeaderProps {
  products: Product[]
  isLoading: boolean
}

export const CatalogueHeader = ({ products, isLoading }: CatalogueHeaderProps) => {
  return (
    <div>
      <h1 className='flex scroll-m-20 items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Catalogue{' '}
        {isLoading ? (
          <Loader className='size-4 animate-spin' />
        ) : (
          <span className='text-muted-foreground text-xl font-medium'>
            {products?.length}
          </span>
        )}
      </h1>
    </div>
  )
}

