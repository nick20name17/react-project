import { useId } from 'react'

import { Input } from '@/components/ui/input'

export const PriceInput = (props: React.ComponentProps<typeof Input>) => {
  const id = useId()
  return (
    <div className='*:not-first:mt-2'>
      <div className='relative flex rounded-md shadow-xs'>
        <span className='text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm'>
          $
        </span>
        <Input
          id={id}
          className='-me-px rounded-e-none ps-6 shadow-none'
          placeholder='0.00'
          type='text'
          {...props}
        />
        <span className='border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-e-md border px-3 text-sm'>
          USD
        </span>
      </div>
    </div>
  )
}

