import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { trunc } from '@/utils/text'

interface ItemCardProps {
  badgeText: string
  img: string
  title: string
  description: string
}

export const ItemCard = ({ badgeText, img, title, description }: ItemCardProps) => {
  return (
    <Card className='relative'>
      <Badge
        variant='secondary'
        className='absolute top-2 right-2 text-base'
      >
        <span>{badgeText}</span>
      </Badge>
      <CardHeader>
        <img
          className='aspect-square rounded-md'
          src={img}
          alt={title}
        />
        <CardTitle className='mt-2 text-lg'>{trunc(title, 25)}</CardTitle>
        <CardDescription>{trunc(description, 90)}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className='justify-end'></CardFooter>
    </Card>
  )
}

