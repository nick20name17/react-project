import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'

export const Hero = () => {
  return (
    <section className='w-full bg-gradient-to-r py-12 md:pb-16 lg:pb-20'>
      <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
            The Ultimate Shopping Experience
          </h1>
          <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Discover premium products at unbeatable prices. Shop with confidence with
            our secure checkout and fast delivery.
          </p>
          <div className='flex flex-col gap-2 min-[400px]:flex-row'>
            <Link to={routes.catalogue}>
              <Button
                size='lg'
                className='px-8'
              >
                Shop Now
              </Button>
            </Link>
            <a href='#features'>
              <Button
                size='lg'
                variant='outline'
                className='px-8'
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
        <div className='flex justify-center'>
          <img
            src='/fallback.webp'
            alt='Shopping experience with happy customers'
            className='rounded-lg object-cover'
          />
        </div>
      </div>
    </section>
  )
}

