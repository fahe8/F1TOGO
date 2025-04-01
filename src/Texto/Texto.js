import servicio1 from "../assets/servicio1.jpg";
import servicio2 from "../assets/servicio2.jpg";
import servicio3 from "../assets/servicio3.jpg";

const hero = {
  titulo: "Aplicación de movilidad rápida y confiable en la palma de tu mano.",
  subtitulo:
    "Nuestro servicio de movilidad urbana está diseñado para que llegues a donde necesites de forma rápida y segura. Reserva tu viaje ahora y disfruta de una experiencia de viaje sin complicaciones.",
  btnSolicitar: "Solicitar",
  btnSaberMas: "Saber Más",
};

const seccionServicios = {
  titulo: "¿Por qué elegir F1ToGo?",
  servicios: [
    {
      titulo: " Comunicacion directa",
      subtitulo:
        "F1 TO GO es una empresa interesada en apoyar el desplazamiento y movimiento de la población dentro las ciudades, para esto implementamos una aplicación móvil que permite la comunicación entre usuarios (user) y/o pasajeros y los conductores de taxi de la ciudad (drivers).",
      image: servicio1,
    },
    {
      titulo: "Transparencia",
      subtitulo:
        "F1 TO GO le brinda un servicio de transporte puerta a puerta donde se sugiere una ruta de desplazamiento, el tiempo de recogida, el tiempo de viaje, el valor del servicio de transporte y le ofrece diferentes opciones para el pago de este servicio.",
      image: servicio2,
    },
    {
      titulo: "Seguridad",
      subtitulo:
        "F1 TO GO garantiza un servicio seguro y legal, ya que opera con taxis autorizados que cuentan con permisos y pólizas de cobertura. Además, la seguridad se refuerza mediante la identificación de todos los usuarios y conductores, con sus datos almacenados en nuestra base de datos.",
      image: servicio3,
    },
  ],
};

const franjaApp = {
  titulo: "Empieza tu viaje",
  subtitulo:
    "Solicita nuestra servicio de manera eficiente con el conductor mas cercano",
};

const footer = {
  pyp: "Politica de privacidad",
  tyc: "Terminos de uso",
};

export { hero, seccionServicios, franjaApp, footer };
