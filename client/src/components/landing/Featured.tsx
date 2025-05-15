import React from 'react'
import TemplateCard from '../ui/TemplateCard'

type Props = {}

const Featured = (props: Props) => {
  return (
    <section id="featured" className="py-16 container-layout bg-white">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured <span className="text-[#019863]">Templates</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionally designed 404 pages that actually improve user experience
            </p>
          </div>
          <div className=" grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {[
              {
                title: "Space Invaders",
                description: "description",
                stats: "Reduces bounce rate by 27%",
                preview: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Retro Arcade",
                description: "description",
                stats: "2.5x longer engagement",
                preview: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Meme Generator",
                description: "description",
                stats: "89% positive feedback",
                preview: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Meme Generator",
                description: "description",
                stats: "89% positive feedback",
                preview: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              },
            ].map((template, i) => (
              <TemplateCard key={i} title={template.title} description={template.description} path={template.preview} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/templates"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-[#019863] hover:bg-[#019863]/10 transition-colors"
            >
              View All Templates
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Featured