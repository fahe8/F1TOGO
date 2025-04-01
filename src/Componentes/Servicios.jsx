import React from "react";
import { seccionServicios } from "../Texto/Texto";

const Servicios = () => {
  return (
    <section className="container mx-auto my-12 px-2">
      <h2 className=" text-center lg:text-4xl text-primary font-bold">
        {seccionServicios.titulo}
      </h2>
      <div className=" flex flex-wrap justify-center gap-12 mt-8">
        {seccionServicios.servicios.map((servicio, index) => {
          return (
            <div className=" grid grid-rows-2 w-[350px]">
              <img
                className="rounded-t-2xl h-full object-cover"
                src={servicio.image}
                alt=""
              />
              <div className="border-b-2 border-x-2 border-primary text-center p-4 ">
                <div className=" h-20 flex items-center justify-center">
                  <h3 className="text-3xl text-primary font-semibold mb-4">
                    {servicio.titulo}
                  </h3>
                </div>
                <p className=" ">{servicio.subtitulo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Servicios;
