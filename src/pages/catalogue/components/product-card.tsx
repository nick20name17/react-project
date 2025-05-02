import { ShoppingCart } from 'lucide-react'

import { Product } from '@/api/products/production-types'
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

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className='relative'>
      <Badge
        variant='secondary'
        className='absolute top-2 right-2 text-base'
      >
        <span>{product.price}$</span>
      </Badge>
      <CardHeader>
        <img
          className='aspect-square rounded-md'
          src={product.images[0]}
          alt={product.title}
        />
        <CardTitle className='mt-2 text-lg'>{trunc(product.title, 25)}</CardTitle>
        <CardDescription>{trunc(product.description, 90)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <span className='text-muted-foreground'>Category:</span>{' '}
          {product.category.name}
        </p>
      </CardContent>
      <CardFooter className='justify-end'>
        <Button size='icon'>
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  )
}

