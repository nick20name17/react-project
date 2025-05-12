import { Star } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    location: 'New York',
    rating: 5,
    text: "I'm extremely satisfied with my purchase. The quality is outstanding and the shipping was faster than expected. Will definitely shop here again!",
    avatar: '/avatar-emily.png'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco',
    rating: 4,
    text: "Great products and excellent customer service. The only reason I'm not giving 5 stars is because I had to wait a bit longer for delivery than expected.",
    avatar: '/avatar-michael.png'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    location: 'London',
    rating: 5,
    text: 'This is my go-to online store now. The prices are competitive and the quality is top-notch. Their customer support team is also very helpful.',
    avatar: '/avatar-sarah.png'
  }
]

export const Feedback = () => {
  return (
    <section className='w-full py-12 md:py-16 lg:py-20'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Customer Reviews
          </h2>
          <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            What our customers say about their shopping experience
          </p>
        </div>
        <div className='grid grid-cols-1 gap-6 pt-12 md:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className='overflow-hidden'
            >
              <CardContent className='p-6'>
                <div className='flex items-center space-x-1'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className='mt-4 text-gray-500'>{testimonial.text}</p>
                <div className='mt-6 flex items-center space-x-4'>
                  <img
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                  <div>
                    <p className='text-sm font-medium'>{testimonial.name}</p>
                    <p className='text-xs text-gray-500'>{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

