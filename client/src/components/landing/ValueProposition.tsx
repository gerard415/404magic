import React from 'react'

type Props = {}

const ValueProposition = (props: Props) => {
  return (
    <section className="py-16 container-layout bg-secondary">
        <div className="">
          <div className="text-center mb-16">
            <h2>
              Why <span className="text-primary">404Magic</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Traditional 404 pages lose visitors. Ours turn frustration into engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
            {[
              {
                icon: '📈',
                title: "Reduce Bounce Rates",
                description: "Keep visitors engaged instead of leaving your site"
              },
              {
                icon: '⏱️',
                title: "5-Minute Setup",
                description: "Just copy-paste our code snippet - no coding needed"
              },
              {
                icon: '🎮',
                title: "Delight Users",
                description: "Turn errors into memorable brand experiences"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <span className="text-4xl mb-4 inline-block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ValueProposition