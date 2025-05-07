import { useEffect, useState } from 'react'

interface ImageWithFallbackProps extends React.ComponentProps<'img'> {
  fallback?: string
}

const FALL_BACK_IMAGE = '/fallback.webp'

export const ImageWithFallback = ({
  fallback = FALL_BACK_IMAGE,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null)

  useEffect(() => {
    setError(null)
  }, [src])

  //   const [isLoading, setIsLoading] = useState(true)
  //   const handleImageLoad = () => {
  //     setIsLoading(false)
  //   }

  //   if (isLoading) return <Skeleton className={cn('h-full w-full', props.className)} />

  return (
    <img
      onError={setError}
      src={error ? fallback : src}
      {...props}
    />
  )
}

