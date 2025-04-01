import React from "react";
import ciudad from "../assets/ciudad.jpg";
import heroImage from "../assets/heroImage.jpg";
import "../estilos/Hero.css";
import { hero } from "../Texto/Texto";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative h-full lg:h-screen text-text-white">
      <img
        src={ciudad}
        alt="Foto de la ciudad desde un dron"
        className="absolute h-full lg:h-screen w-screen hero-bg-image -z-20 object-cover"
      />
      <div className="degradado absolute w-full h-full left-0 top-0 opacity-80 -z-10"></div>

      {/* Contenedor responsive */}
      <div className="container flex flex-col text-center p-2 lg:text-left lg:grid lg:grid-cols-[40%_60%] mx-auto items-center">
        {/* Imagen (Primero en móviles, segundo en desktop) */}
        <img
          src={heroImage}
          alt="Hombre conduciendo mientras ve la aplicación por su celular"
          className="rounded-3xl w-auto lg:rounded-2xl lg:ml-8g:max-w-[550px] xl:w-[700px] lg:order-2"
        />

        {/* Texto */}
        <div className="lg:h-screen flex flex-col lg:justify-center gap-4 lg:order-1">
          <h1 className="text-3xl lg:text-5xl font-bold">{hero.titulo}</h1>
          <p>{hero.subtitulo}</p>
          <div className="mt-16">
            <Link className=" bg-primary py-4 px-8 rounded-3xl text-text-white shadow-md hover:bg-primary-light">
              Descargar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
