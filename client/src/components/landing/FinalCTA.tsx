import React from 'react'

const FinalCTA = () => {
  return (
        <section className="py-16 container-layout bg-gradient-to-b from-[#494949] to-[#363636] text-white">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-white font-bold mb-6">Ready to Transform Your 404s?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Join 1,200+ developers making their error pages unforgettable
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="cursor-pointer px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Get Started Free
                </button>
                <button className="cursor-pointer px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Book Demo
                </button>
            </div>
            </div>
        </section>
  )
}

export default FinalCTA