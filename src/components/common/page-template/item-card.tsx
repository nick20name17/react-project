import { PropsWithChildren } from 'react'

import { ImageWithFallback } from '../image-with-fallback'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { trunc } from '@/utils/text'

interface ItemCardProps extends PropsWithChildren {
  badgeText?: string
  img: string
  title: string
  description?: string
}

export const ItemCard = ({
  badgeText,
  img,
  title,
  description,
  children
}: ItemCardProps) => {
  return (
    <Card className='relative'>
      {badgeText ? (
        <Badge
          variant='secondary'
          className='absolute top-2 right-2 text-base'
        >
          <span>{badgeText}</span>
        </Badge>
      ) : null}
      <CardHeader>
        <ImageWithFallback
          className='aspect-square w-full rounded-md'
          src={img}
          alt={title}
        />
        <CardTitle className='mt-2 text-lg'>{trunc(title, 25)}</CardTitle>
        {description ? (
          <CardDescription>{trunc(description, 90)}</CardDescription>
        ) : null}
      </CardHeader>
      <CardFooter>{children}</CardFooter>
    </Card>
  )
}

