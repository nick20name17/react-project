import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@/api/users/users-service'
import { ItemCard } from '@/components/common/page-template/item-card'
import { PageTemplate } from '@/components/common/page-template/page-template'

export const UsersPage = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })

  return (
    <PageTemplate
      data={users || []}
      isLoading={isLoading}
      title='Users'
    >
      {users?.map((item) => (
        <ItemCard
          key={item.id}
          badgeText={item.role}
          description={item.email}
          img={item.avatar}
          title={item.name}
        />
      ))}
    </PageTemplate>
  )
}

