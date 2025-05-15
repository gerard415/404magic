// import { TEMPLATES } from "@/config/constants";
import { useState } from 'react';
import TemplateCard from "../../components/ui/TemplateCard";

type Template = {
  id: string;
  title: string;
  category: 'game' | 'funny' | 'minimalist' | 'branded' | 'seasonal' | 'ai';
  popularity: number;
  description: string;
  image: string;
  demoUrl: string;
};

const TemplatesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  const templates: Template[] = [
    {
      id: 'retro-arcade',
      title: 'Retro Arcade',
      category: 'game',
      popularity: 950,
      description: 'Play Space Invaders or Pac-Man while waiting',
      image: '/placeholder-arcade.jpg',
      demoUrl: '#'
    },
    {
      id: 'escape-maze',
      title: 'Escape the 404 Maze',
      category: 'game',
      popularity: 720,
      description: 'Navigate a maze to find the "Home" button',
      image: '/placeholder-maze.jpg',
      demoUrl: '#'
    },
    {
      id: 'dog-ate-page',
      title: 'Dog Ate This Page',
      category: 'funny',
      popularity: 880,
      description: 'Animated dog chewing a "404" bone',
      image: '/placeholder-dog.jpg',
      demoUrl: '#'
    },
    {
      id: 'cat-ate-page',
      title: 'Cat Ate This Page',
      category: 'funny',
      popularity: 880,
      description: 'Animated dog chewing a "404" bone',
      image: '/placeholder-dog.jpg',
      demoUrl: '#'
    },
    // Add more templates...
  ];

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  const categories = [
    { id: 'all', label: '🏆 Popular' },
    { id: 'game', label: '🎮 Games' },
    { id: 'funny', label: '🤣 Funny' },
    { id: 'minimalist', label: '🖥 Minimalist' },
    { id: 'branded', label: '🎨 Branded' },
    { id: 'seasonal', label: '🎄 Seasonal' },
    { id: 'ai', label: '🤖 AI-Powered' }
  ];

  return (
    <div>
        <div className="max-w-7xl  container-layout py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                404 Page <span className="text-primary">Templates</span>
            </h1>
            <p className=" text-gray-600 max-w-3xl mx-auto">
                Turn lost visitors into engaged users. Pick a template or design your own.
            </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                    ? 'bg-[#4EAD8D] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                >
                {category.label}
                </button>
            ))}
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {filteredTemplates.map((template, i) => (
                // <div 
                //   key={template.id}
                //   className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                //   onMouseEnter={() => setHoveredTemplate(template.id)}
                //   onMouseLeave={() => setHoveredTemplate(null)}
                // >
                //   {/* Template Thumbnail */}
                //   <div className="relative aspect-video bg-gray-100">
                //     <img 
                //       src={template.image} 
                //       alt={template.title}
                //       className="w-full h-full object-cover"
                //     />
                //     {/* Demo overlay */}
                //     {hoveredTemplate === template.id && (
                //       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                //         <a 
                //           href={template.demoUrl}
                //           className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
                //         >
                //           Live Demo
                //         </a>
                //       </div>
                //     )}
                //   </div>

                //   {/* Template Info */}
                //   <div className="p-6">
                //     <div className="flex justify-between items-start mb-2">
                //       <h3 className="text-lg font-semibold text-gray-900">
                //         {template.title}
                //       </h3>
                //       <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                //         {template.popularity}+ uses
                //       </span>
                //     </div>
                    
                //     <p className="text-gray-600 mb-4">{template.description}</p>
                    
                //     <div className="flex gap-3">
                //       <a
                //         href="#"
                //         className="flex-1 text-center py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                //       >
                //         Use Template
                //       </a>
                //       <button className="p-2 text-gray-500 hover:text-indigo-600">
                //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                //           <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                //           <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                //         </svg>
                //       </button>
                //     </div>
                //   </div>
                // </div>
                <TemplateCard key={i} title={template.title} description={template.description} path={template.image} />
            ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need something custom?</h2>
            <p className="text-gray-600 mb-6">Our designers can create a 404 page that perfectly matches your brand</p>
            <a
                href="#"
                className="btn-primary-100"
            >
                Request Custom Design
            </a>
            </div>
      </div>
    </div>
    
  );
};

export default TemplatesPage;