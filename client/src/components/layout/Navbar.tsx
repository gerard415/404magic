import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';

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
                <ul className="hidden lg:flex items-center ">
                    <li>
                        <button className="btn-primary-200">
                            <a href="#howitworks">How it Works</a>
                        </button>
                    </li>
                    <li>
                        <button className="btn-primary-200">
                            <a href="#featured">Examples</a>
                        </button>
                    </li>
                    <li>
                        <button className='btn-primary-200'>
                            <a href="#pricing">Prices</a>
                        </button>
                    </li>
                    <li>
                        <Link to="/templates" className="btn-primary-200">Templates</Link>
                    </li>
                    
                    
                </ul>

                <div className="flex-center gap-2">
                    <button className="btn-primary-100">Sign Up</button>
                    <button className=" hidden font-bold lg:block btn-primary-200">
                        Log in
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        className="lg:hidden block"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>  
        </nav>
    )
}

export default Navbar