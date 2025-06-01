import React from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import Hero from './Componentes/Hero'
import PorqueElegirnos from './Componentes/PorqueElegirnos'
import ComoViajar from './Componentes/Comoviajar'

const Pasajero = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <PorqueElegirnos />
        <ComoViajar />
      </main>
      <Footer/>
    </>
  )
}

export default Pasajero