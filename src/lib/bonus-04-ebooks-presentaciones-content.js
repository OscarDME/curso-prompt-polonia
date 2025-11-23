// src/lib/bonus-04-ebooks-presentaciones-content.js

export const bonus04EbooksPresentaciones = {
  id: "bonus-04",
  title: "Generador de e-books y presentaciones",
  subtitle:
    "Crea la estructura completa de materiales ricos en minutos con ayuda de IA.",
  heroText: `Este bono te da un sistema para crear e-books y presentaciones profesionales sin empezar desde cero.

Vas a combinar prompts estratégicos con herramientas como Gamma para estructurar, diseñar y exportar tus materiales en minutos, no en semanas.`,

  sections: [
    {
      id: "que-vas-a-lograr",
      title: "1. Qué vas a lograr con este generador",
      body: [
        `La idea de este bono es que puedas crear **materiales ricos** (e-books, lead magnets, presentaciones de venta y contenidos educativos) con un flujo de trabajo simple:`,
        `1) Defines objetivo y público.  
2) Usas un prompt maestro para generar la estructura.  
3) Refinas el contenido con tu Banco Secreto de Prompts.  
4) Lo llevas a una herramienta visual como Gamma para darle forma profesional.`,
      ],
      bullets: [
        {
          label: "E-books",
          description:
            "Guías descargables, lead magnets, mini libros o documentos que posicionan tu autoridad."
        },
        {
          label: "Presentaciones de venta",
          description:
            "Decks para webinars, llamadas de venta, sesiones 1:1 o propuestas a clientes."
        },
        {
          label: "Contenidos educativos",
          description:
            "Diapositivas para clases, talleres, entrenamientos internos o cursos online."
        }
      ],
      highlight:
        "No necesitas ser diseñador. Tu foco estará en las ideas y el mensaje; la IA te ayuda con la estructura y Gamma te ayuda con el formato visual."
    },
    {
      id: "flujo-general",
      title: "2. Flujo general del sistema (visión rápida)",
      body: [
        `Antes de entrar a los prompts, mira el flujo general que te recomiendo para trabajar:`,
        `• Paso 1 — Claridad: define para quién es el material y qué quieres que pase al final (ej. que descargue algo, que pida una llamada, que comprenda un concepto).  
• Paso 2 — Estructura: usa el **Prompt maestro de e-book** o el **Prompt maestro de presentación** para que la IA proponga índice y secciones.  
• Paso 3 — Profundizar: usa tu Biblioteca de Prompts (texto) para desarrollar cada capítulo o diapositiva.  
• Paso 4 — Formato: lleva el contenido a Gamma para convertirlo en e-book visual o presentación.  
• Paso 5 — Ajustes: revisa, adapta tono y asegúrate de que todo esté alineado con tu voz de marca.`
      ],
      highlight:
        "Tu objetivo no es escribir perfecto a la primera, sino tener una versión 80% lista que puedas pulir en poco tiempo."
    },
    {
      id: "prompt-maestro-ebook",
      title: "3. Prompt maestro para generar un e-book completo",
      body: [
        `Este prompt está pensado para que la IA te dé **estructura + contenidos base** de un e-book. Puedes usarlo en ChatGPT o en tu IA favorita.`,
        `**Prompt maestro de e-book**`,
        `Quiero que actúes como un estratega de contenidos y redactor especializado en e-books educativos y de marketing.

Ayúdame a crear un e-book profesional siguiendo estas indicaciones:

1) Tema principal del e-book: [describe el tema].  
2) Público objetivo: [quién va a leerlo].  
3) Objetivo principal del e-book: [educar / captar leads / preparar una venta / posicionar autoridad].  
4) Tono deseado: [cercano / profesional / técnico / divertido / inspirador].  
5) Nivel de profundidad: [principiante / intermedio / avanzado].

Quiero que me entregues:

A) Título principal del e-book (3 opciones).  
B) Subtítulo poderoso (3 opciones).  
C) Índice detallado con capítulos y subcapítulos.  
D) Para cada capítulo:
   - Objetivo del capítulo en 1–2 frases.
   - 3–5 ideas clave a desarrollar.
   - Ejemplos o mini historias sugeridas.
E) Sugerencia de llamada a la acción final (CTA) para el último capítulo.

No escribas el e-book completo todavía. Primero dame toda la estructura clara y organizada.`,
        `Después de esto, puedes pedirle algo como:

> “Ahora escribe el Capítulo 1 en detalle siguiendo la estructura propuesta y adaptando el tono a [tu estilo]”.`
      ],
      highlight:
        "Haz que la IA se enfoque primero en la estructura. Un buen índice hace que el resto sea mucho más rápido."
    },
    {
      id: "prompt-maestro-presentacion",
      title: "4. Prompt maestro para generar una presentación",
      body: [
        `Ahora verás un prompt maestro para presentaciones tipo diapositivas. Te sirve tanto para Gamma como para cualquier herramienta de slides.`,
        `**Prompt maestro de presentación**`,
        `Quiero que actúes como un experto en presentaciones para negocios digitales y formación online.

Voy a crear una presentación con estas características:

1) Tema central: [tema].  
2) Contexto: [webinar / clase / llamada de ventas / ponencia / training interno].  
3) Público objetivo: [describe brevemente].  
4) Duración aproximada: [en minutos] o número de diapositivas aproximado.  
5) Objetivo principal: [Educar / vender / inspirar / cerrar clientes].  
6) Tono: [cercano / profesional / motivador / técnico].

Con esta información, quiero que:

A) Propongas un título potente para la presentación (3 opciones).  
B) Diseñes una estructura en secciones (introducción, cuerpo, cierre).  
C) Definas el contenido de cada diapositiva con:
   - Título de la diapositiva.
   - 3–5 bullets clave (frases cortas, sin párrafos largos).
   - Notas para el presentador (qué debería decir o enfatizar).

Entrega la respuesta en formato claro tipo:

[Diapositiva X]  
Título:  
Bullets:  
Notas para el presentador:`,
        `Después de tener la estructura, puedes decir:

> “Convierte estas diapositivas en versión ultra resumida para redes sociales”  
o  
> “Dame ejemplos visuales para cada diapositiva (iconos, imágenes, metáforas visuales)”.`
      ],
      highlight:
        "La clave de una buena presentación no es la animación, es el guion: una idea clara por diapositiva y un hilo lógico de principio a fin."
    },
    {
      id: "gamma-intro",
      title: "5. Cómo usar Gamma para convertir tus prompts en e-books y presentaciones",
      body: [
        `Gamma (gamma.app) es una herramienta que te permite crear presentaciones, documentos y páginas visuales **a partir de texto**. Es perfecta para combinar con tu Banco Secreto de Prompts porque sabe “traducir” estructura en slides bonitas.`,
        `Aquí tienes un flujo simple para usar Gamma con tus prompts:`,
        `**Paso 1 — Crea tu cuenta y entra a Gamma**  
- Ve a la web de Gamma y crea una cuenta (puede ser con email o con Google).  
- Una vez dentro, verás la opción de crear una **presentación**, un **documento** o una **página**. Para este bono nos interesa sobre todo **presentaciones** y **docs**.`,
        `**Paso 2 — Elige “crear desde un prompt”**  
Gamma tiene una opción donde puedes pegar tu texto o descripción y que la herramienta genere el documento base.  
Aquí es donde usas el resultado de tus prompts maestros:  
- Primero generas en ChatGPT la estructura de tu e-book o presentación.  
- Luego copias ese índice y los puntos clave.  
- En Gamma, eliges crear un nuevo proyecto y pegas esa información como punto de partida.`,
        `**Paso 3 — Pega la estructura generada por la IA**  
Cuando Gamma te pida una descripción del contenido, pega:  
- El título.  
- El índice o lista de secciones.  
- Opcionalmente, algunos bullets clave por sección.

Gamma se encargará de:  
- Crear diapositivas o páginas para cada parte.  
- Sugerir diseño, layout y jerarquía visual.`,
        `**Paso 4 — Ajusta texto y diseño dentro de Gamma**  
Una vez que Gamma genere la propuesta inicial:  
- Revisa que los títulos sean claros.  
- Ajusta los textos con tus propias palabras si hace falta.  
- Cambia el layout de las diapositivas que no te convenzan (Gamma suele ofrecer varias variaciones de diseño).  
- Añade imágenes, iconos o capturas según lo que quieras ilustrar.`,
        `**Paso 5 — Exporta o comparte**  
Cuando tengas tu e-book o presentación lista, puedes:  
- Compartir un enlace directo generado por Gamma.  
- Exportar a PDF para entregar como lead magnet.  
- Usar la presentación directamente desde Gamma en modo “presentar”.`,
      ],
      highlight:
        "Piensa en la combinación así: **ChatGPT = cerebro que organiza y escribe | Gamma = manos que maquetan y diseñan**. Tú solo supervisas y ajustas."
    },
    {
      id: "gamma-con-banco",
      title: "6. Cómo integrar Gamma con el Banco Secreto de Prompts",
      body: [
        `Aquí tienes un ejemplo completo de cómo combinar todo tu ecosistema en un solo flujo:`,
        `1) Entras a **Prompts de texto** y eliges un prompt para generar ideas de e-books o materiales educativos.  
2) Cuando tengas una idea clara, usas el **Prompt maestro de e-book** (sección 3) para generar título, índice y estructura.  
3) Usas más prompts de tu biblioteca (guiones, storytelling, ejemplos) para desarrollar cada capítulo.  
4) Copias el índice y los resúmenes de capítulos a Gamma y creas un nuevo documento o presentación **desde un prompt**.  
5) Gamma genera un e-book o presentación con diseño inicial.  
6) Ajustas textos, añades branding, logotipo y colores de tu marca.  
7) Exportas el resultado y lo usas como:  
   - Lead magnet  
   - Recurso de un curso  
   - Presentación para una sesión en vivo  
   - PDF que acompaña a tu entrenamiento.`,
      ],
      highlight:
        "Tu ventaja es que no dependes de un diseñador para lanzar materiales de calidad. Puedes validar ideas rápido y mejorar el diseño más adelante si lo necesitas."
    },
    {
      id: "plan-accion",
      title: "7. Plan de acción rápido: tu primer e-book o presentación en 48–72 horas",
      body: [
        `Para terminar, te propongo un plan simple para crear tu primer material rico usando este bono:`,
        `• Día 1  
  - Elige el tema y el objetivo del e-book o presentación.  
  - Usa el **Prompt maestro de e-book** o de **presentación** para generar estructura e índice.  

• Día 2  
  - Desarrolla al menos 2–3 capítulos o secciones con ayuda de tu Banco Secreto de Prompts.  
  - Revisa el tono y ajusta con prompts de “voz de marca” si hace falta.  

• Día 3  
  - Lleva todo a Gamma.  
  - Ajusta diseño, revisa textos finales y exporta tu material (PDF o presentación).`,
        `A partir de aquí, puedes repetir el proceso una y otra vez para tener una biblioteca creciente de recursos que trabajan a favor de tu marca y tu negocio.`
      ]
    }
  ]
};
