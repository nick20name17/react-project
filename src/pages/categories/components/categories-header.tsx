import { Loader } from 'lucide-react'

import { Category } from '@/api/categories/categories-types'

interface CategoriesHeaderProps {
  categories: Category[]
  isLoading: boolean
}

export const CategoriesHeader = ({
  categories,
  isLoading
}: CategoriesHeaderProps) => {
  return (
    <div>
      <h1 className='flex scroll-m-20 items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Categories{' '}
        {isLoading ? (
          <Loader className='size-4 animate-spin' />
        ) : (
          <span className='text-muted-foreground text-xl font-medium'>
            {categories.length}
          </span>
        )}
      </h1>
    </div>
  )
}
