import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCar, FaMobile, FaArrowRight } from "react-icons/fa";
import ciudad from "../../../assets/ciudad.jpg";
import heroImage from "../../../assets/heroImage.jpg";
import "../../../estilos/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
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
          className="absolute h-full w-full object-cover hero-bg-image filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-5xl font-bold leading-tight"
            >
              Aplicación de movilidad 
              <br />
              <span className="text-yellow-400">rápida y confiable</span>  en la palma de tu mano.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-xl font-light"
            >
             Nuestro servicio de movilidad urbana está diseñado para que llegues a donde necesites de forma rápida y segura.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <div className="p-3 bg-primary text-yellow-400 rounded-lg">{feature.icon}</div>
                  <span className="text-sm lg:text-base font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link 
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Descarga Ahora
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative hidden lg:block"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [-2, 2, -2]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-400/30 rounded-[2rem] blur-3xl transform -rotate-6"></div>
              <img
                src={heroImage}
                alt="Hombre conduciendo mientras ve la aplicación por su celular"
                className="relative rounded-[2rem] shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
