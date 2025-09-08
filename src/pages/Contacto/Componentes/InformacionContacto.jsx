import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const InformacionContacto = () => {
  const infoContacto = [
    {
      icon: FaPhone,
      titulo: "Teléfono",
      contenido: "+1 234 567 890",
      link: "tel:+1234567890"
    },
    {
      icon: FaEnvelope,
      titulo: "Email",
      contenido: "contacto@f1togo.com",
      link: "mailto:contacto@f1togo.com"
    },
    {
      icon: FaMapMarkerAlt,
      titulo: "Ubicación",
      contenido: "123 Calle Principal, Ciudad",
      link: "https://maps.google.com/?q=123+Calle+Principal+Ciudad"
    },
    {
      icon: FaClock,
      titulo: "Horario de Atención",
      contenido: "Lun-Vie: 9:00 - 18:00",
      link: null
    }
  ]

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
        <div className="space-y-6">
          {infoContacto.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary bg-opacity-10 rounded-full p-3">
                  <IconComponent className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.titulo}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-primary transition-colors"
                      target={item.icon === FaMapMarkerAlt ? "_blank" : undefined}
                      rel={item.icon === FaMapMarkerAlt ? "noopener noreferrer" : undefined}
                    >
                      {item.contenido}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.contenido}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default InformacionContacto