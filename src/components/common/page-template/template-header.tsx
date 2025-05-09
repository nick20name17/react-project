import { Loader } from 'lucide-react'

import { SearchBar } from '../search-bar'

import { PageTemplateProps } from './page-template'

export const TemplateHeader = <T extends { id: number }>({
  data,
  isLoading,
  title,
  headerActions
}: PageTemplateProps<T>) => {
  return (
    <div className='flex w-full items-center justify-between gap-4'>
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
      <div className='flex items-center gap-4'>
        {headerActions}
        <SearchBar className='w-60' />
      </div>
    </div>
  )
}

