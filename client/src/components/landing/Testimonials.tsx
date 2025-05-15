import React from 'react'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Loved by <span className="text-[#019863]">Developers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - here's what our users say
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Our 404 page went from being an embarrassment to our most complimented page. 404Magic is genius!",
                author: "Sarah K.",
                role: "Frontend Lead at TechCorp",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "Implemented in 10 minutes flat. My team thinks I'm a UX wizard now thanks to these templates.",
                author: "Mark T.",
                role: "Solo Founder",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimonials