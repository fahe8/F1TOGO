import React from "react";
import Header from "../../Componentes/Header";
import Hero from "./Componentes/Hero";
import Beneficios from "./Componentes/Beneficios";
import Requisitos from "./Componentes/Requisitos";
import ComoRegistrarse from "./Componentes/ComoRegistrarse";
import Footer from "../../Componentes/Footer";

const Conductor = () => {
  return (
    <>
      {" "}
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <Beneficios />
        <Requisitos />
        <ComoRegistrarse />
      </main>
      <Footer />
    </>
  );
};

export default Conductor;
