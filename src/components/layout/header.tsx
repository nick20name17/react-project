import { Atom, LogOut } from 'lucide-react'
import { Link, NavLink } from 'react-router'

import { ModeToggle } from '@/components/common/mode-toggle'
import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'
import { useAuth } from '@/providers/auth-provider'

export const Header = () => {
  const { isAuth, logout } = useAuth()

  return (
    <header className='bg-background/55 sticky top-4 z-10 mx-auto flex h-[var(--header-height)] w-full max-w-3xl items-center justify-between rounded-full border bg-clip-padding px-4 backdrop-blur-md backdrop-filter'>
      <Link to={routes.home}>
        <Button
          size='icon'
          className='rounded-full'
        >
          <Atom />
        </Button>
      </Link>
      <HeaderNav />
      <ModeToggle />
      {isAuth && (
        <Button
          className='rounded-full'
          variant='ghost'
          size='icon'
          onClick={logout}
        >
          <LogOut />
        </Button>
      )}
    </header>
  )
}

const navItems = Object.entries(routes).map(([key, value]) => {
  return [key?.charAt(0).toUpperCase() + key.slice(1), value]
})

const HeaderNav = () => {
  const { isAuth } = useAuth()

  return (
    <nav>
      <ul className='flex items-center gap-4'>
        {navItems.map(([key, value]) => {
          if (isAuth && value === routes.login) return

          if (!isAuth && value === routes.categories) return
          return (
            <li key={key}>
              <NavLink
                to={value}
                className={({ isActive }) => {
                  return isActive ? 'text-primary' : ''
                }}
              >
                <Button
                  variant='ghost'
                  size='sm'
                >
                  {key}
                </Button>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

