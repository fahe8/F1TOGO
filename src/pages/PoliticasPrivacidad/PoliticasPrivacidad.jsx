import React, { useState } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaUserShield, FaDatabase, FaLock, FaShareAlt, FaEye, FaDownload, FaFilePdf, FaPhone, FaEnvelope } from 'react-icons/fa'

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

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/POLITICAS_DE_PRIVACIDAD_F1_TO_GO.pdf'
    link.download = 'POLITICAS_DE_PRIVACIDAD_F1_TO_GO.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const politicas = [
    {
      titulo: "Información que Recopilamos",
      icono: FaDatabase,
      contenido: "F1 TO GO recopila información personal necesaria para brindar nuestros servicios de transporte. Esto incluye: datos de identificación personal (nombre, documento de identidad, teléfono, correo electrónico), información de ubicación para conectar conductores y pasajeros, datos del vehículo para conductores, información de pago para procesar transacciones, y datos de uso de la aplicación para mejorar nuestros servicios. Toda esta información es recopilada con su consentimiento explícito."
    },
    {
      titulo: "Cómo Utilizamos su Información",
      icono: FaEye,
      contenido: "Utilizamos su información personal para: facilitar la conexión entre conductores y pasajeros, procesar pagos de manera segura, verificar la identidad de usuarios y conductores, mejorar la seguridad de la plataforma, proporcionar soporte al cliente, cumplir con obligaciones legales y regulatorias, y desarrollar nuevas funcionalidades. No utilizamos su información para fines distintos a los descritos sin su consentimiento previo."
    },
    {
      titulo: "Protección y Seguridad de Datos",
      icono: FaLock,
      contenido: "F1 TO GO implementa medidas de seguridad técnicas, administrativas y físicas para proteger su información personal. Utilizamos encriptación de datos tanto en tránsito como en reposo, sistemas de autenticación seguros, monitoreo continuo de seguridad, y acceso restringido a la información personal solo para personal autorizado. Realizamos auditorías regulares de seguridad y mantenemos nuestros sistemas actualizados con los últimos parches de seguridad."
    },
    {
      titulo: "Compartir y Divulgación de Información",
      icono: FaShareAlt,
      contenido: "Compartimos su información personal únicamente cuando es necesario para: proporcionar nuestros servicios (con conductores para coordinar viajes), cumplir con obligaciones legales, proteger nuestros derechos y los de nuestros usuarios, y con proveedores de servicios que nos ayudan a operar la plataforma bajo estrictos acuerdos de confidencialidad. Nunca vendemos, alquilamos o comercializamos su información personal con terceros para fines de marketing."
    },
    {
      titulo: "Sus Derechos como Usuario",
      icono: FaUserShield,
      contenido: "Usted tiene derecho a: acceder a su información personal que tenemos en nuestros registros, rectificar datos inexactos o incompletos, solicitar la eliminación de su información personal, limitar el procesamiento de sus datos, solicitar la portabilidad de sus datos, retirar su consentimiento en cualquier momento, y presentar quejas ante las autoridades de protección de datos. Para ejercer estos derechos, puede contactarnos a través de nuestros canales oficiales."
    },
    {
      titulo: "Retención de Datos",
      icono: FaDatabase,
      contenido: "Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos para los cuales fue recopilada, incluyendo requisitos legales, contables o de informes. Los datos de viajes se conservan por un período de 5 años para fines de seguridad y cumplimiento legal. Los datos de pago se conservan según los requisitos de las entidades financieras y regulatorias."
    },
    {
      titulo: "Transferencias Internacionales",
      icono: FaShareAlt,
      contenido: "En caso de que sea necesario transferir su información personal fuera del país, nos aseguraremos de que existan las salvaguardas adecuadas para proteger su información, incluyendo acuerdos de transferencia de datos que cumplan con los estándares internacionales de protección de datos."
    },
    {
      titulo: "Menores de Edad",
      icono: FaUserShield,
      contenido: "Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente información personal de menores de edad. Si nos enteramos de que hemos recopilado información de un menor, tomaremos medidas para eliminar dicha información de nuestros sistemas."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-24">
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
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
                Tu privacidad es nuestra prioridad. Conoce cómo protegemos tus datos
              </p>
              
              {/* PDF Download Button */}
              <motion.button
                onClick={handleDownloadPDF}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-secondary hover:bg-yellow-500 text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaFilePdf className="text-2xl" />
                <span className="text-lg">Descargar PDF Completo</span>
                <FaDownload className="text-lg" />
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
                          <span className="font-medium text-sm">{politica.titulo}</span>
                        </button>
                      )
                    })}
                  </nav>
                  
                  {/* Download Section */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-primary mb-3 flex items-center space-x-2">
                      <FaFilePdf className="text-lg" />
                      <span>Documento Oficial</span>
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Descarga el documento completo de nuestras políticas de privacidad en formato PDF.
                    </p>
                    <button
                      onClick={handleDownloadPDF}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaDownload className="text-sm" />
                      <span>Descargar PDF</span>
                    </button>
                  </div>

                  {/* Contact Section */}
                  <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-gray-800 mb-3">¿Tienes Preguntas?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Contáctanos para resolver cualquier duda sobre nuestras políticas.
                    </p>
                    <div className="space-y-2">
                      <a href="mailto:informacion@f1togo.com" className="flex items-center space-x-2 text-primary hover:text-primary/80 text-sm">
                        <FaEnvelope className="text-xs" />
                        <span>informacion@f1togo.com</span>
                      </a>
                      <div className="flex items-center space-x-2 text-gray-600 text-sm">
                        <FaPhone className="text-xs" />
                        <span>Lun-Vie: 9:00 AM - 6:00 PM</span>
                      </div>
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
                              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-primary'
                          }`}>
                            <IconComponent className="text-xl" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 text-left">{politica.titulo}</h3>
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
                  En F1 To Go nos comprometemos a mantener la transparencia en el manejo de tus datos personales. 
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