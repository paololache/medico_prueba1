
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica de envío de formulario
    alert('Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contacto y Citas</h2>
          <p className="text-lg text-gray-600 mt-4">Estoy aquí para ayudarle. Envíe un mensaje o llame para agendar su cita.</p>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 p-8 rounded-lg shadow-xl">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-cyan-800 mb-6">Información de Contacto</h3>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-center gap-4">
                <i className="fas fa-map-marker-alt text-cyan-600 text-2xl w-6 text-center"></i>
                <span>Av. Principal 123, Consultorio 404, Ciudad Médica</span>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-phone text-cyan-600 text-2xl w-6 text-center"></i>
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-envelope text-cyan-600 text-2xl w-6 text-center"></i>
                <span>contacto@drvelezcardio.com</span>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-clock text-cyan-600 text-2xl w-6 text-center"></i>
                <span>Lunes a Viernes: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
             <div className="mt-8 rounded-lg overflow-hidden h-64">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.945638515024!2d-74.08375368523803!3d4.60381899665518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1a8e1e7c5%3A0x8e8b091f0f0c8a2a!2sPlaza%20de%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1678886470123!5m2!1ses-419!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación">
              </iframe>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-cyan-800 mb-6">Enviar un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
               <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors duration-300 shadow-md">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
