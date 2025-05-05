import { UserCard } from './user-card'
import { User } from '@/api/users/users-types'

interface UsersListProps {
  users: User[]
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  )
}
