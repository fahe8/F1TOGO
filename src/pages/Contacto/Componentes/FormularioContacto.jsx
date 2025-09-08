import React, { useState } from 'react'

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      // Aquí irá la lógica de envío del formulario
      // Por ejemplo, usando un servicio como EmailJS o una API propia
      
      setEnviado(true)
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      })
      
      setTimeout(() => setEnviado(false), 5000)
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
    }
  }

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="nombre">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="asunto">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Asunto de tu mensaje"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Enviar Mensaje
            </button>
          </div>

          {error && (
            <div className="text-red-500 text-center">{error}</div>
          )}

          {enviado && (
            <div className="text-green-500 text-center">
              ¡Mensaje enviado con éxito! Te responderemos pronto.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default FormularioContacto