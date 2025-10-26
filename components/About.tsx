
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sobre Mí</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <img 
              src="https://picsum.photos/seed/doctor_clinic/500/600" 
              alt="Dr. Velez en su consultorio"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div className="lg:w-2/3 text-gray-600 text-lg leading-relaxed">
            <p className="mb-4">
              Con más de 15 años de experiencia en cardiología, mi misión es ofrecer una atención médica integral y personalizada. Me gradué con honores de la Universidad Nacional y completé mi especialización en el prestigioso Hospital Johns Hopkins.
            </p>
            <p className="mb-4">
              Mi enfoque se centra en la prevención de enfermedades cardiovasculares, combinando diagnósticos precisos con planes de tratamiento personalizados. Creo firmemente en la importancia de educar a mis pacientes, dándoles las herramientas para tomar decisiones informadas sobre su salud.
            </p>
            <h3 className="text-2xl font-semibold text-cyan-800 mt-6 mb-3">Mi Filosofía</h3>
            <p>
              "La mejor medicina es la prevención. Mi objetivo no es solo tratar enfermedades, sino guiar a mis pacientes hacia un estilo de vida que promueva un corazón fuerte y una vida plena y activa."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
