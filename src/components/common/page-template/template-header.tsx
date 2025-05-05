import { Loader } from 'lucide-react'

import { PageTemplateProps } from './page-template'

export const TemplateHeader = <T extends { id: number }>({
  data,
  isLoading,
  title
}: PageTemplateProps<T>) => {
  return (
    <div>
      <h1 className='flex scroll-m-20 items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        <span>{title}</span>
        {isLoading ? (
          <Loader className='size-4 animate-spin' />
        ) : (
          <span className='text-muted-foreground text-xl font-medium'>
            {data?.length}
          </span>
        )}
      </h1>
    </div>
  )
}

