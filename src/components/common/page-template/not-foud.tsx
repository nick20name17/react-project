import { Ban } from 'lucide-react'

import { cn } from '@/lib/utils'

interface NotFoudProps extends React.ComponentProps<'div'> {}
export const NotFoud = ({ className }: NotFoudProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4 rounded-md border p-4',
        className
      )}
    >
      <Ban className='size-5' />
      <span className='text-lg font-medium'> No data found</span>
    </div>
  )
}

