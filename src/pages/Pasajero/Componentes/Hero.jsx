import React from 'react'
import { motion } from 'framer-motion'
import servicio1 from '../../../assets/heroImage.jpg'
import { FaCarSide, FaRoute } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={servicio1} 
          alt="Viaja con F1TOGO" 
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
            Viaja seguro con F1TOGO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-white/90"
          >
            Disfruta de viajes cómodos y seguros con conductores profesionales. Tu destino está a solo un clic de distancia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center gap-2">
              <FaCarSide className="text-xl" />
              Reserva tu viaje
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
              <FaRoute className="text-xl" />
              Ver destinos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero