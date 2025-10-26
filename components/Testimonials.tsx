
import React from 'react';

const testimonialsData = [
  {
    quote: "El Dr. Velez es un profesional excepcional. Su trato humano y su claridad para explicar mi condición me dieron una gran tranquilidad. ¡Lo recomiendo totalmente!",
    name: "Laura Gómez",
    image: "https://picsum.photos/seed/woman1/100/100"
  },
  {
    quote: "Gracias al diagnóstico temprano y al tratamiento del Dr. Velez, he podido retomar mis actividades deportivas sin preocupaciones. Su enfoque preventivo es invaluable.",
    name: "Carlos Rodríguez",
    image: "https://picsum.photos/seed/man1/100/100"
  },
  {
    quote: "La atención en el consultorio es de primer nivel. El Dr. Velez se toma el tiempo necesario con cada paciente. Me sentí escuchada y muy bien atendida.",
    name: "Ana Martínez",
    image: "https://picsum.photos/seed/woman2/100/100"
  }
];

const TestimonialCard: React.FC<{ quote: string; name: string; image: string }> = ({ quote, name, image }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-cyan-100" />
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <div className="w-16 h-0.5 bg-cyan-500 mb-4"></div>
    <h4 className="font-bold text-cyan-800">{name}</h4>
    <p className="text-sm text-gray-500">Paciente Satisfecho</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Testimonios de Pacientes</h2>
          <p className="text-lg text-gray-600 mt-4">La confianza y satisfacción de mis pacientes es mi mayor recompensa.</p>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map(testimonial => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
