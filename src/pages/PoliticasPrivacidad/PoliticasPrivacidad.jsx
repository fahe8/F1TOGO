import React, { useState } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const PoliticasPrivacidad = () => {
  const [activeIndices, setActiveIndices] = useState([0]) // Ahora es un array

  const toggleSection = (index) => {
    setActiveIndices(prevIndices => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(i => i !== index)
      } else {
        return [...prevIndices, index]
      }
    })
  }

  const politicas = [
    {
      titulo: "Recopilación de Información Personal",
      contenido: "En F1TOGO, recopilamos información personal como nombre, dirección de correo electrónico, número de teléfono y datos de ubicación para proporcionar nuestros servicios de transporte. Esta información es necesaria para facilitar los viajes y garantizar la seguridad de nuestros usuarios."
    },
    {
      titulo: "Uso de la Información",
      contenido: "Utilizamos la información recopilada para conectar pasajeros con conductores, procesar pagos, mejorar nuestros servicios y garantizar la seguridad de nuestra plataforma. También podemos usar datos anónimos para análisis y mejora del servicio."
    },
    {
      titulo: "Protección de Datos",
      contenido: "Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración. Todos los datos se almacenan de forma segura y se transmiten utilizando encriptación."
    },
    {
      titulo: "Compartir Información",
      contenido: "Solo compartimos su información con conductores y terceros necesarios para proporcionar nuestros servicios. No vendemos ni alquilamos su información personal a terceros con fines comerciales."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Políticas de Privacidad</h1>
          
          <div className="space-y-4">
            {politicas.map((politica, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{politica.titulo}</h3>
                  <FaChevronDown
                    className={`text-gray-600 transition-transform duration-300 ${activeIndices.includes(index) ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <AnimatePresence>
                  {activeIndices.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 border-t border-gray-100">
                        <p className="text-gray-600">{politica.contenido}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PoliticasPrivacidad