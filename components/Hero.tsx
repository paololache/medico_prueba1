
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-cyan-50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-800 leading-tight mb-4">
              Dr. Alejandro Velez
            </h1>
            <p className="text-xl text-cyan-700 font-light mb-6">
              Cardiólogo Especialista en Medicina Preventiva
            </p>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Cuidando su corazón con dedicación y la más avanzada tecnología. Mi compromiso es su bienestar y una vida saludable.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-cyan-600 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-cyan-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              Contactar Ahora
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/doctor_male/600/600" 
              alt="Dr. Alejandro Velez" 
              className="rounded-full w-80 h-80 md:w-96 md:h-96 object-cover mx-auto shadow-2xl border-8 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
