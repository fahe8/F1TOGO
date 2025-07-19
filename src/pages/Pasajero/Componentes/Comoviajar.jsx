import React from 'react'
import { motion } from 'framer-motion'
import comoviajar from '../../../assets/pasajeros/comoviajar.png'
import { FaMapMarkedAlt, FaCarSide, FaUserCheck, FaStar, FaRoute } from 'react-icons/fa'

const ComoViajar = () => {
  const pasos = [
    {
      icon: FaMapMarkedAlt,
      texto: "Descarga la app y crea tu cuenta"
    },
    {
      icon: FaRoute,
      texto: "Establece destino y confirma tu ruta"
    },
    {
      icon: FaCarSide,
      texto: "Verifica el perfil de tu conductor"
    },
    {
      icon: FaUserCheck,
      texto: "Listo para tu viaje"
    },
    {
      icon: FaStar,
      texto: "Califica tu experiencia"
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          ¿Cómo viajar con F1ToGo?
        </motion.h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 '>
          <img src={comoviajar} alt="" srcset="" className='drop-shadow-xl'/>
        <div className="space-y-6">
          {pasos.map((paso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <paso.icon className="text-2xl text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-bold">{index + 1}.</span>
                  <p className="text-gray-700 font-medium">{paso.texto}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300">
            Empieza tu viaje
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ComoViajar