import { useEffect } from 'react'

const TawkTo = () => {
  useEffect(() => {
    // Verificar si Tawk.to ya está cargado para evitar duplicados
    if (window.Tawk_API) {
      return
    }

    // Configurar variables globales de Tawk.to
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    // Crear y cargar el script de Tawk.to
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/68c210462d363c192cba699a/1j4r0v575'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    // Insertar el script en el documento
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)

    // Cleanup function para remover el script si el componente se desmonta
    return () => {
      // Opcional: limpiar Tawk.to si es necesario
      if (window.Tawk_API && window.Tawk_API.onLoad) {
        window.Tawk_API.hideWidget()
      }
    }
  }, [])

  // Este componente no renderiza nada visible
  return null
}

export default TawkTo