import React from "react";
import { motion } from "framer-motion";
import { nosotros } from "../../../Texto/Texto";
import { FaShieldAlt, FaLightbulb, FaHandshake, FaHeart, FaUniversalAccess, FaBalanceScale } from "react-icons/fa";

const Valores = () => {
  const iconMap = {
    "Seguridad": FaShieldAlt,
    "Innovación": FaLightbulb,
    "Transparencia": FaHandshake,
    "Compromiso": FaHeart,
    "Accesibilidad": FaUniversalAccess,
    "Responsabilidad": FaBalanceScale
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-primary  text-center mb-12"
        >
          {nosotros.valores.titulo}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nosotros.valores.lista.map((valor, index) => {
            const Icon = iconMap[valor.titulo];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-1 transform hover:rotate-1 transition-transform"
              >
                <div className="bg-primary rounded-lg p-6 h-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 text-center mb-4">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-300 text-center">{valor.descripcion}</p>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mt-6 flex justify-center"
                  >
                    <div className="w-12 h-1 bg-yellow-400 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Valores;
