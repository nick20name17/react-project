import { Cta } from './components/cta'
import { Features } from './components/features'
import { Feedback } from './components/feedback'
import { Hero } from './components/hero'
import { Showcase } from './components/showcase'

export const HomePage = () => {
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

