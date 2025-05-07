import { Skeleton } from '@/components/ui/skeleton'

const SKELETON_COUNT = 16

export const TemplateSkeleton = () => {
  return Array.from({ length: SKELETON_COUNT }).map((_, i) => {
    return (
      <Skeleton
        key={i}
        className='h-[481px] w-full rounded-xl'
      />
    )
  })
}

