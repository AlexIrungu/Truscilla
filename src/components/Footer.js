import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-300 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation Links */}
        <div className="flex justify-center space-x-8 mb-16">
          <button className="text-white hover:text-stone-100 text-sm font-light tracking-wider uppercase transition-colors duration-300">
            PRIVACY
          </button>
          <button className="text-white hover:text-stone-100 text-sm font-light tracking-wider uppercase transition-colors duration-300">
            PRESS
          </button>
          <button className="text-white hover:text-stone-100 text-sm font-light tracking-wider uppercase transition-colors duration-300">
            SUBSCRIBE
          </button>
        </div>

        {/* Main Content */}
        <div className="flex justify-between items-end">
          {/* Logo/Brand */}
          <div className="flex-1">
            <h1 className="text-white text-4xl font-light tracking-wide">
              IJEOMA
              <span className="font-serif italic ml-2 text-3xl">Kola</span>
            </h1>
          </div>

          {/* Copyright */}
          <div className="flex-1 text-right">
            <p className="text-white text-sm font-light tracking-wider">
              © 2022 IJEOMA KOLA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}