import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { ChartBarSquareIcon } from '@heroicons/react/24/solid'

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);





    return (
        <nav className='container-layout py-4'>
            <div className='flex items-center justify-between'>
                {/* Logo */}
                <Link to={'/'} className='text-xl font-bold' >
                    404<span className='text-primary'>magic</span> 
                </Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center ">
                    <li>
                        <Link to="/#howitworks" className="btn-primary-200">How it Works</Link>
                    </li>
                    <li>
                        <Link to="/#featured" className="btn-primary-200">Featured</Link>
                    </li>
                    <li>
                        <Link to="/#pricing" className="btn-primary-200">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/templates" className="btn-primary-200">Templates</Link>
                    </li>
                    
                    
                </ul>

                <div className="flex-center gap-2">
                    <SignedOut>
                        <SignUpButton mode='modal' >
                           <button className="btn-primary-100">Sign Up</button> 
                        </SignUpButton>
                        
                        <SignInButton mode='modal' >
                            <button className=" hidden font-bold md:block btn-primary-200">Log in</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton>
                            <UserButton.MenuItems>
                            <UserButton.Link
                                label="Dashboard"
                                labelIcon={<ChartBarSquareIcon />}
                                href="/dashboard"
                            />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden block cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            <div className={isOpen ? "w-full md:hidden " : "hidden" } id="navbar-default">
                <ul className="font-medium flex flex-col p-4  mt-4 border border-gray-100 rounded-lg bg-white rtl:space-x-reverse  dark:bg-gray-800 dark:border-gray-700">
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/" className="block py-2 px-3 text-gray-900 hover:bg-secondary rounded-sm dark:text-white " aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/#howitworks" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">How it Works</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/#featured" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Featured</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/#pricing" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/templates" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Templates</Link>
                    </li>
                    <SignedOut>
                        <li>
                            <Link onClick={() => setIsOpen(false)} to="/login" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log In</Link>
                        </li>
                    </SignedOut>
                    
                </ul>
                </div>  
        </nav>
    )
}

export default Navbar