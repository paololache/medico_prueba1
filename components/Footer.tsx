
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-bold text-cyan-400 mb-2">Dr. Alejandro Velez</p>
        <p className="text-gray-400 mb-6">Cardiólogo Profesional</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Dr. Alejandro Velez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
