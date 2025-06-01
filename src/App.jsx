import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Nosotros from './pages/Nosotros/Nosotros'
import Conductor from './pages/Conductor/Conductor'
import Pasajero from './pages/Pasajero/Pasajero'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/conductor" element={<Conductor />} />
      <Route path="/pasajero" element={<Pasajero />} />
    </Routes>
  )
}

export default App