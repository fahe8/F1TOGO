import React, { useState } from 'react'
import { FaEnvelope, FaCopy, FaInfoCircle, FaHandshake, FaTools, FaCheckCircle, FaStar, FaClock, FaExternalLinkAlt } from 'react-icons/fa'

const FormularioContacto = () => {
  const [copiedEmail, setCopiedEmail] = useState('')

  const correosContacto = [
    {
      tipo: 'Información General',
      email: 'informacion@f1togo.com',
      descripcion: 'Para consultas generales sobre nuestros servicios',
      icon: FaInfoCircle,
      color: 'text-primary',
      bgColor: 'bg-blue-50',
      borderColor: 'border-primary',
      gmailLink: 'https://mail.google.com/mail/?view=cm&fs=1&to=informacion@f1togo.com&su=Consulta%20General%20-%20F1%20TO%20GO'
    },
    {
      tipo: 'Contacto Comercial',
      email: 'contacto@f1togo.com',
      descripcion: 'Para oportunidades de negocio y alianzas',
      icon: FaHandshake,
      color: 'text-secondary',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-secondary',
      gmailLink: 'https://mail.google.com/mail/?view=cm&fs=1&to=contacto@f1togo.com&su=Oportunidad%20Comercial%20-%20F1%20TO%20GO'
    },
    {
      tipo: 'Soporte Técnico',
      email: 'soporte@f1togo.com',
      descripcion: 'Para problemas técnicos y asistencia con la app',
      icon: FaTools,
      color: 'text-primary',
      bgColor: 'bg-blue-50',
      borderColor: 'border-primary',
      gmailLink: 'https://mail.google.com/mail/?view=cm&fs=1&to=soporte@f1togo.com&su=Soporte%20Técnico%20-%20F1%20TO%20GO'
    }
  ]

  const copiarEmail = (email) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(''), 2000)
  }

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-gray-100">
        {/* Header elegante */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-primary rounded-full mb-4 lg:mb-6 shadow-lg">
            <FaEnvelope className="text-white text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 lg:mb-4">
            Contáctanos Directamente
          </h3>
          <div className="w-24 sm:w-32 h-1 bg-secondary rounded-full mx-auto mb-4 lg:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Conecta con nosotros a través de nuestros canales especializados. 
            <span className="font-semibold text-primary">Cada correo está diseñado para brindarte la mejor atención.</span>
          </p>
        </div>

        {/* Cards de contacto elegantes */}
        <div className="space-y-4 sm:space-y-6 mb-8 lg:mb-10">
          {correosContacto.map((contacto, index) => {
            const IconComponent = contacto.icon
            return (
              <div 
                key={index} 
                className={`relative ${contacto.bgColor} rounded-2xl border-2 ${contacto.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                {/* Línea decorativa lateral */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 sm:w-2 ${contacto.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`}></div>
                
                <div className="p-4 sm:p-6 lg:p-8 pl-6 sm:pl-8 lg:pl-10">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    {/* Icono con círculo de color */}
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${contacto.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="text-white text-lg sm:text-xl lg:text-2xl" />
                    </div>
                    
                    <div className="flex-1 min-w-0 w-full">
                      <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold ${contacto.color} mb-2 lg:mb-3`}>
                        {contacto.tipo}
                      </h4>
                      <p className="text-gray-700 mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {contacto.descripcion}
                      </p>
                      
                      {/* Email con diseño mejorado */}
                      <div className="bg-white rounded-xl p-3 sm:p-4 border-2 border-gray-200 shadow-sm">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                            <FaEnvelope className={`${contacto.color} text-sm sm:text-lg flex-shrink-0`} />
                            <a
                              href={contacto.gmailLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`font-bold text-sm sm:text-base lg:text-lg ${contacto.color} hover:underline transition-all duration-200 break-all group/email`}
                            >
                              {contacto.email}
                              <FaExternalLinkAlt className="inline ml-2 text-xs opacity-0 group-hover/email:opacity-100 transition-opacity duration-200" />
                            </a>
                          </div>
                          
                          <div className="flex space-x-2 w-full sm:w-auto">
                            <a
                              href={contacto.gmailLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-1 sm:flex-none p-2 sm:p-3 rounded-xl ${contacto.color === 'text-primary' ? 'bg-primary hover:bg-primary-light' : 'bg-secondary hover:bg-yellow-600'} text-white transition-all duration-200 shadow-md hover:shadow-lg relative group/btn text-center`}
                              title="Abrir en Gmail"
                            >
                              <FaExternalLinkAlt className="text-sm sm:text-lg mx-auto" />
                              
                              {/* Tooltip mejorado */}
                              <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg z-10">
                                Abrir Gmail
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                              </span>
                            </a>
                            
                            <button
                              onClick={() => copiarEmail(contacto.email)}
                              className={`flex-1 sm:flex-none p-2 sm:p-3 rounded-xl ${contacto.color === 'text-primary' ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-600 hover:bg-gray-700'} text-white transition-all duration-200 shadow-md hover:shadow-lg relative group/copy`}
                              title="Copiar email"
                            >
                              {copiedEmail === contacto.email ? (
                                <FaCheckCircle className="text-sm sm:text-lg mx-auto" />
                              ) : (
                                <FaCopy className="text-sm sm:text-lg mx-auto" />
                              )}
                              
                              {/* Tooltip mejorado */}
                              <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover/copy:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg z-10">
                                {copiedEmail === contacto.email ? '¡Copiado!' : 'Copiar email'}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Sección de consejos rediseñada */}
        <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 shadow-inner overflow-hidden">
          <div className="bg-primary p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center text-white space-y-2 sm:space-y-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mr-0 sm:mr-4 shadow-lg">
                <FaStar className="text-primary text-lg sm:text-xl" />
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-center sm:text-left">
                Consejos para una mejor comunicación
              </h4>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-blue-100 shadow-sm">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs sm:text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-2 text-sm sm:text-base">Información Completa</h5>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Incluye todos los detalles relevantes en tu mensaje para una respuesta más precisa
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-yellow-100 shadow-sm">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-xs sm:text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary mb-2 text-sm sm:text-base">Tipo de Consulta</h5>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Especifica claramente el motivo de tu contacto para dirigirte al área correcta
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-blue-100 shadow-sm">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaClock className="text-white text-xs sm:text-sm" />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-2 text-sm sm:text-base">Mantente pendiente del Correo</h5>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Nos pondremos en contacto contigo lo más rápido posible, revisa el correo electrónico periódicamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer con llamada a la acción */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-secondary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow-lg text-sm sm:text-base">
            <FaStar className="text-sm sm:text-lg" />
            <span>¡Estamos aquí para ayudarte!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormularioContacto