import { Loader } from 'lucide-react'

import { User } from '@/api/users/users-types'

interface UsersHeaderProps {
  users: User[]
  isLoading: boolean
}

export const UsersHeader = ({ users, isLoading }: UsersHeaderProps) => {
  return (
    <div>
      <h1 className='flex scroll-m-20 items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Users{' '}
        {isLoading ? (
          <Loader className='size-4 animate-spin' />
        ) : (
          <span className='text-muted-foreground text-xl font-medium'>
            {users?.length}
          </span>
        )}
      </h1>
    </div>
  )
}
