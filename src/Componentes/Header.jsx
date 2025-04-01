import React from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation(); // Obtiene la ruta actual

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Pasajero", path: "/pasajero" },
    { name: "Conductor", path: "/conductor" },
  ];

  return (
    <header className="">
      <nav className="container mx-auto flex items-center">
        <img
          src={logo}
          alt="Logo de celular con la app y un taxi"
          width={80}
          height={80}
        />
        <ul className="w-full  hidden md:flex flex-col md:flex-row justify-end gap-4">
          {navLinks.map((link) => (
            <li key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`py-4 px-3 relative after:absolute after:left-0 after:bottom-2 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full ${
                  location.pathname === link.path
                    ? "after:w-full font-bold text-primary"
                    : "after:w-0"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/descargar"
              className="bg-primary py-3 px-6 rounded-2xl text-text-white"
            >
              Descargar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
