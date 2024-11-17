import React from 'react'
import StaggeredDropDown from './StaggeredDropDown';

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 backdrop-blur-sm flex items-center justify-between px-6 py-3 text-white">
      <h1 className="text-2xl font-bold">Innova8ify</h1>
        <div className='md:flex gap-5 hidden'>
      <button
        onClick={() => {
          document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="text-sm text-zinc-400"
      >
        Services
      </button>
      <button
        onClick={() => {
          document.getElementById("portfolio")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="text-sm text-zinc-400"
      >
        Portfolio
      </button>
      <button
        onClick={() => {
          document.getElementById("contact-us")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="text-sm text-zinc-400"
      >
        Contact
      </button>
        </div>
        <div className='md:hidden flex'>
            <StaggeredDropDown/>
        </div>
    </nav>
  )
}

export default Navbar
