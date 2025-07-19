import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Pasajero", path: "/pasajero" },
    { name: "Conductor", path: "/conductor" },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 left-0 z-50 bg-white shadow-md transition-all duration-300"
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <img
          src={logo}
          alt="Logo de celular con la app y un taxi"
          width={80}
          height={80}
        />

        {/* Botón de menú móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-primary block"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-primary block"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-primary block"
          />
        </button>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`py-4 px-10 text-xl relative after:absolute after:left-0 after:bottom-2 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname === link.path ? "after:w-full font-bold text-primary" : "after:w-0"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          
        </ul>

        <div className="hidden md:flex">
            <Link
              to="/descargar"
              className="bg-primary py-3 px-6 rounded-2xl text-white hover:bg-primary/90 transition-colors"
            >
              Descargar
            </Link>
          </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl py-4 px-6 md:hidden"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <Link
                      to={link.path}
                      className={`block py-2 ${location.pathname === link.path ? "font-bold text-primary" : "text-gray-600"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="pt-2"
                >
                  <Link
                    to="/descargar"
                    className="block w-full bg-primary py-3 px-6 rounded-xl text-white text-center hover:bg-primary/90 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Descargar
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
