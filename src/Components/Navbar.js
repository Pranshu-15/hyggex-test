import React, { useState } from 'react';
import logo from '../media/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="flex justify-between mt-5 sticky top-0 bg-white">
      <div className="nav-left">
        <p className="cursor-pointer">
          <img src={logo} alt="logo" />
        </p>
      </div>

      <div className="nav-right hidden md:block">
        <ul className="flex text-stone-900">
          <li className="mr-3.5 hover:text-stone-600 cursor-pointer">Home</li>
          <li className="mr-3.5 hover:text-stone-600 cursor-pointer">Flashcard</li>
          <li className="mr-3.5 hover:text-stone-600 cursor-pointer">Contact</li>
          <li className="mr-3.5 hover:text-stone-600 cursor-pointer">FAQ</li>
          <li className="mr-3.5 hover:text-stone-600 cursor-pointer bg-gradient-to-r from-sky-900 to-blue-900 text-white rounded-xl">
            <button className="px-4 pb-0.5">Login</button>
          </li>
        </ul>
      </div>

      <div className="mr-1 flex md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-16 left-0 w-full h-full z-10 overflow-y-auto bg-white pt-24 transition-all duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 -translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 py-6 space-y-6 sm:px-6">
          <a
            href="/"
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/"
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Flashcard
          </a>
          <a
            href="/"
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
          <a
            href="/"
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            FAQ
          </a>
          <a
            href="/"
            className="text-white bg-gradient-to-r from-sky-900 to-blue-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
    <div className='path flex mt-6 text-xs '>
        
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="navy" class="w-4 h-4">
  <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>

<p>Flashcards</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="navy" class="w-4 h-4">
  <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
<p>Mathematics</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="navy" class="w-4 h-4">
  <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>

<p className='text-blue-950 font-bold'>Relation and Function</p>

    </div>
    </>
  )
}

export default Navbar