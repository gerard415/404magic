import React from 'react'

type Props = {}

const HowItWorks = (props: Props) => {
  return (
    <section className='container-layout bg-white py-16'>
        <div className=''>
            <div className="text-center mb-16">
                <h2>
                    Copy, <span className="text-primary">Paste</span> and that's it
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Get interactive 404 pages running on your site in just 3 steps
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose Your Template",
                description: "Browse our library of game-inspired 404 pages",
                extra: (
                  <div className="mt-4 py-3 bg-white rounded-lg text-sm">
                    <span className="font-medium text-primary">Popular:</span> Space Invaders, Retro Arcade
                  </div>
                )
              },
              {
                step: "2",
                title: "Add to Your Site",
                description: "Copy-paste one line of code to your error page",
                extra: (
                  <div className="mt-4 py-3 bg-white rounded-lg overflow-x-auto">
                    <pre className="text-xs font-mono text-gray-800 ">
                      {`<script src="https://cdn.404magic.com/embed.js"></script>`}
                    </pre>
                  </div>
                )
              },
              {
                step: "3",
                title: "See Results",
                description: "Enjoy happier users and reduced bounce rates",
                extra: (
                  <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>Average 23% reduction in bounce rates</span>
                  </div>
                )
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.extra}
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default HowItWorks