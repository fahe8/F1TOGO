import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/Twitter.svg";
import linkedin from "../assets/LinkedIn.svg";
import { Link } from "react-router-dom";
import { footer } from "../Texto/Texto";

const Footer = () => {
  return (
    <footer className="container mx-auto py-4">
      <div className=" flex justify-between lg:items-center border-b-2 pb-4 px-2">
        <div className="w-[20%] hidden lg:block">
          <img src={logo} alt="" width={60}  />
        </div>
        <ul className="flex flex-col lg:flex-row justify-center gap-8 w-[1fr]">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/conductor">Conductor</Link>
          </li>
          <li>
            <Link to="/pasajero">Pasajero</Link>
          </li>
        </ul>
        <div className="flex flex-col items-end lg:flex-row justify-center gap-2 w-[20%]">
          <img src={facebook} alt="" width={25} />
          <img src={instagram} alt="" width={25} />
          <img src={twitter} alt="" width={25} />
          <img src={linkedin} alt="" width={25} />
        </div>
      </div>
      <div className=" flex justify-center gap-8 pt-4">
        <Link to="/politicas-privacidad" className="underline hover:text-primary transition-colors">
          {footer.pyp}
        </Link>
        <Link to="/terminos-uso" className="underline hover:text-primary transition-colors">
          {footer.tyc}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
