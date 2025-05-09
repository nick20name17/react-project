import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { getCategories } from '@/api/categories/categories-service'
import { Category } from '@/api/products/products-types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'

export const CategoryFilter = () => {
  const [category, setCategory] = useQueryState('category', {
    defaultValue: 'all'
  })

  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  if (isLoading) return <Skeleton className='h-9 w-[180px]' />

  return (
    <Select
      value={category}
      onValueChange={setCategory}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Category' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='all'>All categories</SelectItem>
        {categories?.map((item) => (
          <SelectItem
            key={item.id}
            value={item.id.toString()}
          >
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

