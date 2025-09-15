import React, { useState } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaShieldAlt, FaUserCheck, FaCreditCard, FaTimesCircle, FaFileContract, FaDownload, FaGavel, FaExclamationTriangle, FaHandshake, FaUserTie, FaPhone } from 'react-icons/fa'

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

  const handleDownloadPDF = () => {
    try {
      const link = document.createElement('a')
      link.href = '/pdfs/TERMINOS_Y_CONDICIONES_DE_USO_F1_TO_GO.pdf'
      link.download = 'TERMINOS_Y_CONDICIONES_DE_USO_F1_TO_GO.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error al descargar el PDF:', error)
      alert('Error al descargar el archivo. Por favor, inténtalo de nuevo.')
    }
  }

  const terminos = [
    {
      titulo: "Definiciones y Objeto",
      icono: FaFileContract,
      contenido: "F1 TO GO S.A.S es una empresa colombiana que presta servicios de intermediación tecnológica a través de una plataforma digital que conecta usuarios que requieren servicios de transporte con conductores independientes. Estos términos regulan el uso de nuestra aplicación móvil y plataforma web, estableciendo los derechos y obligaciones de todas las partes involucradas."
    },
    {
      titulo: "Aceptación de los Términos",
      icono: FaHandshake,
      contenido: "Al descargar, instalar, acceder o utilizar la aplicación F1 TO GO, usted acepta expresamente estos términos y condiciones. Si no está de acuerdo con alguna disposición, debe abstenerse de usar nuestros servicios. La aceptación constituye un acuerdo vinculante entre usted y F1 TO GO S.A.S."
    },
    {
      titulo: "Registro y Cuenta de Usuario",
      icono: FaUserCheck,
      contenido: "Para utilizar nuestros servicios debe: ser mayor de 18 años, proporcionar información veraz y actualizada, mantener la confidencialidad de sus credenciales de acceso, y notificar inmediatamente cualquier uso no autorizado de su cuenta. F1 TO GO se reserva el derecho de suspender o cancelar cuentas que incumplan estos requisitos."
    },
    {
      titulo: "Servicios y Funcionamiento",
      icono: FaUserTie,
      contenido: "F1 TO GO actúa como intermediario tecnológico entre usuarios y conductores independientes. No somos propietarios de vehículos ni empleamos conductores directamente. Los conductores son contratistas independientes responsables de cumplir con todas las regulaciones de transporte aplicables, mantener seguros vigentes y proporcionar un servicio seguro y profesional."
    },
    {
      titulo: "Tarifas y Pagos",
      icono: FaCreditCard,
      contenido: "Las tarifas se calculan considerando factores como distancia, tiempo, demanda y tipo de servicio. Los pagos se procesan a través de métodos seguros integrados en la aplicación. F1 TO GO cobra una comisión por la intermediación del servicio. Las tarifas pueden variar según condiciones del mercado y se informarán antes de confirmar el viaje."
    },
    {
      titulo: "Cancelaciones y Modificaciones",
      icono: FaTimesCircle,
      contenido: "Los usuarios pueden cancelar viajes según las políticas establecidas en la aplicación. Las cancelaciones tardías pueden generar cargos para compensar al conductor por el tiempo y recursos invertidos. Los detalles específicos de tiempos y tarifas de cancelación se muestran claramente en la aplicación antes de confirmar cada servicio."
    },
    {
      titulo: "Responsabilidades y Limitaciones",
      icono: FaShieldAlt,
      contenido: "F1 TO GO no se hace responsable por daños, pérdidas o perjuicios derivados del servicio de transporte, ya que actúa únicamente como intermediario tecnológico. Los conductores son responsables de mantener seguros adecuados y cumplir con las regulaciones de tránsito. Los usuarios deben comportarse de manera respetuosa y seguir las instrucciones de seguridad."
    },
    {
      titulo: "Propiedad Intelectual",
      icono: FaGavel,
      contenido: "Todos los derechos de propiedad intelectual sobre la aplicación, marca, logotipos y contenido pertenecen a F1 TO GO S.A.S. Los usuarios no pueden reproducir, distribuir o crear obras derivadas sin autorización expresa. El uso de la aplicación otorga únicamente una licencia limitada y revocable para acceder a los servicios."
    },
    {
      titulo: "Terminación y Suspensión",
      icono: FaExclamationTriangle,
      contenido: "F1 TO GO puede suspender o terminar el acceso a los servicios por incumplimiento de estos términos, actividades fraudulentas, o comportamiento inapropiado. Los usuarios pueden cancelar su cuenta en cualquier momento. La terminación no afecta las obligaciones pendientes de pago o responsabilidades adquiridas durante el uso del servicio."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="absolute inset-0 bg-black opacity-10"></div>
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
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
                Conoce nuestros términos de uso para una experiencia segura y transparente
              </p>
              <motion.button
                onClick={handleDownloadPDF}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaDownload className="text-xl" />
                <span>Descargar PDF Completo</span>
              </motion.button>
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
                          <span className="font-medium text-sm">{termino.titulo}</span>
                        </button>
                      )
                    })}
                  </nav>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center space-x-2">
                      <FaPhone className="text-primary" />
                      <span>¿Necesitas ayuda?</span>
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Si tienes dudas sobre nuestros términos, contáctanos.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">
                        <strong>Email:</strong> contacto@f1togo.com
                      </p>
                      <p className="text-gray-700">
                        <strong>Soporte:</strong> f1togo.app@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* <div className="mt-6 p-4 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
                    <h4 className="font-semibold text-gray-800 mb-2">Información Legal</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      F1 TO GO S.A.S - NIT: [Número de identificación]<br/>
                      Domicilio: Colombia<br/>
                      Regulado por la normativa colombiana
                    </p>
                  </div> */}
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
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
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
                              <p className="text-gray-700 leading-relaxed text-lg text-justify">{termino.contenido}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Additional Info - MANTENIDA SIN CAMBIOS */}
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
                    Última actualización: Junio 2025
                  </span>
                  <span className="text-gray-600 bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                    Versión 1
                  </span>
                </div>
              </motion.div>

              {/* Footer empresarial */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Información de la Empresa</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Razón Social:</strong> F1 TO GO S.A.S</p>
                      <p><strong>País:</strong> Colombia</p>
                      <p><strong>Sector:</strong> Tecnología y Transporte</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Marco Legal</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Regulado por la legislación colombiana</p>
                      <p>Cumplimiento de normativas de transporte</p>
                      <p>Protección de datos según normativa vigente</p>
                    </div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TerminosUso