import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'
import { NotificationsIcon, SearchIcon } from '../ui/Icons'

type Props = {}

const DashboardNavbar = (props: Props) => {
  return (
    <nav className='border-b border-l-0 border-gray-300 flex  '>
        
        <div className='flex flex-1 justify-between items-center h-16 px-4'>
            <div className="relative w-70 ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                    <SearchIcon/>
                </div>
                <input type="search" id="default-search" className="block cursor-pointer hover:bg-gray-100 outline-none w-full p-2 ps-10 text-xs  border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                <p className="text-xs absolute end-2.5 bottom-2 text-gray-500 ">⌘ + F</p>
            </div>
            <div className='flex-center gap-4'>
                <span>
                    <NotificationsIcon/>
                </span>
                <span className='flex-center'>
                    <UserButton 
                        appearance={{
                            elements: {
                                userButtonAvatarBox: {
                                    width: "22px",
                                    height: "22px",
                                },
                            },
                    }}
                    />
                </span>
            </div>
        </div>
    </nav>
  )
}

export default DashboardNavbar