import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaClock, FaMoneyBillWave, FaHandshake } from 'react-icons/fa'
import Card from '../../../Componentes/Card'

const PorqueElegirnos = () => {
  const beneficios = [
    {
      icon: FaShieldAlt,
      title: "Seguridad garantizada",
      description: "Conductores verificados y viajes monitoreados para tu tranquilidad."
    },
    {
      icon: FaClock,
      title: "Disponibilidad inmediata",
      description: "Solicita un viaje en cualquier momento, estamos disponibles 24/7."
    },
    {
      icon: FaMoneyBillWave,
      title: "Tarifas claras y accesibles",
      description: "Precios transparentes y competitivos para todos tus viajes."
    },
    {
      icon: FaHandshake,
      title: "Comodidad y confianza",
      description: "Experiencia de viaje confortable con conductores profesionales."
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          ¿Por qué elegirnos?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <Card
              key={index}
              icon={beneficio.icon}
              title={beneficio.title}
              description={beneficio.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PorqueElegirnos