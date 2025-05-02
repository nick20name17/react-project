import { Atom } from 'lucide-react'

import { ModeToggle } from '@/components/common/mode-toggle'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className='sticky top-4 z-10 mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border bg-gray-200/10 bg-clip-padding px-4 backdrop-blur-sm backdrop-filter'>
      <Button size='sm'>
        <Atom />
        <span>Header</span>
      </Button>
      <ModeToggle />
    </header>
  )
}

