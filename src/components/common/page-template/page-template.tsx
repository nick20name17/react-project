import { PropsWithChildren } from 'react'

import { TemplateHeader } from './template-header'

export interface PageTemplateProps<T extends { id: number }>
  extends PropsWithChildren {
  data: T[]
  isLoading: boolean
  title: string
}

export const PageTemplate = <T extends { id: number }>({
  data,
  isLoading,
  title,
  children
}: PageTemplateProps<T>) => {
  return (
    <section className='container'>
      <TemplateHeader
        title={title}
        data={data || []}
        isLoading={isLoading}
      />

      {isLoading ? '...' : children}
    </section>
  )
}

