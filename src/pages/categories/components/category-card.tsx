import { ShoppingCart } from 'lucide-react'

import { Category } from '@/api/categories/categories-types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { trunc } from '@/utils/text'

interface CategoryCardProps {
  category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className='relative'>
      <Badge
        variant='secondary'
        className='absolute top-2 right-2 text-base'
      >
        <span>{category.name}</span>
      </Badge>
      <CardHeader>
        <img
          className='aspect-square rounded-md'
          src={category.image}
          alt={category.name}
        />
        <CardTitle className='mt-2 text-lg'>{trunc(category.name, 25)}</CardTitle>
        <CardDescription>{trunc(category.slug, 90)}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className='justify-end'></CardFooter>
    </Card>
  )
}
