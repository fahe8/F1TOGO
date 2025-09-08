import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center pt-30 pb-8"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Estamos aquí para ayudarte. Envíanos tus dudas o comentarios y te responderemos lo antes posible.
      </p>
    </motion.div>
  )
}

export default Hero