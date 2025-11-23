// src/lib/bonus-03-carruseles-content.js

export const bonus03ManualCarruseles = {
  id: "bonus-03",
  title: "Manual de carruseles virales",
  subtitle:
    "Aprende el secreto de los carruseles tipo historieta que generan mucho engagement.",
  heroText: `En este manual vas a aprender a diseñar carruseles tipo historieta que atrapan la atención, cuentan historias y llevan a la acción.

No es solo teoría: verás estructuras, ejemplos prácticos y prompts listos para usar con tu Banco Secreto de Prompts.`,

  sections: [
    {
      id: "que-es-carrusel-viral",
      title: "1. Qué es un carrusel viral y por qué funciona",
      body: [
        `Un carrusel viral no es solo una serie de láminas bonitas. Es una **historia comprimida** en pocas diapositivas que hace tres cosas al mismo tiempo:`,
      ],
      bullets: [
        {
          label: "Capta atención",
          description:
            "La primera lámina funciona como un gancho brutal: una promesa fuerte, una pregunta incómoda o una frase contraintuitiva."
        },
        {
          label: "Mantiene curiosidad",
          description:
            "Cada lámina abre un pequeño bucle: revela algo… pero deja algo pendiente para la siguiente."
        },
        {
          label: "Lleva a la acción",
          description:
            "La última lámina convierte la curiosidad en acción: seguirte, guardar el post, comentar o ir a un enlace."
        }
      ],
      highlight:
        "Piensa en el carrusel como un mini embudo: la primera lámina es el anuncio, el cuerpo es la historia y la última lámina es la página de venta en pequeño."
    },
    {
      id: "anatomia-historieta",
      title: "2. Anatomía de un carrusel tipo historieta",
      body: [
        `El formato “tipo historieta” funciona porque mezcla **historia + viñetas**. Aquí tienes una estructura base que puedes reutilizar en casi cualquier nicho:`
      ],
      bullets: [
        {
          label: "Lámina 1 — El gancho",
          description:
            "Frase grande, clara y directa. Debe generar curiosidad o identificación inmediata. Ejemplo: “El error silencioso que está matando tus ventas”."
        },
        {
          label: "Lámina 2 — El contexto",
          description:
            "Presentas al “personaje” (puedes ser tú, un cliente, un arquetipo). Explicas brevemente la situación inicial."
        },
        {
          label: "Láminas 3–5 — El conflicto",
          description:
            "Aquí se desarrolla el problema: obstáculos, frustraciones, intentos fallidos. Ideal para mostrar “viñetas” con mini escenas."
        },
        {
          label: "Lámina 6 — La solución",
          description:
            "Introduces el cambio de enfoque, método, herramienta o aprendizaje que transforma la situación."
        },
        {
          label: "Lámina 7 — La lección",
          description:
            "Condensas la idea clave en una frase clara. Es la “moraleja” que el lector debe recordar."
        },
        {
          label: "Lámina 8 — Llamado a la acción",
          description:
            "Pides una acción específica: seguir tu cuenta, guardar el post, comentar, ir al link en bio, etc."
        }
      ],
      highlight:
        "No necesitas usar siempre 8 láminas. Esta estructura es una guía: puedes comprimirla (5–6 láminas) o extenderla (hasta 10–12) según el caso."
    },
    {
      id: "estructuras-base",
      title: "3. Estructuras de carrusel que encontrarás en este manual",
      body: [
        `Para que no empieces desde cero, en este manual trabajaremos con **plantillas de estructura** que puedes reutilizar en cualquier nicho.`,
        `Estas son algunas de las principales:`
      ],
      bullets: [
        {
          label: "Historia de transformación",
          description:
            "Antes / Después con un personaje. Perfecto para casos de éxito, cambios de hábito o resultados de clientes."
        },
        {
          label: "Errores comunes",
          description:
            "Lista de errores con viñetas visuales. Ideal para educar y al mismo tiempo posicionarte como experto."
        },
        {
          label: "Paso a paso",
          description:
            "Guía breve tipo tutorial: “5 pasos para X”. Muy guardable y compartible."
        },
        {
          label: "Mitos vs realidad",
          description:
            "Contraponer creencias del mercado vs. lo que realmente funciona. Genera debate y comentarios."
        },
        {
          label: "Antes / Después de mentalidad",
          description:
            "Comparas la forma antigua de ver un tema con una nueva perspectiva. Muy potente para contenido profundo."
        }
      ],
      extra: [
        `En tu día a día, puedes combinar estas estructuras con los prompts del Banco Secreto: primero eliges la estructura, luego usas un prompt para que la IA genere el contenido base.`
      ]
    },
    {
      id: "como-usar-con-banco",
      title: "4. Cómo usar este manual con el Banco Secreto de Prompts",
      body: [
        `La idea no es que escribas cada carrusel desde cero, sino que **armes un sistema**:`,
        `1) Eliges una estructura de este manual.  
2) Abres tu módulo de **Prompts de texto**.  
3) Seleccionas un prompt para ideas de contenidos, storytelling o educación.  
4) Le pides a la IA que genere el contenido siguiendo la estructura de este manual.`,
        `Así conviertes este PDF en un **motor de ideas** en lugar de un documento más que se queda guardado.`
      ],
      highlight:
        "Consejo: crea una nota en tu gestor favorito llamada “Plantillas de carruseles” y copia allí tus estructuras favoritas de este manual para tenerlas siempre a mano."
    },
    {
      id: "prompts-clave",
      title: "5. Prompts clave para crear carruseles tipo historieta",
      body: [
        `A continuación tienes algunos prompts listos para combinar este manual con tu IA. Úsalos como base y adáptalos a tu estilo.`,
        `**Prompt 1 — Generar ideas de carruseles con estructura de historia**`,
        `Quiero que actúes como un estratega de contenido especializado en Instagram y LinkedIn.

Mi nicho es: [describe tu nicho].  
Mi cliente ideal es: [describe a tu cliente ideal].  
Mi objetivo es: [captar leads / educar / vender / posicionar mi marca].

Usa la estructura de “Historia de transformación” para proponer **10 ideas de carruseles tipo historieta**.  
Para cada carrusel, dame:
- Título para la lámina 1 (gancho fuerte).  
- Resumen de la historia (2–3 líneas).  
- Resultado o transformación que se muestra.  
- CTA sugerida para la última lámina.`,
        `**Prompt 2 — Escribir el contenido de cada lámina**`,
        `A partir de esta idea de carrusel:

[pega aquí la idea elegida]

Quiero que escribas el contenido para un carrusel tipo historieta con 8 láminas máximo, usando esta estructura:
1) Gancho  
2) Contexto  
3) Conflicto (parte 1)  
4) Conflicto (parte 2)  
5) Giro / descubrimiento  
6) Solución o método  
7) Lección clave  
8) CTA

Para cada lámina, escribe:
- Un título corto y llamativo (máx. 8 palabras).  
- Un texto breve de apoyo (1–3 frases sencillas).`,
        `**Prompt 3 — Adaptar el carrusel a otro formato**`,
        `Te voy a pegar el contenido de un carrusel en formato texto.

[pega aquí todo el carrusel]

Quiero que:
1) Lo conviertas en un guion para vídeo corto (Reel/TikTok).  
2) Resumas el carrusel en un solo post de LinkedIn.  
3) Me des 3 opciones de títulos alternativos para la lámina 1.`,
        `**Prompt 4 — Ajustar tono y voz de marca**`,
        `A continuación tienes el contenido de un carrusel:

[pega aquí el carrusel]

Quiero que ajustes el texto para que suene con este estilo de marca:
- Tono: [cercano / profesional / divertido / directo].  
- Nivel de tecnicismo: [bajo / medio / alto].  
- Palabras que sí queremos usar: [lista].  
- Palabras que preferimos evitar: [lista].

Devuélveme el carrusel mejorado, respetando la estructura lámina por lámina.`
      ],
      highlight:
        "Guarda tus prompts favoritos en tu propia biblioteca. A partir de 3–5 prompts bien configurados puedes generar decenas de carruseles sin empezar desde cero."
    },
    {
      id: "plan-implementacion",
      title: "6. Plan de implementación en 7 días",
      body: [
        `Para que este bono no se quede en teoría, aquí tienes un mini plan de acción para ponerlo en marcha en una semana:`,
        `• Día 1: Elige 1–2 estructuras favoritas de este manual.  
• Día 2: Usa el **Prompt 1** para generar al menos 10 ideas de carruseles.  
• Día 3: Escoge tus 3 mejores ideas y desarrolla su contenido con el **Prompt 2**.  
• Día 4: Ajusta el tono con el **Prompt 4** y revisa que todo suene a tu voz.  
• Día 5: Diseña los carruseles en tu herramienta favorita (Canva, Figma, etc.).  
• Día 6: Programa la publicación de al menos 2 carruseles.  
• Día 7: Analiza qué funcionó mejor y toma notas para el siguiente lote.`,
        `Si repites este ciclo cada semana, en pocas semanas tendrás un sistema de contenido visual que trabaja por tu marca incluso cuando no estás conectado.`
      ]
    }
  ]
};
