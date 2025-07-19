import React, { useState } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaUserShield, FaDatabase, FaLock, FaShareAlt, FaEye } from 'react-icons/fa'

const PoliticasPrivacidad = () => {
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

  const politicas = [
    {
      titulo: "Recopilación de Información Personal",
      icono: FaDatabase,
      contenido: "En F1ToGo, recopilamos información personal como nombre, dirección de correo electrónico, número de teléfono y datos de ubicación para proporcionar nuestros servicios de transporte. Esta información es necesaria para facilitar los viajes y garantizar la seguridad de nuestros usuarios."
    },
    {
      titulo: "Uso de la Información",
      icono: FaEye,
      contenido: "Utilizamos la información recopilada para conectar pasajeros con conductores, procesar pagos, mejorar nuestros servicios y garantizar la seguridad de nuestra plataforma. También podemos usar datos anónimos para análisis y mejora del servicio."
    },
    {
      titulo: "Protección de Datos",
      icono: FaLock,
      contenido: "Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración. Todos los datos se almacenan de forma segura y se transmiten utilizando encriptación."
    },
    {
      titulo: "Compartir Información",
      icono: FaShareAlt,
      contenido: "Solo compartimos su información con conductores y terceros necesarios para proporcionar nuestros servicios. No vendemos ni alquilamos su información personal a terceros con fines comerciales."
    },
    {
      titulo: "Derechos del Usuario",
      icono: FaUserShield,
      contenido: "Usted tiene derecho a acceder, rectificar, eliminar o limitar el procesamiento de sus datos personales. También puede solicitar la portabilidad de sus datos y retirar su consentimiento en cualquier momento contactándonos a través de nuestros canales oficiales."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Políticas de Privacidad
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Tu privacidad es nuestra prioridad. Conoce cómo protegemos tus datos
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
                    {politicas.map((politica, index) => {
                      const IconComponent = politica.icono
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
                          <span className="font-medium">{politica.titulo}</span>
                        </button>
                      )
                    })}
                  </nav>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-gray-800 mb-2">Protección Garantizada</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Cumplimos con las normativas internacionales de protección de datos.
                    </p>
                    <div className="flex items-center space-x-2 text-primary">
                      <FaLock className="" />
                      <span className=" font-medium text-sm">Datos Seguros</span>
                    </div>
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
                {politicas.map((politica, index) => {
                  const IconComponent = politica.icono
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
                              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-primary-light'
                          }`}>
                            <IconComponent className="text-xl" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 text-left">{politica.titulo}</h3>
                        </div>
                        <FaChevronDown
                          className={`text-gray-400 transition-transform duration-300 ${
                            activeIndices.includes(index) ? 'rotate-180 text-primary' : 'group-hover:text-primary-light'
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
                              <p className="text-gray-700 leading-relaxed text-lg text-justify">{politica.contenido}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Privacy Commitment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Nuestro Compromiso</h3>
                <p className="text-green-100 leading-relaxed mb-6">
                  En F1ToGo nos comprometemos a mantener la transparencia en el manejo de tus datos personales. 
                  Estas políticas se actualizan regularmente para garantizar tu protección.
                </p>
                <div className=" grid md:grid-cols-3 gap-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <FaLock className="text-secondary text-2xl mb-2" />
                    <h4 className="text-gray-600 font-semibold mb-1">Encriptación</h4>
                    <p className="text-gray-600 text-sm opacity-90">Datos protegidos con tecnología avanzada</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <FaUserShield className="text-secondary text-2xl mb-2" />
                    <h4 className="text-gray-600 font-semibold mb-1">Tus Derechos</h4>
                    <p className="text-gray-600 text-sm opacity-90">Control total sobre tu información</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <FaEye className="text-secondary text-2xl mb-2" />
                    <h4 className="text-gray-600 font-semibold mb-1">Transparencia</h4>
                    <p className="text-gray-600 text-sm opacity-90">Información clara y accesible</p>
                  </div>
                </div>
                <div className="text-gray-600 flex flex-wrap gap-4 mt-6">
                  <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                    Última actualización: Junio 2025
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

export default PoliticasPrivacidad