import React, { useState } from 'react'
import { FaEnvelope, FaCopy, FaInfoCircle, FaHandshake, FaTools, FaCheckCircle, FaStar, FaClock } from 'react-icons/fa'

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
      borderColor: 'border-primary'
    },
    {
      tipo: 'Contacto Comercial',
      email: 'contacto@f1togo.com',
      descripcion: 'Para oportunidades de negocio y alianzas',
      icon: FaHandshake,
      color: 'text-secondary',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-secondary'
    },
    {
      tipo: 'Soporte Técnico',
      email: 'soporte@f1togo.com',
      descripcion: 'Para problemas técnicos y asistencia con la app',
      icon: FaTools,
      color: 'text-primary',
      bgColor: 'bg-blue-50',
      borderColor: 'border-primary'
    }
  ]

  const copiarEmail = (email) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(''), 2000)
  }

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
        {/* Header elegante */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 shadow-lg">
            <FaEnvelope className="text-white text-3xl" />
          </div>
          <h3 className="text-4xl font-bold text-primary mb-4">
            Contáctanos Directamente
          </h3>
          <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Conecta con nosotros a través de nuestros canales especializados. 
            <span className="font-semibold text-primary">Cada correo está diseñado para brindarte la mejor atención.</span>
          </p>
        </div>

        {/* Cards de contacto elegantes */}
        <div className="space-y-6 mb-10">
          {correosContacto.map((contacto, index) => {
            const IconComponent = contacto.icon
            return (
              <div 
                key={index} 
                className={`relative ${contacto.bgColor} rounded-2xl border-2 ${contacto.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                {/* Línea decorativa lateral */}
                <div className={`absolute left-0 top-0 bottom-0 w-2 ${contacto.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`}></div>
                
                <div className="p-8 pl-10">
                  <div className="flex items-start space-x-6">
                    {/* Icono con círculo de color */}
                    <div className={`flex-shrink-0 w-16 h-16 ${contacto.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-2xl font-bold ${contacto.color} mb-3`}>
                        {contacto.tipo}
                      </h4>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {contacto.descripcion}
                      </p>
                      
                      {/* Email con diseño mejorado */}
                      <div className="bg-white rounded-xl p-4 border-2 border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <FaEnvelope className={`${contacto.color} text-lg`} />
                            <a
                              href={`mailto:${contacto.email}`}
                              className={`font-bold text-lg ${contacto.color} hover:underline transition-all duration-200`}
                            >
                              {contacto.email}
                            </a>
                          </div>
                          
                          <button
                            onClick={() => copiarEmail(contacto.email)}
                            className={`p-3 rounded-xl ${contacto.color === 'text-primary' ? 'bg-primary hover:bg-primary-light' : 'bg-secondary hover:bg-yellow-600'} text-white transition-all duration-200 shadow-md hover:shadow-lg relative group/btn`}
                            title="Copiar email"
                          >
                            {copiedEmail === contacto.email ? (
                              <FaCheckCircle className="text-lg" />
                            ) : (
                              <FaCopy className="text-lg" />
                            )}
                            
                            {/* Tooltip mejorado */}
                            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
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
            )
          })}
        </div>

        {/* Sección de consejos rediseñada */}
        <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 shadow-inner overflow-hidden">
          <div className="bg-primary p-6">
            <div className="flex items-center text-white">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 shadow-lg">
                <FaStar className="text-primary text-xl" />
              </div>
              <h4 className="text-2xl font-bold">
                Consejos para una mejor comunicación
              </h4>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-2">Información Completa</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Incluye todos los detalles relevantes en tu mensaje para una respuesta más precisa
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border-2 border-yellow-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary mb-2">Tipo de Consulta</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Especifica claramente el motivo de tu contacto para dirigirte al área correcta
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border-2 border-blue-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaClock className="text-white text-sm" />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-2">Mantente pendiente del Correo</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Nos pondremos en contacto contigo lo mas rapido posible, revisa el correo electronico periodicamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer con llamada a la acción */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-secondary text-primary px-6 py-3 rounded-full font-bold shadow-lg">
            <FaStar className="text-lg" />
            <span>¡Estamos aquí para ayudarte!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormularioContacto