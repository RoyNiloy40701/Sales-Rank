import logo from '../assets/logo.svg';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm font-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className=" flex items-center ">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" />

          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-custom-darkNav md:ml-5 lg:ml-8">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#" className="hover:text-primary">About</a>
            <a href="#" className="hover:text-primary">Pricing</a>
            <a href="#" className="hover:text-primary">Consulting</a>
            <a href="#" className="hover:text-primary">Ai Coach</a>
          </nav>

        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <button className="border border-custom-darkNav2 rounded-full px-4 py-[13px]  text-custom-darkNav2 transition">
            <span className="px-4 py-1 rounded font-bold text-[16px] ">Get started</span>
          </button>


        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 font-navbar text-sm font-semibold text-custom-darkNav space-y-2">
          <a href="#" className="block">Home</a>
          <a href="#" className="block ">About</a>
          <a href="#" className="block">Pricing</a>
          <a href="#" className="block">Consulting</a>
          <a href="#" className="block">Ai Coach</a>
          <button className="mt-3 border border-custom-darkNav2 rounded-full px-4 py-1  text-custom-darkNav2">
            <span className=" px-2 py-0.5 rounded font-bold text-[16px]">Get started</span>
          </button>
        </div>
      )}
    </header>
  );
}
