import { useQueryState } from 'nuqs'
import { useDebouncedCallback } from 'use-debounce'

import { Input } from '@/components/ui/input'

interface SearchBarProps extends React.ComponentProps<'input'> {}

const DEBOUNCE_TIME = 300

export const SearchBar = (props: SearchBarProps) => {
  const [search, setSearch] = useQueryState('search', {
    defaultValue: ''
  })

  const debouncedSetSearch = useDebouncedCallback((searchTerm: string) => {
    setSearch(searchTerm)
  }, DEBOUNCE_TIME)

  return (
    <Input
      defaultValue={search}
      onChange={(e) => debouncedSetSearch(e.target.value)}
      type='text'
      placeholder='Search...'
      {...props}
    />
  )
}

