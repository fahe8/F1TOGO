import React from "react";

import { FaComments, FaShieldAlt, FaUserCheck } from "react-icons/fa";
import { seccionServicios } from "../../../Texto/Texto";
import { motion } from "framer-motion";

const Servicios = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }
    }
  };

  const iconComponents = {
    " Comunicacion directa": FaComments,
    "Transparencia": FaUserCheck,
    "Seguridad": FaShieldAlt
  };

  return (
    <section className="container mx-auto my-12 sm:my-24 px-4">
      <motion.h2 
        className="text-center text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {seccionServicios.titulo}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 sm:gap-16 mt-8 sm:mt-16">
        {seccionServicios.servicios.map((servicio, index) => {
          const IconComponent = iconComponents[servicio.titulo] || FaComments;
          
          return (
            <motion.div
              key={index}
              className="w-full max-w-[320px] sm:max-w-[380px] bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-[200px] sm:h-[250px] overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={servicio.image}
                  alt={servicio.titulo}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <IconComponent className="text-6xl sm:text-7xl text-white transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="text-2xl sm:text-3xl text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl text-primary font-bold">
                    {servicio.titulo}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{servicio.subtitulo}</p>
                <motion.div 
                  className="mt-4 sm:mt-6 h-1 bg-primary/20 rounded-full overflow-hidden"
                  whileInView={{ scaleX: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="h-full w-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Servicios;
