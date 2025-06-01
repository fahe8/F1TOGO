import React from "react";
import shape from "../../../assets/shape.svg";
import logo from "../../../assets/logo2.png";
import AppStore from "../../../assets/AppStore.svg";
import PlayStore from "../../../assets/PlayStore.svg";
import { franjaApp } from "../../../Texto/Texto";
import { Link } from "react-router";
const Descargas = () => {
  return (
    <div className=" bg-primary overflow-hidden relative text-center lg:text-left px-2 py-4 lg:p-0">
      <div className="container mx-auto h-auto lg:h-80 overflow-hidden ">
        {/* Shape con menor z-index */}
        <img src={shape} alt="" className="absolute hidden lg:block z-10 top-0 left-0 w-full" />

        {/* Contenido con mayor z-index */}
        <div className="relative z-40 flex flex-wrap justify-center gap-8 lg:gap-0 lg:justify-between items-center px-8 h-full">
          <div className="text-white w-[400px]">
            <h3 className="text-3xl font-bold mb-4">{franjaApp.titulo}</h3>
            <p>{franjaApp.subtitulo}</p>
          </div>
          <img src={logo} alt="" className="w-[120px]"/>
          <div className=" flex flex-col gap-4">
            <Link to={""}>
              <img src={AppStore} alt="" width={180} />
            </Link>
            <Link to={""}>
              <img src={PlayStore} alt="" width={180} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descargas;
