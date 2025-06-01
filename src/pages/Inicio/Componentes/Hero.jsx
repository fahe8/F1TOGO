import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCar, FaMobile, FaArrowRight } from "react-icons/fa";
import ciudad from "../../../assets/ciudad.jpg";
import heroImage from "../../../assets/heroImage.jpg";
import "../../../estilos/Hero.css";
import { hero } from "../../../Texto/Texto";
import { Link } from "react-router-dom";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    { icon: <FaMapMarkerAlt className="text-2xl" />, text: "Ubicación en tiempo real" },
    { icon: <FaCar className="text-2xl" />, text: "Conductores verificados" },
    { icon: <FaMobile className="text-2xl" />, text: "App fácil de usar" }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={ciudad}
          alt="Foto de la ciudad desde un dron"
          className="absolute h-full w-full object-cover hero-bg-image"
        />
        <div className="absolute inset-0 degradado opacity-90"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {hero.titulo}
            </h1>
            <p className="text-lg lg:text-xl opacity-90">
              {hero.subtitulo}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <div className="p-2 bg-white/20 rounded-lg">{feature.icon}</div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                Descargar
                <FaArrowRight className="text-sm" />
              </Link>
           
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-3xl transform -rotate-6"></div>
            <img
              src={heroImage}
              alt="Hombre conduciendo mientras ve la aplicación por su celular"
              className="relative rounded-[2rem] shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
