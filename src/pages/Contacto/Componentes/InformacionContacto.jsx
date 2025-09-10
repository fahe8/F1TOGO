import React from 'react'
import { FaEnvelope, FaInfoCircle, FaHandshake, FaTools, FaClock } from 'react-icons/fa'

const InformacionContacto = () => {
  const infoContacto = [
    {
      icon: FaInfoCircle,
      titulo: "Información General",
      contenido: "informacion@f1togo.com",
      link: "mailto:informacion@f1togo.com",
      description: "Consultas generales sobre nuestros servicios"
    },
    {
      icon: FaHandshake,
      titulo: "Contacto Comercial",
      contenido: "contacto@f1togo.com",
      link: "mailto:contacto@f1togo.com",
      description: "Oportunidades de negocio y alianzas"
    },
    {
      icon: FaTools,
      titulo: "Soporte Técnico",
      contenido: "soporte@f1togo.com",
      link: "mailto:soporte@f1togo.com",
      description: "Asistencia técnica especializada"
    },
  
  ]

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-4">
            <FaEnvelope className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Información de Contacto</h3>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto"></div>
        </div>
        
        {/* Lista de contactos */}
        <div className="space-y-4">
          {infoContacto.map((item, index) => {
            const IconComponent = item.icon
            
            return (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    {/* Icono */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="text-white text-lg" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg text-primary mb-1">
                        {item.titulo}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.description}
                      </p>
                      
                      {item.link ? (
                        <a
                          href={item.link}
                          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200 break-all"
                        >
                          <FaEnvelope className="text-sm flex-shrink-0" />
                          <span className="break-all">{item.contenido}</span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center space-x-2 text-gray-700 font-medium">
                          <FaClock className="text-sm flex-shrink-0" />
                          <span>{item.contenido}</span>
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
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="bg-primary/5 rounded-xl p-6 text-center">
            <h4 className="font-bold text-primary mb-2">¿Necesitas ayuda?</h4>
            <p className="text-gray-600 text-sm mb-4">
              Nuestro equipo está listo para asistirte. Escríbenos al correo correspondiente según tu consulta.
            </p>
            {/* <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">2-4 hrs</div>
                <div className="text-xs text-gray-500">Tiempo de respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary">Lun-Vie</div>
                <div className="text-xs text-gray-500">Horario de atención</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacionContacto