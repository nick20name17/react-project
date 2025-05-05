import { useQuery } from '@tanstack/react-query'

import { UsersHeader } from './components/users-header'
import { UsersList } from './components/users-list'
import { getUsers } from '@/api/users/users-service'

export const UsersPage = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })

  return (
    <section className='container'>
      <UsersHeader
        users={users || []}
        isLoading={isLoading}
      />

      {isLoading ? '...' : <UsersList users={users || []} />}
    </section>
  )
}
