import { useId } from 'react'

import { Input } from '@/components/ui/input'

export const UrlInput = (props: React.ComponentProps<typeof Input>) => {
  const id = useId()

  return (
    <div className='*:not-first:mt-2'>
      <div className='relative'>
        <Input
          id={id}
          className='peer ps-16'
          placeholder='google.com'
          type='text'
          {...props}
        />
        <span className='text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50'>
          https://
        </span>
      </div>
    </div>
  )
}

