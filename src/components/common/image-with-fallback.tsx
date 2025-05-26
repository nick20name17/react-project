import { Image } from 'lucide-react'
import { useState } from 'react'

import { Skeleton } from '../ui/skeleton'

import { cn } from '@/lib/utils'

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

export const ImageWithFallback = (props: ImageWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError || !props.src)
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2',
          props.className
        )}
      >
        <Image className='text-grey-300 size-8' />
        <span className='text-grey-500 text-xs'>Image Not Found</span>
      </div>
    )

  return (
    <>
      {isLoading && <Skeleton className={props.className} />}
      <img
        {...props}
        className={cn(props.className, isLoading || hasError ? 'hidden' : '')}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  )
}

