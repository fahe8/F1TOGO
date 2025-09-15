import React from 'react'
import { FaEnvelope, FaInfoCircle, FaHandshake, FaTools, FaClock, FaExternalLinkAlt } from 'react-icons/fa'

const InformacionContacto = () => {
  const infoContacto = [
    {
      icon: FaInfoCircle,
      titulo: "Información General",
      contenido: "informacion@f1togo.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=informacion@f1togo.com&su=Consulta%20General%20-%20F1%20TO%20GO",
      description: "Consultas generales sobre nuestros servicios"
    },
    {
      icon: FaHandshake,
      titulo: "Contacto Comercial",
      contenido: "contacto@f1togo.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=contacto@f1togo.com&su=Oportunidad%20Comercial%20-%20F1%20TO%20GO",
      description: "Oportunidades de negocio y alianzas"
    },
    {
      icon: FaTools,
      titulo: "Soporte Técnico",
      contenido: "soporte@f1togo.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=soporte@f1togo.com&su=Soporte%20Técnico%20-%20F1%20TO%20GO",
      description: "Asistencia técnica especializada"
    },
  ]

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 h-full">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-xl mb-3 lg:mb-4">
            <FaEnvelope className="text-white text-lg sm:text-xl lg:text-2xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Información de Contacto</h3>
          <div className="w-12 sm:w-16 h-1 bg-secondary rounded-full mx-auto"></div>
        </div>
        
        {/* Lista de contactos */}
        <div className="space-y-3 sm:space-y-4">
          {infoContacto.map((item, index) => {
            const IconComponent = item.icon
            
            return (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    {/* Icono */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="text-white text-sm sm:text-lg" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base sm:text-lg text-primary mb-1">
                        {item.titulo}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                        {item.description}
                      </p>
                      
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200 group/link"
                        >
                          <FaEnvelope className="text-xs sm:text-sm flex-shrink-0" />
                          <span className="break-all text-xs sm:text-sm">{item.contenido}</span>
                          <FaExternalLinkAlt className="text-xs opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center space-x-2 text-gray-700 font-medium">
                          <FaClock className="text-xs sm:text-sm flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{item.contenido}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Footer informativo */}
        <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
          <div className="bg-primary/5 rounded-xl p-4 sm:p-5 lg:p-6 text-center">
            <h4 className="font-bold text-primary mb-2 text-sm sm:text-base">¿Necesitas ayuda?</h4>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
              Nuestro equipo está listo para asistirte. Haz clic en el correo correspondiente para abrir Gmail.
            </p>
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-primary px-3 py-2 rounded-lg text-xs sm:text-sm">
              <FaExternalLinkAlt className="text-xs" />
              <span className="font-medium">Se abre en Gmail web</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacionContacto