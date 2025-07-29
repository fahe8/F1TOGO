import React from 'react'
import { motion } from 'framer-motion'
import registrarse from '../../../assets/beneficios/registrarse.png'

const ComoRegistrarse = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">¿Cómo registrarte?</h2>
            <p className="text-gray-600 mb-8">
               Registrarte en F1 To Go es muy facil es muy fácil. Solo necesitas seguir estos pasos y pronto estarás generando ingresos como conductor profesional.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300">
              Comienza ahora
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={registrarse} 
                alt="Registro F1 To Go" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ComoRegistrarse