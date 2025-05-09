import { useQueryState } from 'nuqs'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { DEFAULT_LIMIT, LIMIT_OPTIONS } from '@/config/api'
import { cn } from '@/lib/utils'

interface PaginationBlockProps {
  className?: string
  count: number
}

export const PaginationBlock = ({ className, count }: PaginationBlockProps) => {
  const [offset, setOffset] = useQueryState('offset', {
    defaultValue: 0,
    parse: (value) => +value
  })

  const [limit] = useQueryState('limit', {
    defaultValue: DEFAULT_LIMIT,
    parse: (value) => +value
  })

  const handlePageChange = (page: number) => {
    setOffset(page * limit)
  }

  const handleNextPage = () => {
    setOffset(offset + limit)
  }

  const handlePreviousPage = () => {
    setOffset(offset - limit)
  }

  const isNextAvailable = offset + limit < count
  const isPreviousAvailable = offset > 0

  const totalPages = Math.ceil(count / limit)

  return (
    <div className={cn('flex items-center justify-between gap-4', className)}>
      <SelectLimit />
      <Pagination className='w-full justify-end'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePreviousPage}
              disabled={!isPreviousAvailable}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => {
            return (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => handlePageChange(i)}
                  isActive={i === Math.floor(offset / limit)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )
          })}
          <PaginationItem>
            <PaginationNext
              disabled={!isNextAvailable}
              onClick={handleNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

const SelectLimit = () => {
  const [limit, setLimit] = useQueryState('limit', {
    defaultValue: DEFAULT_LIMIT?.toString()
  })

  return (
    <Select
      value={limit}
      onValueChange={setLimit}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Theme' />
      </SelectTrigger>
      <SelectContent>
        {LIMIT_OPTIONS.map((item) => (
          <SelectItem
            key={item}
            value={item.toString()}
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

