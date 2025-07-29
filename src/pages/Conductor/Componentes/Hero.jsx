import React from 'react'
import { motion } from 'framer-motion'
import servicio1 from '../../../assets/heroImage.jpg'
import { FaTaxi, FaUserFriends } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={servicio1} 
          alt="Conductor F1 To Go" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Únete como Conductor en F1 To Go
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-white/90"
          >
            Sé parte de nuestra comunidad de conductores profesionales y genera ingresos mientras brindas un servicio de calidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center gap-2">
              <FaTaxi className="text-xl" />
              Comienza a conducir
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
              <FaUserFriends className="text-xl" />
              Aprende más
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero