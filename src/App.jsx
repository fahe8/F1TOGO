import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Conductor from './pages/Conductor/Conductor'
import Pasajero from './pages/Pasajero/Pasajero'
import Nosotros from './pages/Nosotros/Nosotros'
import PoliticasPrivacidad from './pages/PoliticasPrivacidad/PoliticasPrivacidad'
import TerminosUso from './pages/TerminosUso/TerminosUso'
import ScrollToTop from './Componentes/ScrollToTop'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/conductor" element={<Conductor />} />
        <Route path="/pasajero" element={<Pasajero />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/politicas-privacidad" element={<PoliticasPrivacidad />} />
        <Route path="/terminos-uso" element={<TerminosUso />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App