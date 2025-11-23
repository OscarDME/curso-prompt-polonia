// src/lib/bonus-06-ia-tools-arsenal-content.js

export const bonus06IAToolsArsenal = {
  title: "Arsenal con +600 herramientas de IA",
  heroText:
    "Una base curada de herramientas de IA para crear, editar, automatizar y escalar tu negocio digital sin subir costos innecesariamente.",

  sections: [
    {
      id: "como-funciona",
      title: "1. Cómo usar este arsenal sin abrumarte",
      body: [
        `Este bono está pensado como una **base de consulta rápida**, no como algo que tengas que memorizar. La idea es que cuando te preguntes “¿hay una herramienta de IA para esto?”, vengas aquí.`,
        `En lugar de intentar usar 50 herramientas a la vez, te recomiendo este enfoque:`,
      ],
      bullets: [
        {
          label: "Empieza por tu cuello de botella",
          description:
            "¿Qué te consume más tiempo hoy? ¿Escribir, editar vídeo, diseñar, organizar tareas, responder mensajes? Empieza por ese área."
        },
        {
          label: "Elige 1–3 herramientas por vez",
          description:
            "No necesitas 20 apps para vídeo o 10 para diseño. Prueba pocas, decide y quédate con las que encajen en tu flujo."
        },
        {
          label: "Conecta todo con tu Banco Secreto",
          description:
            "Usa tus prompts para generar ideas, guiones, textos y luego pásalos a estas herramientas para producir el resultado final."
        }
      ],
      highlight:
        "Regla práctica: si una herramienta no se gana su lugar en tu flujo en 1–2 semanas, la dejas ir. El objetivo es simplificar, no complicar."
    },
    {
      id: "categorias",
      title: "2. Categorías principales del arsenal",
      body: [
        `En lugar de tener una lista caótica, hemos organizado las herramientas en grandes categorías para que encuentres rápido lo que necesitas.`,
        `Estas son algunas de las categorías que verás dentro del arsenal:`,
      ],
      bullets: [
        {
          label: "Vídeo",
          description:
            "Edición, subtítulos automáticos, montaje rápido, transformación de texto a vídeo, avatares, etc."
        },
        {
          label: "Imagen y diseño",
          description:
            "Generación de imágenes, portadas, thumbnails, logos, banners, anuncios visuales, etc."
        },
        {
          label: "Web y funnels",
          description:
            "Constructores de páginas, landings, funnels y sitios con ayuda de IA."
        },
        {
          label: "Automatización",
          description:
            "Herramientas para conectar apps, disparar acciones automáticas y evitar tareas repetitivas."
        },
        {
          label: "Escritura y copy",
          description:
            "Redacción, reescritura, corrección, generación de copies, emails, scripts, etc."
        },
        {
          label: "Productividad y organización",
          description:
            "Notion con IA, asistentes de tareas, organizadores de ideas, resúmenes de documentos."
        }
      ],
      highlight:
        "Este bono no va de probar apps por probar, sino de encontrar la pieza correcta para cada parte de tu sistema con IA."
    },
    {
      id: "como-leer-fichas",
      title: "3. Cómo leer cada ficha de herramienta",
      body: [
        `Cada herramienta en el arsenal sigue una estructura estándar para que no pierdas tiempo investigando desde cero:`,
      ],
      bullets: [
        {
          label: "Nombre",
          description: "Cómo se llama la herramienta en el mercado."
        },
        {
          label: "Categoría",
          description:
            "Área principal donde aporta valor (vídeo, imagen, automatización, etc.)."
        },
        {
          label: "Descripción",
          description:
            "Qué hace y para qué tipo de usuario o caso es especialmente útil."
        },
        {
          label: "Cómo combinarla con tu Banco Secreto",
          description:
            "Ejemplos concretos de cómo usar tus prompts y contenidos dentro de esa herramienta."
        }
      ],
      highlight:
        "Piensa en esto como un catálogo curado: Lees rápido, decides si te sirve y pasas a la acción sin caer en el agujero negro de probar apps al azar."
    },
  ],

  // 🔧 Herramientas de ejemplo (tú luego amplías este listado hasta las +600)
  tools: [
    {
      id: "gamma",
      name: "Gamma",
      category: "Presentaciones y docs",
      description:
        "Creador de presentaciones y documentos visuales impulsado por IA. Convierte texto en decks y e-books con diseño profesional.",
      howToUseWithBank:
        "Usa tus prompts de e-books y presentaciones (Bono #04) para generar la estructura en ChatGPT y luego pega títulos y bullets en Gamma para que monte el diseño automáticamente.",
    },
    {
      id: "canva",
      name: "Canva",
      category: "Imagen y diseño",
      description:
        "Herramienta de diseño visual fácil de usar, ideal para portadas, carruseles, anuncios y material gráfico para redes.",
      howToUseWithBank:
        "Primero genera copies, titulares y estructuras de carruseles con tu Banco Secreto. Luego llévalos a plantillas de Canva y solo ajusta fuentes, colores y elementos visuales.",
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Vídeo",
      description:
        "Editor de vídeo sencillo con funciones de IA para subtítulos, cortes automáticos y efectos rápidos, ideal para Reels y TikTok.",
      howToUseWithBank:
        "Usa tus prompts de guion de vídeo para crear scripts de Reels. Graba o genera el vídeo y luego edítalo en CapCut añadiendo subtítulos automáticos y cortes al ritmo.",
    },
    {
      id: "descript",
      name: "Descript",
      category: "Vídeo y audio",
      description:
        "Editor de audio y vídeo basado en transcripción. Permite editar vídeos como si editaras un documento de texto.",
      howToUseWithBank:
        "Transcribe un vídeo largo en Descript, luego pega esas transcripciones en ChatGPT y usa prompts de resumen y repurposing para sacar clips, shorts y guiones derivados.",
    },
    {
      id: "figma",
      name: "Figma + plugins IA",
      category: "Diseño",
      description:
        "Herramienta de diseño colaborativo con plugins de IA para generar layouts, copy y componentes rápidos.",
      howToUseWithBank:
        "Diseña wireframes en Figma y usa tus prompts de UX/copy para llenar los textos de las secciones. Ajusta luego a mano solo lo que necesite tu toque personal.",
    },
    {
      id: "framer",
      name: "Framer",
      category: "Web y funnels",
      description:
        "Constructor de sitios web y landings con IA. Permite crear páginas modernas a partir de descripciones en texto.",
      howToUseWithBank:
        "Crea la estructura de tu página (secciones, bloques y textos) con prompts de páginas de venta. Luego pega esa estructura en Framer para que genere el diseño base del sitio.",
    },
    {
      id: "make",
      name: "Make (antiguo Integromat)",
      category: "Automatización",
      description:
        "Plataforma visual para crear automatizaciones entre múltiples aplicaciones con gran flexibilidad.",
      howToUseWithBank:
        "Diseña tu flujo ideal usando ChatGPT: qué apps se conectan, qué datos pasan y qué disparadores necesitas. Luego configura ese flujo en Make siguiendo el esquema generado por la IA.",
    },
    {
      id: "zapier",
      name: "Zapier",
      category: "Automatización",
      description:
        "Herramienta de automatización que conecta apps populares para disparar acciones según eventos específicos.",
      howToUseWithBank:
        "Usa prompts de diseño de automatizaciones para describir tu proceso ideal (ej. cuando alguien se suscribe, añade a lista + manda email). Luego traduce ese flujo a zaps concretos en Zapier.",
    },
    {
      id: "notion-ai",
      name: "Notion + IA",
      category: "Productividad",
      description:
        "Espacio de notas, bases de datos y organización con funciones integradas de IA para resumir, reescribir y generar contenido.",
      howToUseWithBank:
        "Crea un sistema de documentos para tus mejores prompts, resultados y plantillas. Usa tus prompts de resumen y organización para transformar notas caóticas en sistemas claros dentro de Notion.",
    },
    {
      id: "scribehow",
      name: "Scribe",
      category: "Documentación",
      description:
        "Herramienta para documentar procesos automáticamente mientras los ejecutas, generando guías paso a paso.",
      howToUseWithBank:
        "Graba el proceso una vez en Scribe y luego lleva esa guía a ChatGPT para pulir el texto, mejorar la claridad y convertirlo en SOPs o mini manuales internos.",
    },
    {
      id: "mubert",
      name: "Mubert",
      category: "Audio y música",
      description:
        "Generador de música con IA para fondos de vídeos, podcasts o contenido social.",
      howToUseWithBank:
        "Define en ChatGPT el tipo de ambiente sonoro que quieres (energético, calmado, cinemático) y traduce esas indicaciones en parámetros para generar pistas en Mubert.",
    },
    {
      id: "tldv",
      name: "tl;dv",
      category: "Reuniones y resúmenes",
      description:
        "Herramienta para grabar reuniones, generar transcripciones y resúmenes automáticos.",
      howToUseWithBank:
        "Después de una reunión, exporta la transcripción y úsala con tus prompts de resumen, extracción de insights y generación de acciones concretas.",
    },
  ],
};
