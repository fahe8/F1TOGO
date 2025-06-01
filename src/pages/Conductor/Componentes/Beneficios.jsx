import React from "react";
import { motion } from "framer-motion";
import pagos from "../../../assets/beneficios/pagos.png";
import horarios from "../../../assets/beneficios/horario.png";
import ingresos from "../../../assets/beneficios/ingresos.png";
import { FaMoneyBillWave, FaClock, FaShieldAlt } from "react-icons/fa";
import Card from "../../../Componentes/Card";


const Beneficios = () => {
  const beneficios = [
    {
      image: ingresos,
      icon: FaMoneyBillWave,
      title: "Mejores ingresos",
      description:
        "Genera ingresos competitivos y estables con nuestra plataforma.",
    },
    {
      image: horarios,
      icon: FaClock,
      title: "Horario flexible",
      description: "Trabaja cuando quieras, tú controlas tu tiempo.",
    },
    {
      image: pagos,
      icon: FaShieldAlt,
      title: "Pagos Seguros",
      description:
        "Recibe tus ganacias de manera puntual y transparente",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Nuestros Beneficios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <Card
              key={index}
              icon={beneficio.icon}
              image={beneficio.image}
              title={beneficio.title}
              description={beneficio.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
