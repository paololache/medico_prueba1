
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold text-cyan-700">Dr. Alejandro Velez</a>
        
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-cyan-700 transition-colors duration-300">{link.label}</a>
          ))}
          <a href="#contacto" className="bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition-colors duration-300 shadow-sm">Agendar Cita</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4 border-t">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-cyan-700 transition-colors duration-300">{link.label}</a>
            ))}
             <a href="#contacto" onClick={() => setIsOpen(false)} className="bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition-colors duration-300 shadow-sm">Agendar Cita</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
