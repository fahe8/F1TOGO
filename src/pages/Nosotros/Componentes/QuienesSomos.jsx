import React from 'react';

import { motion } from 'framer-motion';
import { nosotros } from '../../../Texto/Texto';

const QuienesSomos = () => {
  return (
    <section className="py-22 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {nosotros.quienesSomos.titulo}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {nosotros.quienesSomos.descripcion}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuienesSomos;