import React, { useState } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaShieldAlt, FaUserCheck, FaCreditCard, FaTimesCircle, FaFileContract } from 'react-icons/fa'

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
      icono: FaFileContract,
      contenido: "Al acceder y utilizar los servicios de F1TOGO, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice nuestros servicios."
    },
    {
      titulo: "Requisitos de Uso",
      icono: FaUserCheck,
      contenido: "Para utilizar nuestros servicios, debe ser mayor de edad según las leyes de su país y tener la capacidad legal para aceptar estos términos. Debe proporcionar información precisa y mantener actualizada su información de cuenta."
    },
    {
      titulo: "Responsabilidades del Usuario",
      icono: FaShieldAlt,
      contenido: "Como usuario de F1TOGO, usted se compromete a utilizar el servicio de manera responsable, no realizar actividades ilegales, respetar a otros usuarios y conductores, y mantener un comportamiento apropiado durante los viajes."
    },
    {
      titulo: "Pagos y Tarifas",
      icono: FaCreditCard,
      contenido: "Las tarifas se calculan según la distancia y el tiempo del viaje. Los pagos se procesan a través de los métodos autorizados en la aplicación. F1TOGO se reserva el derecho de modificar las tarifas con previo aviso."
    },
    {
      titulo: "Cancelaciones",
      icono: FaTimesCircle,
      contenido: "Las cancelaciones pueden estar sujetas a cargos según el momento en que se realicen. Los detalles específicos de la política de cancelación se proporcionan en la aplicación antes de confirmar un viaje."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Términos & Condiciones
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Conoce nuestros términos de uso para una experiencia segura y transparente
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-32"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Navegación Rápida</h2>
                  <nav className="space-y-3">
                    {terminos.map((termino, index) => {
                      const IconComponent = termino.icono
                      return (
                        <button
                          key={index}
                          onClick={() => toggleSection(index)}
                          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 text-left ${
                            activeIndices.includes(index)
                              ? 'bg-blue-50 text-primary border-l-4 border-primary'
                              : 'hover:bg-gray-50 text-gray-600'
                          }`}
                        >
                          <IconComponent className="text-lg flex-shrink-0" />
                          <span className="font-medium">{termino.titulo}</span>
                        </button>
                      )
                    })}
                  </nav>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-gray-800 mb-2">¿Necesitas ayuda?</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Si tienes dudas sobre nuestros términos, contáctanos.
                    </p>
                    <button className="text-primary hover:text-blue-700 font-medium text-sm transition-colors">
                      Contactar Soporte →
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {terminos.map((termino, index) => {
                  const IconComponent = termino.icono
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                      <button
                        onClick={() => toggleSection(index)}
                        className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full transition-colors ${
                            activeIndices.includes(index)
                              ? 'bg-blue-100 text-primary'
                              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-primary'
                          }`}>
                            <IconComponent className="text-xl" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 text-left">{termino.titulo}</h3>
                        </div>
                        <FaChevronDown
                          className={`text-gray-400 transition-transform duration-300 ${
                            activeIndices.includes(index) ? 'rotate-180 text-primary' : 'group-hover:text-primary'
                          }`}
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
                            <div className="px-8 py-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
                              <p className="text-gray-700 leading-relaxed text-lg">{termino.contenido}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Información Importante</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Estos términos pueden ser actualizados periódicamente. Te notificaremos sobre cambios importantes 
                  a través de la aplicación o por correo electrónico.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="text-gray-600 bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                    Última actualización: Enero 2024
                  </span>
                  <span className="text-gray-600 bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                    Versión 2.1
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TerminosUso