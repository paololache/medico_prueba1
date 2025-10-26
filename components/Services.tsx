
import React from 'react';

const servicesData = [
  {
    icon: 'fa-heart-pulse',
    title: 'Consulta Cardiológica',
    description: 'Evaluación completa del estado cardiovascular, diagnóstico y plan de tratamiento personalizado.'
  },
  {
    icon: 'fa-stethoscope',
    title: 'Chequeos Preventivos',
    description: 'Programas de revisión periódica para la detección temprana de factores de riesgo cardiovascular.'
  },
  {
    icon: 'fa-chart-line',
    title: 'Ecocardiograma',
    description: 'Estudio de ultrasonido para evaluar la estructura y función del corazón con tecnología de punta.'
  },
  {
    icon: 'fa-person-walking',
    title: 'Prueba de Esfuerzo',
    description: 'Evaluación de la respuesta del corazón al ejercicio para diagnosticar enfermedades coronarias.'
  },
  {
    icon: 'fa-file-medical',
    title: 'Monitoreo Holter 24h',
    description: 'Registro continuo del ritmo cardíaco durante 24 horas para detectar arritmias.'
  },
  {
    icon: 'fa-seedling',
    title: 'Asesoría Nutricional',
    description: 'Planes de alimentación enfocados en la salud del corazón y el control de colesterol y presión arterial.'
  }
];

const ServiceCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="text-cyan-600 text-5xl mb-6 inline-block">
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Mis Servicios</h2>
          <p className="text-lg text-gray-600 mt-4">Atención especializada para el cuidado integral de su corazón.</p>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
