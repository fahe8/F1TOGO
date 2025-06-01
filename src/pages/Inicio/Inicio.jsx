import React from "react";
import Header from "../../Componentes/Header";
import Servicios from "./Componentes/Servicios";
import Hero from "./Componentes/Hero";
import Descargas from "./Componentes/Descargas";
import Footer from "../../Componentes/Footer";

const Inicio = () => {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Servicios />
        <Descargas />
      </main>
      <Footer />
    </>
  );
};

export default Inicio;
