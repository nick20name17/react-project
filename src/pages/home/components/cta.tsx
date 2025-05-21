import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'

export const Cta = () => {
  return (
    <section className='bg-secondary w-full py-12 md:py-16 lg:py-20'>
      <div className='container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6'>
        <h2 className='text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          Order Now and Get 15% Off Your First Purchase
        </h2>
        <p className='text-secondary-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
          Special offer for new customers. Valid until the end of the month.
        </p>
        <Link to={routes.catalogue}>
          <Button
            size='lg'
            className='mt-4 px-8'
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  )
}

