import React from "react";
import QuienesSomos from "./Componentes/QuienesSomos";
import MisionVision from "./Componentes/MisionVision";
import Valores from "./Componentes/Valores";
import Header from "../../Componentes/Header";
import Footer from "../../Componentes/Footer";
import Descargas from "../Inicio/Componentes/Descargas";

const Nosotros = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <QuienesSomos />
        <MisionVision />
        <Valores />
      </main>
      <Descargas />
      <Footer />
    </>
  );
};

export default Nosotros;
