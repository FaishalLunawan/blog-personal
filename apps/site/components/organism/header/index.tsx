'use client'
import React from 'react'
import Link from 'next/link'
import { headerData } from '@/data/headerData'
import useMode from '@/utils/themeMode'
import MobileNav from './MobileNav'

/**
 * Our Header is a reusable UI component that used to represent top navbar section of any website.
 *
 * @property website logo, all page title with navigation link, search field  and a theme changing button.
 *
 * @returns React component that can be easily integrated into any web application.
 */
const Header = () => {
   const { theme, setTheme, themes, hydrationError } = useMode()
   const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)

   return (
     <header className="sticky top-0 z-50 bg-base-100duration-300">
         <div className="container mx-auto font-work">
            {/* Ganti dengan navbar baru */}
            <div className="navbar bg-base-100 shadow-sm">
               {/* Navbar Start - Dropdown Menu */}
               <div className="navbar-start">
                  <div className="dropdown">
                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           className="h-5 w-5" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor"
                        >
                           <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M4 6h16M4 12h16M4 18h7" 
                           />
                        </svg>
                     </div>
                     <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                     >
                        {headerData.map((item: any, index: number) => (
                           <li key={index}>
                              <Link 
                                 href={item.link}
                                 // onClick={() => document.activeElement?.blur()}
                              >
                                 {item.name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Navbar Center - Logo */}
               <div className="navbar-center">
                  <Link href="/" className="btn btn-ghost text-xl">
                     <Logo />
                  </Link>
               </div>

               {/* Navbar End - Search, Theme, Notifications */}
               <div className="navbar-end">
                  {/* Search Button */}
                  <button className="btn btn-ghost btn-circle">
                     <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                     >
                        <path 
                           strokeLinecap="round" 
                           strokeLinejoin="round" 
                           strokeWidth="2" 
                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                     </svg>
                  </button>

                  {/* Theme Switcher */}
                  <div className="dropdown dropdown-end">
                     <div 
                        tabIndex={0} 
                        role="button" 
                        className="btn btn-ghost btn-circle"
                     >
                        <div className="indicator">
                           <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              className="w-5 h-5 text-base-content"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M441 336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.17 266.17 0 0086.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                           </svg>
                        </div>
                     </div>
                     <ul
                        tabIndex={0}
                        className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"
                     >
                        {themes.map((item) => (
                           <li
                              data-theme={item}
                              key={item}
                              className={`capitalize w-full flex mb-2 rounded-md last-of-type:mb-0 justify-between items-center px-2 py-2 hover:bg-base-300 transition-all duration-300 cursor-pointer`}
                              onClick={() => {
                                 setTheme(item)
                              }}
                           >
                              <span className="text-base-content flex items-center gap-2">
                                 {hydrationError && theme === item && (
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="currentColor"
                                       className="w-3 h-3 text-primary"
                                    >
                                       <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                                    </svg>
                                 )}
                                 {item}
                              </span>
                              <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                                 <div className="bg-primary w-2 rounded"></div>
                                 <div className="bg-secondary w-2 rounded"></div>
                                 <div className="bg-accent w-2 rounded"></div>
                                 <div className="bg-neutral w-2 rounded"></div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Notification Button */}
                  <button className="btn btn-ghost btn-circle">
                     <div className="indicator">
                        <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           className="h-5 w-5" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor"
                        >
                           <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                           />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </header>
   )
}

// Header logo svg component
export const Logo = ({ ...props }) => (
  <img 
    src="/frontera (1).png" 
    alt="logo" 
    width="100"
    height="24"
    {...props} 
  />
);

// Site Favicon svg component
export const Favicon = ({ ...props }) => (
   <svg
      width="158"
      height="36"
      viewBox="0 0 158 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      {/* ... SVG paths tetap sama ... */}
      <path
         d="M45.0024 27.8182V9.53181H46.732L53.6504 19.4973H52.6868L59.5805 9.53181H61.31V27.8182H59.3334V12.1827L59.9758 12.4282L53.2057 22.1727H53.1068L46.3614 12.4282L46.9791 12.1827V27.8182H45.0024Z"
         fill="currentColor"
      />
      {/* ... Sisanya tetap sama ... */}
   </svg>
)

export default Header