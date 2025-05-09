import { PropsWithChildren } from 'react'

import { PaginationBlock } from '../pagination-block'

import { NotFoud } from './not-foud'
import { TemplateHeader } from './template-header'
import { TemplateSkeleton } from './template-skeleton'

export interface PageTemplateProps<T extends { id: number }>
  extends PropsWithChildren {
  data: T[]
  isLoading: boolean
  title: string
  headerActions?: React.ReactNode
  count?: number
}

export const PageTemplate = <T extends { id: number }>({
  data,
  isLoading,
  title,
  children,
  headerActions,
  count
}: PageTemplateProps<T>) => {
  return (
    <section className='container'>
      <TemplateHeader
        title={title}
        data={data || []}
        isLoading={isLoading}
        headerActions={headerActions}
      />
      {data.length === 0 && !isLoading ? <NotFoud className='mt-6' /> : null}
      <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {isLoading ? <TemplateSkeleton /> : children}
      </div>
      {count ? (
        <PaginationBlock
          className='mt-10'
          count={count}
        />
      ) : null}
    </section>
  )
}

