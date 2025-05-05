import { ShoppingCart } from 'lucide-react'

import { User } from '@/api/users/users-types'
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

interface UserCardProps {
  user: User
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card className='relative'>
      <Badge
        variant='secondary'
        className='absolute top-2 right-2 text-base'
      >
        <span>{user.role}</span>
      </Badge>
      <CardHeader>
        <img
          className='aspect-square rounded-md'
          src={user.avatar}
          alt={user.name}
        />
        <CardTitle className='mt-2 text-lg'>{trunc(user.name, 25)}</CardTitle>
        <CardDescription>{trunc(user.email, 90)}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className='justify-end'></CardFooter>
    </Card>
  )
}
