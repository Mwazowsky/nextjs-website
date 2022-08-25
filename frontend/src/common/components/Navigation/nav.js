import React, { useState, useEffect } from "react"
import { useTheme } from 'next-themes'
import Link from "next/link"

const Nav = () => {
  const [stickyClass, setStickyClass] = useState('');
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('fixed w-full top-0 z-50') : setStickyClass('');
    }
  };

  return (
    <nav className={`nav ${stickyClass} border-slate-600 py border-b bg-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-between px-10 py-1 drop-shadow-sm dark:shadow-slate-300`}>
      <Link href="/">
        <a className="flex flex-no-shrink items-center mr-6 py-3 text-slate-900 dark:text-white ease-out duration-500 transition-all">
          <svg className="dark:fill-white fill-slate-900 h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 716 895">
            <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
            <path className="text-white dark:fill-slate-900 fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
            <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
          </svg>
          <span className="font-semibold text-xl tracking-tight">E[N]dCript</span>
        </a>
      </Link>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li className="border-t md:border-none">
          <Link href="/">
            <button className="relative btn4 py-5 text-gray-500 capitalize tracking-wider leading-none overflow-hidden block no-underline md:inline-block px-4 ease-out duration-500 transition-all hover:text-slate-900 dark:hover:text-white font-bold" type="button">
              <span className="absolute inset-x-0 h-0.5 bottom-2 bg-slate-900 dark:bg-white"></span>
              Home
            </button>
          </Link>
          <Link href="/topics">
            <button className="relative btn4 py-5 text-gray-500 capitalize tracking-wider leading-none overflow-hidden block no-underline md:inline-block px-4 ease-out duration-500 transition-all hover:text-slate-900 dark:hover:text-white font-bold" type="button">
              <span className="absolute inset-x-0 h-0.5 bottom-2 bg-slate-900 dark:bg-white"></span>
              Topics
            </button>
          </Link>
        </li>
      </ul>
      <a onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="relative md:inline-flex hidden items-center justify-start px-2 py-1 cursor-pointer mr-2 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-white group">
        <span className="w-48 h-48 rounded-lg rotate-[-40deg] bg-gray-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Toggle</span>
      </a>
    </nav>
  )
}

export default Nav
