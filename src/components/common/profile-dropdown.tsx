import { useQuery } from '@tanstack/react-query'
import { LogOutIcon } from 'lucide-react'

import { Skeleton } from '../ui/skeleton'

import { getProfile } from '@/api/profile/profile-service'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/providers/auth-provider'
import { useTheme } from '@/providers/theme-provider'

export const ProfileDropdown = () => {
  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })

  const { setTheme } = useTheme()

  const { logout } = useAuth()

  if (isLoading) {
    return <Skeleton className='size-8 rounded-full' />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='h-auto p-0 hover:bg-transparent'
        >
          <Avatar>
            <AvatarImage
              src={profile?.avatar}
              alt='Profile image'
            />
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='max-w-64'>
        <DropdownMenuLabel className='flex min-w-0 flex-col'>
          <span className='text-foreground truncate text-sm font-medium'>
            {profile?.name}
          </span>
          <span className='text-muted-foreground truncate text-xs font-normal'>
            {profile?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  System
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={logout}>
          <LogOutIcon
            className='size-4 opacity-60'
            aria-hidden='true'
          />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

