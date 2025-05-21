import { useQuery } from '@tanstack/react-query'

import { Cta } from './components/cta'
import { Features } from './components/features'
import { Feedback } from './components/feedback'
import { Hero } from './components/hero'
import { Showcase } from './components/showcase'
import { getProfile } from '@/api/profile/profile-service'

export const HomePage = () => {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    retry: 1
  })

  console.log(profile)

  return (
    <>
      <Hero />
      <Showcase />
      <Features />
      <Feedback />
      <Cta />
    </>
  )
}

