// src/lib/prompts/viral-text/hooks-empatía.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Hooks";
const CATEGORY = "Empatía";

export const viralTextPromptsHooksEmpatia = [
  {
    id: "viral-hook-empatia-001",
    title: "Si te sientes así, es normal",
    summary: "Valida emoción + abre loop con solución.",
    area: AREA,
    category: CATEGORY,
    prompt: `Actúa como guionista de Reels/TikTok. Escribe 15 hooks (1 frase, 7–12 palabras) para [AUDIENCIA] sobre [DOLOR].
Reglas:
- Empieza con “Si te sientes…” o “Si te pasa…”
- Incluye validación (“es normal”, “nos pasa”, “no estás solo”).
- Cierra con una promesa realista (“te muestro cómo salir”).
Entrega en lista numerada.`,
  },
  {
    id: "viral-hook-empatia-002",
    title: "No estás solo (y hay salida)",
    summary: "Empatía directa + esperanza concreta.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks para [TEMA] que incluyan “no estás solo” (o variaciones).
Requisitos:
- 8–11 palabras
- Deben sonar humanos (sin frases motivacionales vacías)
- Termina insinuando el siguiente paso (sin explicarlo completo).`,
  },
  {
    id: "viral-hook-empatia-003",
    title: "Yo también estuve ahí",
    summary: "Conexión por experiencia sin victimismo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks en primera persona para [AUDIENCIA] sobre [PROBLEMA].
Reglas:
- Deben empezar con “Yo también…”
- Un detalle específico (tiempo/lugar/síntoma)
- Cierra con “y esto me ayudó”.
Máximo 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-004",
    title: "Si te da pena hacer X, mira esto",
    summary: "Empatía con vergüenza/miedo + puente a solución.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 18 hooks para [AUDIENCIA] que sienten vergüenza de [ACCION].
Plantilla:
“Si te da pena [ACCION], mira esto…”
Añade un micro-beneficio (2–4 palabras).
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-005",
    title: "Esto es para ti si estás cansado",
    summary: "Segmenta por estado emocional.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks que empiecen con:
“Esto es para ti si…”
Enfocado a [AUDIENCIA] que está [ESTADO] (cansado, frustrado, bloqueado).
Incluye una promesa de alivio realista.
Máximo 13 palabras.`,
  },
  {
    id: "viral-hook-empatia-006",
    title: "Si te sientes atrasado, lee esto",
    summary: "Empatía con comparación y progreso.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks para [TEMA] sobre sentirse “atrasado”.
Reglas:
- Empieza con “Si sientes que vas tarde…”
- Menciona 1 causa común (comparación, ruido, falta de plan)
- Cierra con una promesa: “te doy un plan simple”.`,
  },
  {
    id: "viral-hook-empatia-007",
    title: "Nadie te preparó para esto",
    summary: "Empatía con sorpresa suave.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks que empiecen con:
“Nadie te preparó para…”
Tema: [TEMA].
Reglas:
- 7–11 palabras
- Deben sentirse reales (situaciones comunes)
- Insinúa que hay solución práctica.`,
  },
  {
    id: "viral-hook-empatia-008",
    title: "Si hoy no puedes con todo, está bien",
    summary: "Valida y ofrece siguiente micro-paso.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 18 hooks para [AUDIENCIA] con burnout o saturación en [TEMA].
Incluye:
- Validación (“está bien”, “es normal”)
- Un micro-paso de 2 minutos (sin explicarlo completo)
Máximo 14 palabras.`,
  },
  {
    id: "viral-hook-empatia-009",
    title: "Te prometo que no eres flojo",
    summary: "Reencuadre: falta de sistema, no falta de voluntad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks que empiecen con:
“Te prometo que no eres flojo…”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Cierra con el reencuadre: “te falta [SISTEMA]”.
Máximo 13 palabras.`,
  },
  {
    id: "viral-hook-empatia-010",
    title: "Si te paraliza elegir, te entiendo",
    summary: "Empatía con indecisión + solución breve.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks para [AUDIENCIA] con indecisión en [TEMA].
Reglas:
- Empieza con “Si te paraliza…”
- Debe incluir “te entiendo” o variación
- Promete un criterio simple (sin explicarlo completo).`,
  },

  {
    id: "viral-hook-empatia-011",
    title: "Si te cuesta empezar, no es tu culpa",
    summary: "Valida + promete estructura.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 18 hooks:
“Si te cuesta empezar, no es tu culpa…”
Tema: [TEMA].
Incluye una causa estructural concreta (falta de guía, pasos confusos, objetivo vago).
Máximo 14 palabras.`,
  },
  {
    id: "viral-hook-empatia-012",
    title: "Si te da miedo vender, esto te ayuda",
    summary: "Empatía con venta y rechazo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 hooks para [AUDIENCIA] con miedo a vender [OFERTA].
Plantilla:
“Si te da miedo vender, prueba esto…”
Añade un beneficio específico (confianza, claridad, DM, etc.).
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-013",
    title: "A mí también me dio pena publicar",
    summary: "Confesión ya-normalizada.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 hooks en primera persona sobre [PLATAFORMA].
Reglas:
- Deben empezar con “A mí también…”
- Debe incluir “me dio pena” o “me dio miedo”
- Cierra con “y esto fue lo que hice”.
Máximo 13 palabras.`,
  },
  {
    id: "viral-hook-empatia-014",
    title: "Si sientes que nadie te escucha",
    summary: "Empatía con invisibilidad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 18 hooks para [NICHO] sobre sentirse ignorado.
Estructura:
“Si sientes que nadie te escucha, es por [X].”
[X] debe ser útil y corregible (mensaje, enfoque, gancho, CTA).
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-015",
    title: "Si hoy estás perdido, empieza aquí",
    summary: "Ancla de claridad inmediata.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks que terminen con “empieza aquí”.
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Reglas:
- Deben mencionar un síntoma concreto (confusión, exceso de info, estancamiento)
- Prometer un primer paso simple.`,
  },
  {
    id: "viral-hook-empatia-016",
    title: "Si te comparas, te entiendo",
    summary: "Empatía con comparación social.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 hooks sobre comparación en [PLATAFORMA] para [AUDIENCIA].
Reglas:
- Empieza con “Si te comparas…”
- Incluye validación
- Cierra con un reencuadre práctico (ej: “mide esto en vez”).`,
  },
  {
    id: "viral-hook-empatia-017",
    title: "Te estás esforzando, pero con la herramienta equivocada",
    summary: "Validación + causa concreta.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks:
“Te estás esforzando… pero con [X] equivocado.”
Tema: [TEMA].
[X] debe ser concreto (enfoque, táctica, canal, mensaje).
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-018",
    title: "Si sientes culpa por descansar",
    summary: "Empatía con descanso y productividad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 18 hooks sobre culpa por descansar para [AUDIENCIA].
Reglas:
- Empieza con “Si sientes culpa…”
- Valida (“es normal”)
- Promete un mini-cambio mental o regla práctica.`,
  },
  {
    id: "viral-hook-empatia-019",
    title: "Si te da ansiedad, no lo hagas así",
    summary: "Empatía + alternativa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks para [TEMA] usando:
“Si te da ansiedad, no lo hagas así…”
Luego sugiere que hay una alternativa simple.
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-020",
    title: "Si estás quemado, baja esto primero",
    summary: "Burnout: reduce fricción primero.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks para [AUDIENCIA] con burnout en [TEMA].
Plantilla:
“Si estás quemado, baja [X] primero.”
[X] debe ser concreto (expectativas, tareas, pasos, perfección).
Máx 11 palabras.`,
  },

  {
    id: "viral-hook-empatia-021",
    title: "Si te frustras con X, hay una razón",
    summary: "Valida frustración + causa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks:
“Si te frustra [X], hay una razón.”
Tema: [TEMA].
[X] debe ser un momento del proceso (ventas, crear contenido, aprender, etc.).
Cierra insinuando solución.`,
  },
  {
    id: "viral-hook-empatia-022",
    title: "No eres malo, te falta orden",
    summary: "Empatía + sistema.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 18 hooks:
“No eres malo en [TEMA]. Te falta [ORDEN].”
ORDEN = estructura, guion, pasos, checklist.
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-023",
    title: "Si te sientes invisible, cambia esto",
    summary: "Empatía + promesa de cambio.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks para [PLATAFORMA] con:
“Si te sientes invisible, cambia [X].”
[X] debe ser un elemento concreto (primer segundo, titular, CTA, enfoque).
Máx 11 palabras.`,
  },
  {
    id: "viral-hook-empatia-024",
    title: "Si estás harto de intentarlo, te entiendo",
    summary: "Empatía fuerte + salida.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 hooks que incluyan “estoy harto” o “estoy cansado” (en primera o segunda persona).
Tema: [TEMA].
Debe cerrar con esperanza concreta (“hay un camino simple”).`,
  },
  {
    id: "viral-hook-empatia-025",
    title: "No te falta ganas, te falta claridad",
    summary: "Reencuadre clásico, directo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks:
“No te faltan ganas. Te falta claridad en [X].”
X = oferta, mensaje, siguiente paso, objetivo.
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-026",
    title: "Si te cuesta decir que no",
    summary: "Empatía con límites.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks para [AUDIENCIA] sobre poner límites.
Plantilla:
“Si te cuesta decir que no, prueba esto…”
Incluye beneficio (paz, foco, tiempo).
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-027",
    title: "Si te sientes estancado, no cambies todo",
    summary: "Empatía + micro-ajuste.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks:
“Si te sientes estancado, no cambies todo: cambia [X].”
[X] concreto (un paso, una frase, un hábito).
Máx 13 palabras.`,
  },
  {
    id: "viral-hook-empatia-028",
    title: "Si no te sale, no significa que no sea para ti",
    summary: "Empatía con fracaso temporal.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 hooks para [AUDIENCIA] con frustración en [TEMA].
Incluye:
- “no significa que no sea para ti”
- una promesa de método/estructura
Máx 14 palabras.`,
  },
  {
    id: "viral-hook-empatia-029",
    title: "Si te da vergüenza pedir precio",
    summary: "Empatía de ventas.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks para [AUDIENCIA] que vende [OFERTA].
Plantilla:
“Si te da vergüenza decir tu precio, haz esto…”
Incluye beneficio (seguridad/claridad).
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-030",
    title: "Si te sientes confundido, es porque estás haciendo 3 cosas a la vez",
    summary: "Empatía + diagnóstico concreto.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks con diagnóstico:
“Si estás confundido, es porque…”
Para [TEMA]. Incluye una causa concreta (demasiados objetivos, demasiadas audiencias, etc.).
Máx 14 palabras.`,
  },

  {
    id: "viral-hook-empatia-031",
    title: "Si te cuesta hablar a cámara, prueba esto",
    summary: "Empatía a miedo escénico.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 18 hooks para creadores que temen hablar a cámara.
Plantilla:
“Si te cuesta hablar a cámara, prueba esto…”
Incluye un beneficio claro (fluidez, menos nervios, más claridad).
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-032",
    title: "Si no sabes qué publicar, no estás solo",
    summary: "Empatía editorial.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks para [PLATAFORMA]:
“Si no sabes qué publicar, no estás solo.”
Cierra con promesa de solución: “te doy 3 ideas hoy”.
Máx 13 palabras.`,
  },
  {
    id: "viral-hook-empatia-033",
    title: "Si sientes que no avanzas, mide esto",
    summary: "Empatía + enfoque en una métrica útil.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks:
“Si sientes que no avanzas, mide [MÉTRICA].”
Tema: [TEMA]. Métrica debe ser simple y relevante.`,
  },
  {
    id: "viral-hook-empatia-034",
    title: "Si te pesa empezar de nuevo, hazlo más pequeño",
    summary: "Empatía + micro-objetivo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks sobre “empezar de nuevo” en [TEMA].
Plantilla:
“Si te pesa empezar de nuevo, hazlo más pequeño: [X].”
[X] acción simple.`,
  },
  {
    id: "viral-hook-empatia-035",
    title: "Si hoy no te sale, no te castigues",
    summary: "Empatía + corrección suave.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 hooks que empiecen con:
“Si hoy no te sale…”
Incluye “no te castigues”
y cierra con una promesa de método.`,
  },
  {
    id: "viral-hook-empatia-036",
    title: "Tu cansancio tiene sentido",
    summary: "Valida y reencuadra.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks para [AUDIENCIA] sobre cansancio en [TEMA].
Debe incluir “tiene sentido” y una causa concreta.
Cierra con “te doy un ajuste simple”.`,
  },
  {
    id: "viral-hook-empatia-037",
    title: "Si estás intentando hacerlo perfecto, te entiendo",
    summary: "Empatía con perfeccionismo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 18 hooks sobre perfeccionismo para [AUDIENCIA].
Reglas:
- Empieza con “Si estás intentando hacerlo perfecto…”
- Incluye “te entiendo”
- Cierra con reencuadre: “mejor hazlo así”.
Máx 14 palabras.`,
  },
  {
    id: "viral-hook-empatia-038",
    title: "Si te sientes solo en esto, comparte",
    summary: "Empatía + llamada a comunidad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 hooks que inviten a comentar/compartir una experiencia.
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Debe incluir empatía (“a mí también me pasó”).`,
  },
  {
    id: "viral-hook-empatia-039",
    title: "Si te duele ver resultados ajenos",
    summary: "Empatía con envidia/compare.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 12 hooks para [AUDIENCIA] sobre comparar resultados.
Reglas:
- Empieza con “Si te duele…”
- Valida sin juzgar
- Cierra con una acción concreta para reenfocar.`,
  },
  {
    id: "viral-hook-empatia-040",
    title: "Si te sientes sin rumbo, vuelve a esto",
    summary: "Empatía + fundamento.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 hooks:
“Si te sientes sin rumbo, vuelve a [FUNDAMENTO].”
[FUNDAMENTO] debe ser concreto (objetivo, oferta, audiencia, rutina).
Máx 12 palabras.`,
  },

  {
    id: "viral-hook-empatia-041",
    title: "Si te asusta equivocarte, mira esto",
    summary: "Empatía con miedo al error.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks sobre miedo a equivocarse en [TEMA].
Plantilla:
“Si te asusta equivocarte, mira esto…”
Incluye un beneficio (más confianza / menos ansiedad).
Máx 12 palabras.`,
  },
  {
    id: "viral-hook-empatia-042",
    title: "Si te sientes estresado, no estás fallando",
    summary: "Empatía + reencuadre.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 hooks:
“Si estás estresado, no estás fallando.”
Cierra con un paso simple (sin detallarlo completo).
Tema: [TEMA].`,
  },
  {
    id: "viral-hook-empatia-043",
    title: "Si no te creen, te falta esto",
    summary: "Empatía con falta de credibilidad + solución.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks para [OFERTA] en [NICHO]:
“Si no te creen, te falta [PRUEBA].”
[PRUEBA] debe ser concreta (caso, demo, antes/después, números realistas).`,
  },
  {
    id: "viral-hook-empatia-044",
    title: "Si te da miedo empezar, hazlo así",
    summary: "Empatía + micro-acción.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 18 hooks:
“Si te da miedo empezar, hazlo así: [X].”
[X] debe ser un primer paso de menos de 2 minutos.
Tema: [TEMA].`,
  },
  {
    id: "viral-hook-empatia-045",
    title: "Si sientes que nada funciona, cambia esto primero",
    summary: "Empatía + orden de prioridades.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 12 hooks:
“Si sientes que nada funciona, cambia [X] primero.”
[X] debe ser la palanca principal (claridad, oferta, mensaje, enfoque).
Tema: [TEMA].`,
  },
  {
    id: "viral-hook-empatia-046",
    title: "Si te cuesta mantenerte constante, es por esto",
    summary: "Empatía + diagnóstico.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks:
“Si te cuesta ser constante, es por [X].”
[X] debe ser una causa real (plan irreal, metas vagas, falta de rutina).
Cierra con “y lo arreglas así…”`,
  },
  {
    id: "viral-hook-empatia-047",
    title: "Si no te sale, simplifica",
    summary: "Empatía + solución corta.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks:
“Si no te sale, simplifica: [X].”
[X] debe ser un ajuste concreto.
Tema: [TEMA]. Máx 11 palabras.`,
  },
  {
    id: "viral-hook-empatia-048",
    title: "Si te da pena cobrar, lee esto",
    summary: "Empatía de precios.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 hooks para [AUDIENCIA] que cobra por [SERVICIO/PRODUCTO].
Plantilla:
“Si te da pena cobrar, lee esto…”
Incluye promesa: “te doy una frase”.
Máx 13 palabras.`,
  },
  {
    id: "viral-hook-empatia-049",
    title: "Si te sientes bloqueado, no es falta de ideas",
    summary: "Empatía + reencuadre a estructura.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 18 hooks:
“Si estás bloqueado, no es falta de ideas, es [X].”
[X] = estructura, claridad, objetivo.
Tema: [TEMA].`,
  },
  {
    id: "viral-hook-empatia-050",
    title: "Si te pesa hacerlo solo, únete a esto",
    summary: "Empatía + comunidad/acción.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 hooks que cierren con una invitación a comentar para recibir ayuda.
Incluye empatía (“yo también lo viví”).
Tema: [TEMA]. Audiencia: [AUDIENCIA].`,
  },
];
