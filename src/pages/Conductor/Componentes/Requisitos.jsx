import React from 'react'
import { motion } from 'framer-motion'
import { FaIdCard, FaCar, FaFileAlt, FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa'

const Requisitos = () => {
  const requisitos = [
    "Licencia de conducir vigente",
    "Vehículo en buen estado",
    "Documentación al día",
    "Experiencia mínima",
    "Historial limpio"
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
          Requisitos
        </motion.h2>

        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-6">
          {requisitos.map((requisito, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FaArrowRight className="text-primary text-2xl" />
              </div>
              <span className="text-gray-700 text-2xl">{requisito}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Requisitos