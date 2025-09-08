import React from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import Hero from './Componentes/Hero'
import FormularioContacto from './Componentes/FormularioContacto'
import InformacionContacto from './Componentes/InformacionContacto'

const Contacto = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <section className=" bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <InformacionContacto />
              <FormularioContacto />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Contacto