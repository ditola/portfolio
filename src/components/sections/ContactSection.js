import React from 'react';

const ContactSection = () => (
  <section id="contact" className="py-16 bg-gray-800 text-white">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
      <p className="text-xl mb-8">
        Agéndame un espacio para conversar sobre cómo podemos implementar
        soluciones que generen resultados medibles en tu empresa.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Agendar Consulta
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
          Ver Casos de Éxito
        </button>
      </div>
    </div>
  </section>
);

export default ContactSection;