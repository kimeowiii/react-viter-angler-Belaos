import React from 'react'

const Navigation = () => {
  return (
    <>
        {/* Navigation */}
        <nav className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎣</span>
              <h1 className="text-2xl font-bold">Angler's Paradise</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-200 transition">
                Home
              </a>
              <a href="#spots" className="hover:text-blue-200 transition">
                Fishing Spots
              </a>
              <a href="#gear" className="hover:text-blue-200 transition">
                Gear Guide
              </a>
              <a href="#tips" className="hover:text-blue-200 transition">
                Tips
              </a>
              <a href="#contact" className="hover:text-blue-200 transition">
                Contact
              </a>
            </div>
            <button className="md:hidden text-2xl">☰</button>
          </div>
        </nav>

    </>
  )
}

export default Navigation
