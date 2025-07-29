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
  titulo: "¿Por qué elegir F1 To Go?",
  servicios: [
    {
      titulo: " Comunicacion directa",
      subtitulo:
        "F1 To Go es una empresa interesada en apoyar el desplazamiento y movimiento de la población dentro las ciudades, para esto implementamos una aplicación móvil que permite la comunicación entre usuarios (user) y/o pasajeros y los conductores de la ciudad (driver).",
      image: servicio1,
    },
    {
      titulo: "Transparencia",
      subtitulo:
        "F1 To Go le brinda un servicio de transporte puerta a puerta donde se indica la ruta de desplazamiento, el tiempo de recogida, el tiempo de viaje y el valor del servicio de transporte ",
      image: servicio2,
    },
    {
      titulo: "Seguridad",
      subtitulo:
        "F1 To Go garantiza un servicio seguro y legal, opera con vehiculos autorizados; Además, la seguridad se refuerza mediante la identificación de todos los usuarios y conductores, con sus datos almacenados en nuestra base de datos.",
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

const nosotros = {
  quienesSomos: {
    titulo: "¿Quiénes Somos?",
    descripcion: "F1 To Go es una empresa comprometida con la movilidad urbana, facilitando el desplazamiento seguro y eficiente de personas en la ciudad mediante nuestra innovadora aplicación móvil que conecta pasajeros con conductores profesionales."
  },
  misionVision: {
    mision: {
      titulo: "Nuestra Misión",
      descripcion: "Mejorar la movilidad urbana proporcionando un servicio de transporte seguro, eficiente y accesible que mejore la calidad de vida de nuestros usuarios y conductores, contribuyendo al desarrollo sostenible de las ciudades."
    },
    vision: {
      titulo: "Nuestra Visión",
      descripcion: "Ser la plataforma líder en soluciones de movilidad urbana, reconocida por nuestra excelencia en servicio, innovación tecnológica y compromiso con la seguridad y satisfacción de nuestra comunidad."
    }
  },
  valores: {
    titulo: "Nuestros Valores",
    lista: [
      {
        titulo: "Seguridad",
        descripcion: "Priorizamos la seguridad de nuestros usuarios y conductores en cada viaje."
      },
      {
        titulo: "Innovación",
        descripcion: "Buscamos constantemente nuevas formas de mejorar nuestro servicio."
      },
      {
        titulo: "Transparencia",
        descripcion: "Mantenemos una comunicación clara y honesta con nuestra comunidad."
      },
      {
        titulo: "Compromiso",
        descripcion: "Nos dedicamos a brindar el mejor servicio posible."
      },
      {
        titulo: "Accesibilidad",
        descripcion: "Hacemos que la movilidad sea fácil y accesible para todos."
      },
      {
        titulo: "Integridad",
        descripcion: "Actuamos con responsabilidad hacia nuestros usuarios, nuestros conductores y la sociedad."
      }
    ]
  }
};

export { hero, seccionServicios, franjaApp, footer, nosotros };
