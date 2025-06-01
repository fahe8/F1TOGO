import React from 'react';
import { motion } from 'framer-motion';
import { nosotros } from '../../../Texto/Texto';
import { FaBinoculars, FaLightbulb, FaBullseye } from 'react-icons/fa';
import servicio1 from '../../../assets/servicio1.jpg';

const MisionVision = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={servicio1} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Vision</h2>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <FaBinoculars className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-white/90 text-lg leading-relaxed">
                  {nosotros.misionVision.vision.descripcion}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                <FaLightbulb className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-white/90 text-lg leading-relaxed">
                  {nosotros.misionVision.mision.descripcion}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Goals</h2>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                <FaBullseye className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-white/90 text-lg leading-relaxed">
                  Nuestro objetivo es revolucionar la movilidad urbana, ofreciendo un servicio de transporte seguro, eficiente y accesible que mejore la vida de nuestros usuarios y conductores.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;