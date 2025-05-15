import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-secondary container-layout text-black py-12">
        <div className="w-full">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 place-items-center w-full">
            <div className='w-full'>
              <h4 className="font-bold text-lg mb-4">Get help</h4>
              <ul className="space-y-2 text-black">
                <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Articles</a></li>
              </ul>
            </div>
            <div className='w-full'>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-black">
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
            <div className='w-full'>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-black">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stuff</a></li>
              </ul>
            </div>
            <div className='w-full'>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-black">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Company</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stuff</a></li>
              </ul>
            </div>
            <div className='w-full'>
              <h4 className="font-bold text-lg mb-4">Become a Partner</h4>
              <ul className="space-y-2 text-black">
                <li><a href="#" className="hover:text-white transition-colors">Become an Expert</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Designer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become an Affiliate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
              </ul>
            </div>
            <div className='w-full xl:w-auto'>
              <h4 className="font-bold text-lg mb-4">Social</h4>
              <ul className="space-y-2 flex flex-col xl:items-end  text-black">
                <li>
                  <a href="#" className="">
                    <svg fill="none" className='h-6 ' viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.16 4.7a4.28 4.28 0 0 0 1.33 5.7 4.2 4.2 0 0 1-1.94-.54v.05a4.29 4.29 0 0 0 3.43 4.2 4.34 4.34 0 0 1-1.93.07 4.3 4.3 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.55a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.64 8.64 0 0 0 22.46 6z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg fill="none" className='h-6' viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.75 7.25a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0zM12 8.25A3.75 3.75 0 1 1 8.25 12 3.75 3.75 0 0 1 12 8.25z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg fill="none" className='h-6' viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 2.25c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.8c.85.004 1.7.115 2.5.338 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .26.17.58.67.48A10.003 10.003 0 0 0 22 12.25c0-5.52-4.48-10-10-10z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg fill="none" className='h-6' viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11v5M8 8h.01M12 11v5m0-2.5a2.5 2.5 0 1 1 5 0v2.5"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg fill="none" className='h-6' viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21.8 8.001a2.751 2.751 0 0 0-1.936-1.947C18.23 5.5 12 5.5 12 5.5s-6.23 0-7.864.554A2.75 2.75 0 0 0 2.2 8.001 28.85 28.85 0 0 0 2 12c0 1.386.075 2.753.2 3.999a2.751 2.751 0 0 0 1.936 1.947C5.77 18.5 12 18.5 12 18.5s6.23 0 7.864-.554a2.75 2.75 0 0 0 1.936-1.947A28.85 28.85 0 0 0 22 12a28.85 28.85 0 0 0-.2-3.999z"/>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M10 15V9l5 3-5 3z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" mt-12 pt-8 text-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2025 404Magic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer