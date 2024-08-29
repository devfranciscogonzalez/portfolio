const PROJECT_TEXT = {
  title: "Proyecto",
  project1: {
    title: "1. Planificador de Servicios Logísticos",
    codeUrl:
      "https://github.com/devfranciscogonzalez/planificador-servicios-logisticos",
    demoUrl: "https://planificador-servicios-logisticos.vercel.app/",
    camanchacaUrl: "https://www.camanchaca.cl/",
    clrUrl: "https://www.camanchacalogistics.cl/",
    videoUrl: "https://www.youtube.com/watch?v=yEZx7CkEmbE",
    videId: "yEZx7CkEmbE",
    projectListDescription: [
      "Problemas de coordinación y seguimiento interno de las solicitudes de los clientes.",
      "Falta de estructura y formato en los registros.",
      "Disponibilidad de la información para todos los actores involucrados.",
    ],
    projectListTechnologies: {
      Frontend:
        "ReactJS, Material-UI, Tanstack Query, Axios, Yup (validación de formularios), React Router (navegación, rutas públicas y privadas).",
      Backend: " Laravel con API RESTful y autenticación mediante Sanctum.",
      "Base de datos": " PostgreSQL.",
      "Patrón de diseño":
        "Repositorio, utilizado para separar la obtención de datos de la lógica de negocio, mejorando la mantenibilidad del sistema.",
      Despliegue:
        "API y base de datos alojadas en DigitalOcean, frontend desplegado en Vercel.",
    },
  },
  project2: {
    title: "2. Aplicación de Inventario",
    documentUrl:
      "https://drive.google.com/file/d/1YweIdRNhstEROioSNWLhHg8qtEu6s_9r/view?usp=drive_link",
    demoUrl:
      "https://www.appsheet.com/start/eab9335e-4c64-453c-ae2e-14f451301dcb",
    projectListDescription: [
      "Reducción significativa en la pérdida de materiales.",
      "Eliminación de la dependencia de registros en papel.",
      "Obtención de mayor precisión en la información de stock.",
    ],
    projectListTechnologies: {
      AppSheet:
        "Plataforma de desarrollo sin código para la creación de la aplicación.",
      "Google Sheets":
        "Empleado como base de datos para el almacenamiento y gestión de la información.",
    },
  },
};

export { PROJECT_TEXT };
