import { Atom } from 'lucide-react'
import { Link } from 'react-router'

import { ModeToggle } from '@/components/common/mode-toggle'
import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'

export const Header = () => {
  return (
    <header className='sticky top-4 z-10 mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border bg-gray-200/10 bg-clip-padding px-4 backdrop-blur-sm backdrop-filter'>
      <Button
        size='icon'
        className='rounded-full'
      >
        <Atom />
      </Button>
      <HeaderNav />
      <ModeToggle />
    </header>
  )
}

const navItems = Object.entries(routes).map(([key, value]) => {
  console.log(key, value)

  return [key?.charAt(0).toUpperCase() + key.slice(1), value]
})

const HeaderNav = () => {
  return (
    <nav>
      <ul className='flex items-center gap-4'>
        {navItems.map(([key, value]) => (
          <li key={key}>
            <Link to={value}>
              <Button
                variant='ghost'
                size='sm'
              >
                {key}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

