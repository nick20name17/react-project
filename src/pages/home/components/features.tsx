import { CreditCard, FastForward, HeartPlus, ShieldUser } from 'lucide-react'

const benefits = [
  {
    id: 1,
    title: 'Fast Shipping',
    description: 'Free delivery on orders over $50 with 2-3 day shipping',
    icon: <FastForward />
  },
  {
    id: 2,
    title: 'Quality Guarantee',
    description: 'All products come with a 2-year warranty and 30-day returns',
    icon: <ShieldUser />
  },
  {
    id: 3,
    title: 'Secure Payments',
    description: 'Shop with confidence with our encrypted payment system',
    icon: <CreditCard />
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Our customer service team is available around the clock',
    icon: <HeartPlus />
  }
]

export const Features = () => {
  return (
    <section
      className='w-full py-12 md:py-16 lg:py-20'
      id='features'
    >
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Why Shop With Us
          </h2>
          <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            We offer the best shopping experience for our customers
          </p>
        </div>
        <div className='grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-4'>
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className='flex flex-col items-center space-y-2 text-center'
            >
              <div className='bg-primary/20 flex h-16 w-16 items-center justify-center rounded-full'>
                {benefit.icon}
              </div>
              <h3 className='text-xl font-bold'>{benefit.title}</h3>
              <p className='text-sm text-gray-500'>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

