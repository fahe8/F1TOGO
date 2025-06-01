import React, { useState } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const TerminosUso = () => {
  const [activeIndices, setActiveIndices] = useState([0])

  const toggleSection = (index) => {
    setActiveIndices(prevIndices => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(i => i !== index)
      } else {
        return [...prevIndices, index]
      }
    })
  }

  const terminos = [
    {
      titulo: "Aceptación de Términos",
      contenido: "Al acceder y utilizar los servicios de F1TOGO, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice nuestros servicios."
    },
    {
      titulo: "Requisitos de Uso",
      contenido: "Para utilizar nuestros servicios, debe ser mayor de edad según las leyes de su país y tener la capacidad legal para aceptar estos términos. Debe proporcionar información precisa y mantener actualizada su información de cuenta."
    },
    {
      titulo: "Responsabilidades del Usuario",
      contenido: "Como usuario de F1TOGO, usted se compromete a utilizar el servicio de manera responsable, no realizar actividades ilegales, respetar a otros usuarios y conductores, y mantener un comportamiento apropiado durante los viajes."
    },
    {
      titulo: "Pagos y Tarifas",
      contenido: "Las tarifas se calculan según la distancia y el tiempo del viaje. Los pagos se procesan a través de los métodos autorizados en la aplicación. F1TOGO se reserva el derecho de modificar las tarifas con previo aviso."
    },
    {
      titulo: "Cancelaciones",
      contenido: "Las cancelaciones pueden estar sujetas a cargos según el momento en que se realicen. Los detalles específicos de la política de cancelación se proporcionan en la aplicación antes de confirmar un viaje."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Términos de Uso</h1>
          
          <div className="space-y-4">
            {terminos.map((termino, index) => (
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
                  <h3 className="text-lg font-semibold text-gray-800">{termino.titulo}</h3>
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
                        <p className="text-gray-600">{termino.contenido}</p>
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

export default TerminosUso