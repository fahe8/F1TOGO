import React from "react";
import { motion } from "framer-motion";
import { nosotros } from "../../../Texto/Texto";
import { FaShieldAlt, FaLightbulb, FaHandshake, FaHeart, FaUniversalAccess, FaBalanceScale } from "react-icons/fa";
import servicio1 from "../../../assets/servicio1.jpg";
import Card from "../../../Componentes/Card";

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
          className="text-4xl font-bold text-primary text-center mb-12"
        >
          {nosotros.valores.titulo}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nosotros.valores.lista.map((valor, index) => (
            <Card
              key={index}
              image={servicio1}
              icon={iconMap[valor.titulo]}
              title={valor.titulo}
              description={valor.descripcion}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;
