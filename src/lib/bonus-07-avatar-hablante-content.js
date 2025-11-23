// src/lib/bonus-07-avatar-hablante-content.js

export const bonus07AvatarHablante = {
  id: "bonus-07",
  title: "Crea tu avatar hablante de IA",
  subtitle:
    "Aprende a crear un avatar hablante con IA que graba vídeos completos por ti.",
  heroText: `En este bono vas a ver un flujo completo para tener tu propio “clon digital” grabando vídeos:

1) Definir tu avatar (o un personaje).  
2) Crear guiones con tu Banco Secreto de Prompts.  
3) Generar voz y vídeo con herramientas de IA.  
4) Montar un sistema repetible para producir vídeos en lote.`,

  sections: [
    {
      id: "vision-general",
      title: "1. Qué es un avatar hablante de IA y qué puedes hacer con él",
      body: [
        `Un avatar hablante es un vídeo donde aparece una cara (realista, tipo dibujo o estilo corporativo) hablando con sincronización labial, pero sin que tú tengas que grabarte cada vez.`,
        `Lo interesante no es solo el “truco visual”, sino lo que te permite hacer en tu negocio o marca personal:`,
      ],
      bullets: [
        {
          label: "Contenido en piloto semi-automático",
          description:
            "Puedes tener vídeos explicando conceptos, productos o procesos sin encender la cámara cada día."
        },
        {
          label: "A/B tests rápidos",
          description:
            "Pruebas distintos guiones, hooks y mensajes sin coordinar grabaciones largas ni equipo."
        },
        {
          label: "Estandarizar formación",
          description:
            "Creas módulos formativos donde el mismo avatar explica lo mismo mil veces sin cansarse."
        }
      ],
      highlight:
        "Piensa en tu avatar como una “versión escalable” de ti: dice lo que tú dirías, pero disponible 24/7."
    },
    {
      id: "flujo-completo",
      title: "2. Flujo completo: de idea a vídeo con avatar",
      body: [
        `Antes de hablar de herramientas, mira el mapa completo del flujo que vas a usar una y otra vez:`,
        `1) Definir objetivo del vídeo (qué quieres que pase después).  
2) Escribir el guion con tu Banco Secreto de Prompts.  
3) Elegir voz y estilo de avatar.  
4) Generar el vídeo con una herramienta de avatar hablante.  
5) Ajustar detalles (subtítulos, cortes, formatos para redes).`,
        `Este bono se centra en el **flujo y los prompts**. Las herramientas pueden cambiar con el tiempo, pero el sistema se mantiene.`,
      ],
      highlight:
        "Primero el sistema, luego la herramienta. Si mañana sale otra herramienta mejor, solo cambias esa pieza, no todo el proceso."
    },
    {
      id: "definir-avatar",
      title: "3. Definir el estilo y rol de tu avatar",
      body: [
        `Tu avatar puede ser literalmente tú (con tu cara) o un personaje representativo de tu marca. Lo importante es definir su **rol** y **estilo**.`,
        `Para ayudarte, responde a estas preguntas:`,
      ],
      bullets: [
        {
          label: "¿Quién es el avatar?",
          description:
            "¿Es tu versión profesional? ¿Tu versión más casual? ¿Un personaje tipo mentor? ¿Alguien de tu equipo?"
        },
        {
          label: "¿Qué tipo de vídeos hará?",
          description:
            "¿Explicativos? ¿Promocionales? ¿Tips rápidos? ¿Onboarding de clientes? ¿Lecciones de un curso?"
        },
        {
          label: "¿Qué tono usarás?",
          description:
            "Más serio, más cercano, más divertido, más técnico… Tiene que encajar con tu marca."
        }
      ],
      highlight:
        "Cuanto más claro tengas quién es el avatar, más fácil será mantener coherencia en todos los vídeos."
    },
    {
      id: "guiones-con-banco",
      title: "4. Crear guiones para tu avatar con tu Banco Secreto de Prompts",
      body: [
        `Aquí es donde el avatar se conecta directamente con tu Banco Secreto de Prompts. La idea es que nunca más te quedes mirando una página en blanco.`,
        `Puedes usar tus módulos de **Prompts de texto** y **Prompts de vídeo** para:  
- Generar ideas de vídeos.  
- Escribir guiones cortos tipo Reel/TikTok/Short.  
- Escribir guiones más largos para lecciones o vídeos explicativos.`,
        `Aquí tienes algunos prompts base que puedes reutilizar (adaptándolos con tu propia biblioteca):`,
        `**Prompt 1 — Ideas de vídeos para avatar hablante**  
Quiero que actúes como estratega de contenido en vídeo.  
Tengo un avatar hablante de IA que usaré para mi marca.

Mi nicho es: [describe tu nicho].  
Mi cliente ideal es: [describe brevemente].  
Mi objetivo con estos vídeos es: [captar leads / educar / vender / posicionar mi marca].

Propón 15 ideas de vídeos cortos (30–60s) que pueda grabar con mi avatar hablante.  
Para cada idea, indica:  
- Título / hook para la primera frase.  
- Resumen del contenido en 2–3 líneas.  
- CTA recomendada al final.`,
        `**Prompt 2 — Guion para vídeo corto con avatar**  
A partir de esta idea:

[pega aquí una de las ideas anteriores]

Escribe un guion para un vídeo de 45–60 segundos con avatar hablante.  
Estructura:  
1) Hook inicial fuerte (máx. 8 segundos).  
2) Desarrollo en 3–4 puntos clave (frases simples).  
3) Cierre con CTA clara.

Escribe el guion como si fuera texto para ser leído en voz alta: frases cortas, lenguaje sencillo y ritmo ágil.`,
        `**Prompt 3 — Adaptar el guion a distintos formatos**  
Te voy a pegar un guion de vídeo:

[pega aquí el guion]

Quiero que:  
1) Me des una versión ultra resumida para un vídeo de 15 segundos.  
2) Me des una versión más desarrollada para un vídeo de 90 segundos.  
3) Propongas 3 hooks alternativos para probar distintos inicios.`,
      ],
      highlight:
        "La clave: tu avatar no 'inventa' qué decir. Tú usas tus prompts para definir mensajes estratégicos; el avatar solo los interpreta visualmente."
    },
    {
      id: "voz-avatar",
      title: "5. Elegir y generar la voz de tu avatar",
      body: [
        `Tienes dos opciones principales para la voz de tu avatar:`,
        `1) Usar tu propia voz (grabarte una vez o usar clonación de voz).  
2) Usar una voz generada por IA que encaje con tu marca.`,
        `Herramientas típicas (los nombres pueden cambiar con el tiempo, pero la lógica se mantiene) incluyen servicios de **texto a voz (TTS)** con voces naturales y, en algunos casos, clonación de voz a partir de muestras tuyas.`,
        `Independientemente de la herramienta específica, el flujo suele ser:  
- Copias el guion que generaste con tus prompts.  
- Lo pegas en la herramienta de voz.  
- Eliges idioma, acento y estilo de voz.  
- Generas el audio y lo exportas (normalmente en .mp3 o .wav).`,
        `Consejo: aunque uses voz sintética, revisa siempre que la entonación sea razonable. Si la herramienta lo permite, ajusta velocidad y tono para que suene natural.`,
      ],
      highlight:
        "Empieza simple: primero guiones buenos, luego voz razonable. No hace falta que todo sea perfecto desde el día uno."
    },
    {
      id: "herramienta-avatar",
      title: "6. Generar el vídeo con una herramienta de avatar hablante",
      body: [
        `Después de tener el guion y el audio (o solo el guion, según la herramienta), llega el momento de generar el vídeo del avatar.`,
        `Muchas herramientas de avatar hablante funcionan así (flujo genérico):  
1) Eliges un avatar (plantilla predefinida o subida de tu propia imagen, según las políticas y posibilidades de la herramienta).  
2) Pegas el texto del guion o subes el audio generado previamente.  
3) La herramienta sincroniza labios, gestos y voz.  
4) Exportas el vídeo en formato MP4.`,
        `Algunas permiten:  
- Cambiar fondos y escenarios.  
- Añadir texto en pantalla.  
- Ajustar encuadres y gestos del avatar.`,
        `Tu foco debe estar en tener **buenos guiones y claridad de mensaje**; los detalles visuales puedes afinarlos con el tiempo.`,
      ],
      highlight:
        "Primero prueba con vídeos cortos (30–60s) hasta que tengas un estilo que te guste. Luego pasa a contenidos más largos."
    },
    {
      id: "edicion-y-formatos",
      title: "7. Ajustes finales: subtítulos, formatos y distribución",
      body: [
        `Una vez generado el vídeo del avatar, puedes mejorar mucho el resultado con algunos ajustes simples:`,
        `• Añadir subtítulos: muchas herramientas de edición (como CapCut, Descript u otras) tienen subtítulos automáticos.  
• Adaptar formato: cuadrado, vertical, horizontal según la plataforma (Reels, TikTok, YouTube, etc.).  
• Añadir elementos de marca: logo, colores, tipografías, overlays sencillos.`,
        `Puedes apoyarte de nuevo en tus prompts para:  
- Crear títulos y descripciones para las publicaciones.  
- Generar copies para acompañar el vídeo en redes.  
- Proponer variaciones del mismo contenido para distintas plataformas.`,
      ],
      highlight:
        "Tu avatar es una pieza más del sistema: el vídeo se alimenta de guiones generados con prompts y se integra con tus carruseles, emails y páginas de venta."
    },
    {
      id: "sistema-repetible",
      title: "8. Diseña tu sistema repetible de avatar hablante",
      body: [
        `Para que este bono no se quede en “hice un vídeo y ya”, te propongo un sistema sencillo para producir vídeos de forma recurrente:`,
        `1) Define tu frecuencia: por ejemplo, 1–3 vídeos por semana con tu avatar.  
2) Crea un documento donde guardes:  
   - Plantilla de prompts para generar ideas.  
   - Plantilla de prompts para guiones.  
   - Checklist del flujo (guion → voz → avatar → edición → publicación).  
3) Reserva un bloque de 1–2 horas a la semana para:  
   - Generar 3–5 guiones con tus prompts.  
   - Pasarlos por tu flujo de voz + avatar.  
   - Dejar varios vídeos listos o casi listos.`,
        `Si repites esto cada semana, en poco tiempo tendrás una biblioteca de vídeos con tu avatar cubriendo los mensajes clave de tu marca, tus productos y tus contenidos educativos.`,
      ],
      highlight:
        "La magia no está en un solo vídeo perfecto, sino en un flujo que puedas repetir casi en automático."
    }
  ],
};
