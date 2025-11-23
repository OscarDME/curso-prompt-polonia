// src/lib/bonus-05-chatgpt-training-content.js

export const bonus05ChatGPTTraining = {
  title: "Entrenamiento ChatGPT: de cero a avanzado",
  heroText:
    "Un recorrido práctico para pasar de pedir cosas sueltas a construir sistemas completos con ChatGPT y tu Banco Secreto de Prompts.",

  classes: [
    {
      id: "intro-fundamentos",
      title: "Clase 1 — Fundamentos de ChatGPT y la IA generativa",
      level: "Principiante",
      duration: "20–30 min",
      summary:
        "Entiende qué es realmente ChatGPT, qué puede y qué no puede hacer, y cómo encaja dentro de tu flujo de trabajo como creador o emprendedor.",
      goals: [
        "Tener claridad sobre qué es y qué no es ChatGPT.",
        "Identificar tareas donde la IA realmente te aporta ventaja.",
        "Evitar expectativas irreales y frustraciones innecesarias.",
      ],
      outline: [
        "Qué es un modelo de lenguaje y cómo piensa (spoiler: no piensa como humanos).",
        "Qué tipo de tareas resuelve mejor ChatGPT.",
        "Limitaciones típicas: alucinaciones, fechas, contexto, datos privados.",
        "Buenas prácticas básicas para interactuar con la IA.",
        "Cómo encajar ChatGPT dentro de tu día a día.",
      ],
      content: [
        "Antes de hablar de prompts avanzados, necesitamos recalibrar expectativas. ChatGPT no es un oráculo perfecto ni una persona dentro del ordenador: es un modelo de lenguaje entrenado para predecir palabras con mucha coherencia.",
        "Lo que esto significa en la práctica es que es extremadamente bueno en tareas como escribir borradores, proponer ideas, reescribir textos, generar estructuras y ayudarte a pensar. Pero no es tan bueno cuando le pides datos ultra específicos, información muy reciente o decisiones que exigen criterio humano profundo.",
        "Una forma útil de verlo es así: tú pones el criterio y el contexto; ChatGPT pone la velocidad y la creatividad. Cuando intentas delegarle el criterio, aparecen frustraciones: respuestas genéricas, errores o cosas que 'suenan bien' pero no son correctas.",
        "Piensa en tu vida o negocio actual y haz una lista rápida de tareas repetitivas: redactar correos, crear posts, preparar explicaciones, resumir información, traducir, organizar ideas… Esas son candidatas ideales para apoyarte en la IA y liberar tiempo mental.",
        "A lo largo de este entrenamiento, el objetivo no es solo que sepas escribir mejores prompts, sino que entiendas cómo usar ChatGPT como parte de un sistema más grande que incluye tu Banco Secreto de Prompts, tus herramientas y tus objetivos reales.",
      ],
    },
    {
      id: "prompting-basico",
      title: "Clase 2 — Prompting básico: hablarle claro a la IA",
      level: "Principiante",
      duration: "25–35 min",
      summary:
        "Aprende las piezas básicas de un buen prompt: rol, contexto, objetivo, formato de respuesta y tono.",
      goals: [
        "Dominar la estructura base de un prompt efectivo.",
        "Saber especificar el formato de salida que quieres.",
        "Reducir al mínimo las respuestas genéricas.",
      ],
      outline: [
        "Componentes de un buen prompt.",
        "Definir el rol de la IA.",
        "Dar contexto suficiente (pero no infinito).",
        "Pedir formato de respuesta claro.",
        "Controlar el tono y el nivel de detalle.",
      ],
      content: [
        "La mayoría de personas usa ChatGPT como si estuviera mandándole mensajes sueltos a WhatsApp: frases cortas, sin contexto y con peticiones muy vagas. El resultado: respuestas igual de vagas.",
        "Un buen prompt básico suele incluir cinco elementos: 1) Rol (quién quieres que sea la IA), 2) Contexto (de qué va el tema), 3) Objetivo (qué quieres lograr), 4) Formato de respuesta (cómo quieres que te responda) y 5) Tono (cómo quieres que suene).",
        "Por ejemplo, en lugar de decir simplemente: 'Hazme un post sobre hábitos', podrías decir: 'Actúa como un creador de contenido especializado en productividad para emprendedores. Mi audiencia son freelancers que se sienten desorganizados. Quiero un post corto para Instagram explicando 3 hábitos simples para empezar a organizar su día. Respóndeme en formato carrusel: título llamativo y 3 bullets claros. Tono cercano y sin tecnicismos'.",
        "Cuando defines el rol, estás afinando la 'personalidad' de la IA. Cuando das contexto, le das materia prima. Cuando pides formato y tono, reduces la fricción de tener que adaptar luego el contenido.",
        "A partir de esta clase, intenta siempre revisar tus prompts con una mini checklist: ¿definí rol? ¿di contexto? ¿dejé claro el objetivo? ¿pedí formato concreto? ¿mencioné el tono deseado?",
      ],
    },
    {
      id: "prompting-intermedio",
      title: "Clase 3 — Prompting intermedio: iterar y refinar resultados",
      level: "Intermedio",
      duration: "25–40 min",
      summary:
        "Deja de conformarte con la primera respuesta. Aprende a iterar de forma inteligente hasta llegar a resultados que realmente puedas usar.",
      goals: [
        "Entender la importancia de la iteración con la IA.",
        "Tener frases listas para refinar y mejorar respuestas.",
        "Aprender a combinar varios prompts en una mini-conversación.",
      ],
      outline: [
        "La primera respuesta rara vez es la mejor.",
        "Cómo pedir revisiones específicas.",
        "Refinar enfoque, tono y nivel de detalle.",
        "Añadir ejemplos y contraejemplos.",
        "Combinar varias respuestas en una mejor.",
      ],
      content: [
        "Una de las habilidades clave con ChatGPT no es escribir el prompt perfecto, sino saber conversar con la IA. La primera respuesta suele ser un borrador. El valor aparece cuando empiezas a iterar.",
        "En lugar de borrar y volver a empezar, puedes decir cosas como: 'Hazlo más directo y con frases más cortas', 'Pon ejemplos concretos para alguien que está empezando', 'Reduce esto a la mitad de longitud sin perder las ideas clave' o 'Dame tres versiones alternativas enfocadas en beneficios distintos'.",
        "También puedes refinar el enfoque: 'Este enfoque suena muy motivacional, pero quiero algo más técnico y orientado a datos' o 'Hazlo para una audiencia que ya tiene experiencia, no para principiantes'.",
        "Otra técnica útil es pedirle a la IA que critique su propio resultado: 'Actúa como un editor exigente. ¿Qué mejorarías de este texto para que sea más persuasivo y claro?'. Luego puedes pedirle que aplique sus propias sugerencias.",
        "Piensa en ChatGPT como un colaborador que trabaja contigo sobre una misma pieza, no como alguien que la clava todo a la primera. Tu trabajo es guiar la iteración hasta que el resultado encaje con lo que necesitas.",
      ],
    },
    {
      id: "prompting-avanzado-sistemas",
      title:
        "Clase 4 — Prompting avanzado: sistemas, plantillas y prompts maestros",
      level: "Avanzado",
      duration: "30–45 min",
      summary:
        "Pasa de usar prompts sueltos a construir pequeños sistemas con prompts maestros, plantillas y asistentes especializados.",
      goals: [
        "Entender qué es un prompt maestro y cómo se diferencia de un prompt puntual.",
        "Crear plantillas que puedas reutilizar una y otra vez.",
        "Conectar tu Banco Secreto de Prompts con tus flujos reales de trabajo.",
      ],
      outline: [
        "Prompt puntual vs. prompt maestro.",
        "Roles persistentes y asistentes especializados.",
        "Plantillas de prompts para tareas recurrentes.",
        "Conectar módulos: texto, imagen, vídeo, herramientas.",
        "Diseñar tu propio sistema mínimo con IA.",
      ],
      content: [
        "Un prompt maestro es un texto más largo y detallado que define el rol, las reglas, el estilo y la forma de responder de la IA para un tipo de tarea concreto. Es lo que estás usando en los +30 asistentes virtuales del Bono #02.",
        "En vez de improvisar cada vez, defines una vez cómo quieres que actúe tu 'Copywriter Pro', tu 'Social Media Manager' o tu 'Consultor de negocio', y luego solo le das contexto nuevo para cada caso.",
        "También puedes crear plantillas de prompts para tareas recurrentes, por ejemplo: 'escribir guiones de Reels', 'transformar un artículo largo en 5 posts', 'redactar emails de bienvenida' o 'traducir contenido manteniendo el tono'. Cada plantilla tiene huecos que rellenas según el proyecto.",
        "Tu Banco Secreto de Prompts ya te da una base grande de estos prompts y asistentes. Lo que cambia con esta clase es tu mentalidad: de verlos como una colección caótica a verlos como partes de un sistema que responde a tus objetivos concretos.",
        "Un buen ejercicio es mapear tus tareas semanales (crear contenido, hablar con clientes, mejorar productos, etc.) y decidir qué 3–5 prompts maestros y qué 5–10 plantillas usarás siempre para esas tareas. Eso se convierte en tu sistema mínimo con IA.",
      ],
    },
    {
      id: "aplicacion-negocio",
      title:
        "Clase 5 — Aplicar ChatGPT a tu negocio, contenidos y marca personal",
      level: "Intermedio",
      duration: "30–40 min",
      summary:
        "Aterriza todo en casos concretos: contenido, funnels, productos, atención a clientes y procesos internos.",
      goals: [
        "Detectar oportunidades concretas de uso de IA en tu contexto.",
        "Evitar usar ChatGPT solo para 'content por content'.",
        "Tener un mapa claro de casos de uso prioritarios.",
      ],
      outline: [
        "Aplicaciones en contenido (posts, guiones, carruseles, emails).",
        "Aplicaciones en negocio (ofertas, funnels, research, scripts).",
        "Aplicaciones en procesos internos (documentación, SOPs, resúmenes).",
        "Equilibrio: lo que sí delegar a la IA y lo que no.",
        "Cómo medir si la IA te está ahorrando tiempo de verdad.",
      ],
      content: [
        "Si usas ChatGPT solo para generar ideas de contenido pero no lo integras en tu oferta, tus productos o tus procesos internos, te quedas en la superficie. El verdadero salto viene cuando conectas la IA con los puntos clave de tu negocio.",
        "Por ejemplo, en contenido puedes usarla para: generar calendarios mensuales, convertir una pieza en muchas (repurposing), adaptar tono a distintos canales y redactar guiones de vídeo. En negocio, puedes apoyarte en IA para definir ofertas, escribir páginas de venta, preparar guiones de llamadas o sintetizar feedback de clientes.",
        "En procesos internos, ChatGPT es ideal para crear documentación: SOPs (procedimientos), checklists, guías internas y resúmenes de reuniones. También puede ayudarte a ordenar ideas dispersas en una estructura lógica.",
        "La clave es que midas si la IA te está ahorrando tiempo o solo te está entreteniendo. Una buena pregunta es: '¿Qué tareas he dejado de hacer manualmente gracias a este flujo con IA?'. Si la respuesta es 'ninguna', hay margen para ajustar.",
        "Tu objetivo no es usar IA por moda, sino usarla para liberar tiempo y energía para lo que solo tú puedes hacer: tomar decisiones, construir relaciones y crear visión a largo plazo.",
      ],
    },
    {
      id: "productividad-flujos",
      title: "Clase 6 — Productividad y flujos de trabajo con ChatGPT",
      level: "Intermedio",
      duration: "20–30 min",
      summary:
        "Termina montando un flujo de trabajo realista con ChatGPT y tu Banco Secreto de Prompts para tu día a día.",
      goals: [
        "Diseñar un flujo de trabajo diario/semanal con IA.",
        "Evitar el bloqueo de 'no sé qué prompt usar ahora'.",
        "Instalar un sistema sencillo que puedas mantener en el tiempo.",
      ],
      outline: [
        "Diseñar tu rutina de IA (diaria y semanal).",
        "Crear tu propia mini biblioteca de favoritos.",
        "Cómo documentar tus mejores prompts y resultados.",
        "Errores comunes al intentar 'vivir dentro de ChatGPT'.",
        "Siguiente paso: integrar otras herramientas (Gamma, herramientas de IA, etc.).",
      ],
      content: [
        "Un error habitual es abrir ChatGPT sin plan y quedarse dando vueltas entre respuestas que no se usan. Lo contrario es abrirlo como parte de una rutina clara: crear ideas, desarrollar piezas clave, revisar texto, documentar decisiones.",
        "Puedes, por ejemplo, definir una 'rutina de IA' diaria de 20–30 minutos donde: 1) generas ideas de contenido, 2) desarrollas 1 pieza concreta, y 3) organizas una tarea interna (un proceso, un email, una explicación).",
        "También es importante que tengas tu propia mini biblioteca de prompts favoritos. Aunque tengas acceso a miles de prompts, en la práctica acabarás usando unos pocos de forma recurrente. Tenlos guardados en un documento, Notion, Google Docs o la herramienta que prefieras.",
        "Documenta los resultados que más te gustan: pega ejemplos de respuestas que realmente te sirvieron y anota qué prompt usaste, qué le cambiaste y por qué funcionó. Es la forma de que tu sistema sea cada vez más personalizado.",
        "ChatGPT y tu Banco Secreto de Prompts son herramientas potentes, pero necesitas un marco sencillo para no ahogarte: mejor pocos flujos claros y repetibles que cien experimentos dispersos que nunca integras en tu trabajo real.",
      ],
    },
  ],
};
