// src/lib/prompts/viral-text/hooks.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Hooks";
const CATEGORY = "Sorpresa";

export const viralTextPromptsHooks = [
  {
    id: "viral-hook-sorpresa-001",
    title: "El error que todos cometen (y no lo notan)",
    summary: "Hook de sorpresa + promesa de corrección inmediata.",
    area: AREA,
    category: CATEGORY,
    prompt: `Actúa como guionista de Reels/TikTok. Crea 10 hooks de 1 frase (máximo 9 palabras) para el nicho: [NICHO].
Formato: Hook → (por qué engancha en 1 línea).
Reglas:
- Debe empezar con “Estás haciendo esto mal…”
- Debe prometer un resultado concreto en 7 días.
- Sin clickbait vacío: menciona una causa real.
- Español neutro.`,
  },
  {
    id: "viral-hook-sorpresa-002",
    title: "Te están mintiendo con este consejo",
    summary: "Hook de contradicción suave contra un “tip” popular.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 12 hooks virales atacando un consejo popular de [TEMA].
Estructura obligatoria:
1) “Te están mintiendo con…” + [CONSEJO]
2) mini-prueba en 6–10 palabras
3) promesa: “en 20 segundos te lo explico”
Hazlo para audiencia: [AUDIENCIA].`,
  },
  {
    id: "viral-hook-sorpresa-003",
    title: "Lo probé y salió al revés",
    summary: "Hook de experimento fallido que deja curiosidad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks estilo “experimento” para [OBJETIVO].
Cada hook debe:
- Empezar con “Lo probé y…”
- Incluir un giro inesperado.
- Cerrar con una pregunta.
Ejemplo de tono: directo, callejero, pero profesional.`,
  },
  {
    id: "viral-hook-sorpresa-004",
    title: "Nadie te cuenta esta parte",
    summary: "Hook de secreto/omisión, sin exagerar.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks para [TEMA] con la frase “Nadie te cuenta…”.
Reglas:
- 6 a 10 palabras.
- Debe insinuar una “parte incómoda” o subestimada.
- Evita promesas ilegales o garantizadas.
- Incluye 5 variaciones más suaves (menos confrontativas).`,
  },
  {
    id: "viral-hook-sorpresa-005",
    title: "La verdad incómoda en 1 frase",
    summary: "Hook corto, con punch, para abrir loop.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 25 hooks (máximo 8 palabras) para [NICHO] que suenen como “verdades incómodas”.
Estructura:
- Afirmación fuerte + detalle específico.
- No insultos.
- Deben invitar a “qué hago entonces”.
Entrega en lista numerada.`,
  },
  {
    id: "viral-hook-sorpresa-006",
    title: "El truco más raro que sí funciona",
    summary: "Hook de rareza + validación.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 hooks para [RESULTADO] usando “El truco más raro que…”.
Incluye:
- 5 hooks para principiantes
- 5 para nivel intermedio
- 5 para avanzados
Añade al final de cada hook: (qué promete en 3 palabras).`,
  },
  {
    id: "viral-hook-sorpresa-007",
    title: "Lo que haría si empezara desde cero",
    summary: "Hook de reinicio con sorpresa + claridad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 hooks en primera persona para [OBJETIVO] empezando con:
“Si empezara desde cero, haría esto:”
Reglas:
- 1 sola frase.
- Menciona un paso que contradiga la intuición común.
- Tono: mentor cercano.`,
  },
  {
    id: "viral-hook-sorpresa-008",
    title: "Esto suena mal, pero es lo mejor",
    summary: "Hook que juega con tensión moral/extrañeza.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 18 hooks para [TEMA] con esta plantilla:
“Esto suena mal, pero… [beneficio]”
Condiciones:
- Que el “suena mal” sea ético (sin fraude/daño).
- Que el beneficio sea tangible y específico.
- 9–11 palabras máximo.`,
  },
  {
    id: "viral-hook-sorpresa-009",
    title: "Tu problema no es lo que crees",
    summary: "Hook de reencuadre con sorpresa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks que empiecen con:
“Tu problema no es [X], es [Y]”
Para industria: [INDUSTRIA].
Incluye 5 ejemplos para cada subtema: [SUBTEMA1], [SUBTEMA2], [SUBTEMA3], [SUBTEMA4].`,
  },
  {
    id: "viral-hook-sorpresa-010",
    title: "Te voy a ahorrar 6 meses",
    summary: "Hook con promesa de ahorro de tiempo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 15 hooks para [RESULTADO] empezando con:
“Te voy a ahorrar 6 meses…”
Reglas:
- Debe mencionar el error específico que evita.
- Nada de “garantizado”.
- Tono urgente pero realista.`,
  },

  {
    id: "viral-hook-sorpresa-011",
    title: "El consejo que me costó dinero",
    summary: "Hook de aprendizaje caro (sorpresa + historia).",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 hooks tipo historia corta (1 frase) para [NICHO] que empiecen con:
“El consejo que me costó dinero fue…”
Debe cerrar con “y te digo qué hacer.”
Manténlo creíble y concreto.`,
  },
  {
    id: "viral-hook-sorpresa-012",
    title: "No hagas esto si quieres resultados",
    summary: "Hook de prohibición con giro específico.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks que empiecen con:
“No hagas esto si quieres [RESULTADO]”
Incluye un “esto” muy específico (acción concreta).
Máximo 10 palabras por hook.`,
  },
  {
    id: "viral-hook-sorpresa-013",
    title: "El detalle mínimo que lo cambia todo",
    summary: "Hook microdetalle + impacto alto.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 hooks sobre microdetalles para [TEMA].
Plantilla base:
“El detalle mínimo que lo cambia todo: [DETALLE]”
Haz que [DETALLE] sea accionable en 2 minutos.`,
  },
  {
    id: "viral-hook-sorpresa-014",
    title: "Deja de seguir esta regla",
    summary: "Hook anti-regla popular (sorpresa).",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks para [AUDIENCIA] usando:
“Deja de seguir esta regla: [REGLA]”
Luego agrega 1 mini-argumento (máximo 8 palabras).
Sin agresividad. Simple, contundente.`,
  },
  {
    id: "viral-hook-sorpresa-015",
    title: "Esto arruinó mis resultados (hasta hoy)",
    summary: "Hook dramático controlado con resolución cercana.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 hooks para [OBJETIVO] con:
“Esto arruinó mis resultados… hasta hoy”
Incluye una pista del “arreglo” pero no lo reveles completo.
Tono: honesto, sin exagerar.`,
  },
  {
    id: "viral-hook-sorpresa-016",
    title: "El atajo no es un atajo",
    summary: "Hook paradójico para abrir loop.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 20 hooks paradójicos sobre [TEMA].
Estructura:
“El atajo no es [X], es [Y]”
Haz que [Y] sea sugerente y correcto.`,
  },
  {
    id: "viral-hook-sorpresa-017",
    title: "Tu fórmula está incompleta",
    summary: "Hook de “te falta una pieza”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks que empiecen con:
“Tu fórmula está incompleta: te falta [PIEZA]”
Para: [AUDIENCIA].
Cada [PIEZA] debe ser una acción concreta o un concepto claro.`,
  },
  {
    id: "viral-hook-sorpresa-018",
    title: "Si haces esto, te frenas solo",
    summary: "Hook de autosabotaje específico.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 hooks de autosabotaje para [TEMA].
Reglas:
- Deben iniciar con “Si haces esto…”
- Deben terminar con una consecuencia clara.
- Sin generalidades (nada de “pensamiento negativo”).`,
  },
  {
    id: "viral-hook-sorpresa-019",
    title: "No es falta de talento, es esto",
    summary: "Hook de reencuadre emocional + solución.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 18 hooks:
“No es falta de talento, es [CAUSA]”
Para [NICHO].
[CAUSA] debe ser específica y corregible en 1 semana.`,
  },
  {
    id: "viral-hook-sorpresa-020",
    title: "Lo estás midiendo mal",
    summary: "Hook de métrica equivocada (sorpresa).",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 15 hooks para [TEMA] en forma de corrección de métricas.
Plantilla:
“Lo estás midiendo mal: mira [MÉTRICA REAL]”
Haz que [MÉTRICA REAL] sea concreta y útil.`,
  },

  {
    id: "viral-hook-sorpresa-021",
    title: "Esto suena obvio, pero nadie lo hace",
    summary: "Hook de obviedad ignorada.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 hooks para [OBJETIVO] que comiencen con:
“Esto suena obvio, pero…”
Debe incluir una acción simple que casi nadie ejecuta.
Máximo 11 palabras.`,
  },
  {
    id: "viral-hook-sorpresa-022",
    title: "La razón por la que no te funciona",
    summary: "Hook causal directo con sorpresa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 hooks con:
“La razón por la que [X] no te funciona…”
Completa con una causa inesperada pero real.
Enfocado en: [TEMA].`,
  },
  {
    id: "viral-hook-sorpresa-023",
    title: "El consejo que te da resultados opuestos",
    summary: "Hook de inversión de expectativas.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 hooks sobre “consejos que salen al revés” para [NICHO].
Estructura por hook:
- Consejo típico
- Resultado opuesto en 4–7 palabras
Todo en una sola frase.`,
  },
  {
    id: "viral-hook-sorpresa-024",
    title: "Haz lo contrario (pero así)",
    summary: "Hook contracorriente con instrucción.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 18 hooks:
“Haz lo contrario: en vez de [X], haz [Y]”
Para [AUDIENCIA].
[X] y [Y] deben ser acciones concretas y realistas.`,
  },
  {
    id: "viral-hook-sorpresa-025",
    title: "Te falta una línea (literal)",
    summary: "Hook de micro-cambio textual.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 hooks para copy/marketing donde el giro sea “una línea”.
Plantilla:
“Te falta una línea: [LÍNEA]”
La [LÍNEA] debe ser una frase exacta que puedan pegar.`,
  },
  {
    id: "viral-hook-sorpresa-026",
    title: "El truco es aburrido (por eso funciona)",
    summary: "Hook anti-hype, creíble.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks con esta idea:
“El truco es aburrido… por eso funciona.”
Para [TEMA].
Que cada hook termine con “Te muestro cómo.”`,
  },
  {
    id: "viral-hook-sorpresa-027",
    title: "Esto no es para todos",
    summary: "Hook de exclusión suave (segmenta).",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks que empiecen con:
“Esto no es para todos, es para…”
Define un perfil ultra específico de [AUDIENCIA].
Sin elitismo agresivo.`,
  },
  {
    id: "viral-hook-sorpresa-028",
    title: "La parte que más ignoras (y más pesa)",
    summary: "Hook de foco incorrecto.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks para [OBJETIVO]:
“La parte que más ignoras es la que más pesa: [PARTE]”
Haz [PARTE] algo concreto (ej: “tu cierre”, “tu oferta”, “tu primer párrafo”).`,
  },
  {
    id: "viral-hook-sorpresa-029",
    title: "Si solo haces 1 cosa hoy",
    summary: "Hook de prioridad única (sorpresa).",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 25 hooks que empiecen con:
“Si solo haces 1 cosa hoy…”
Para [TEMA].
Debe ser una acción de alto impacto, baja fricción.`,
  },
  {
    id: "viral-hook-sorpresa-030",
    title: "La regla del 3-1-1",
    summary: "Hook con mini-framework numérico.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 hooks con frameworks numéricos inventados (pero útiles) para [TEMA].
Ejemplo formato: “Regla del 3-1-1: [promesa]”
Luego explica el nombre en 6 palabras dentro del hook.`,
  },

  {
    id: "viral-hook-sorpresa-031",
    title: "Te lo digo por experiencia (y duele)",
    summary: "Hook de confesión + tensión.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks para [NICHO] que empiecen con:
“Te lo digo por experiencia…”
Incluye un mini “dolor” y una promesa de solución.
Máximo 12 palabras.`,
  },
  {
    id: "viral-hook-sorpresa-032",
    title: "Este hábito te roba resultados",
    summary: "Hook de hábito invisible.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks sobre hábitos invisibles en [TEMA].
Plantilla:
“Este hábito te roba [RESULTADO]: [HÁBITO]”
Que el hábito sea cotidiano y específico.`,
  },
  {
    id: "viral-hook-sorpresa-033",
    title: "No necesitas más info, necesitas esto",
    summary: "Hook de saturación de información.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 18 hooks para [AUDIENCIA] que estén sobrecargados de información.
Plantilla:
“No necesitas más info, necesitas [X]”
[X] debe ser una acción o sistema simple.`,
  },
  {
    id: "viral-hook-sorpresa-034",
    title: "Lo que nadie hace en el primer segundo",
    summary: "Hook de primer segundo específico.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks sobre el “primer segundo” para [TEMA].
Debe mencionar algo visual o verbal que se hace al inicio.
Cierra con: “y por eso retiene.”`,
  },
  {
    id: "viral-hook-sorpresa-035",
    title: "El enemigo no es el algoritmo",
    summary: "Hook anti-creencia popular.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 12 hooks con esta idea:
“El enemigo no es el algoritmo, es [X]”
Para creadores en [PLATAFORMA].
[X] debe ser un error de contenido o de oferta.`,
  },
  {
    id: "viral-hook-sorpresa-036",
    title: "Tu contenido falla por esto (no por calidad)",
    summary: "Hook de causa sorpresa no-obvia.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks:
“Tu contenido falla por [X], no por calidad.”
[X] debe variar: estructura, claridad, oferta, fricción, contexto, timing.
Enfocado a [NICHO].`,
  },
  {
    id: "viral-hook-sorpresa-037",
    title: "Esto te hace ver amateur sin que lo notes",
    summary: "Hook de “detalle amateur”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 25 hooks de “detalle amateur” para [TEMA].
Plantilla:
“Esto te hace ver amateur: [DETALLE]”
[DETALLE] debe ser concreto y fácil de corregir.`,
  },
  {
    id: "viral-hook-sorpresa-038",
    title: "La frase que cambia tu respuesta",
    summary: "Hook de guion/fórmula textual.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 hooks basados en “UNA FRASE exacta”.
Plantilla:
“Di esta frase y cambia todo: ‘[FRASE]’”
La [FRASE] debe estar lista para copiar y pegar para [AUDIENCIA].`,
  },
  {
    id: "viral-hook-sorpresa-039",
    title: "No lo hagas más difícil",
    summary: "Hook simplificador con giro.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks que empiecen con:
“No lo hagas más difícil…”
Luego completa con una simplificación inesperada para [OBJETIVO].
Máximo 10 palabras.`,
  },
  {
    id: "viral-hook-sorpresa-040",
    title: "El truco es quitar, no poner",
    summary: "Hook de sustracción (sorpresa).",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 15 hooks con:
“El truco es quitar [X], no poner [Y].”
Para [TEMA].
[X] y [Y] deben ser cosas reales (pasos, palabras, hábitos).`,
  },

  {
    id: "viral-hook-sorpresa-041",
    title: "Este cambio de orden lo mejora todo",
    summary: "Hook de reordenar pasos.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 18 hooks sobre “cambiar el orden” para [PROCESO].
Plantilla:
“Cambia el orden: primero [A], luego [B].”
Que [A]/[B] sean acciones claras.`,
  },
  {
    id: "viral-hook-sorpresa-042",
    title: "Lo que haces por “seguridad” te frena",
    summary: "Hook de comportamiento protector.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 hooks:
“Eso que haces por seguridad… te frena.”
Completa con una conducta típica de [AUDIENCIA].
Añade un mini “por qué” en 5 palabras.`,
  },
  {
    id: "viral-hook-sorpresa-043",
    title: "Te estás saltando el paso invisible",
    summary: "Hook de paso omitido.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 hooks que incluyan la idea:
“Paso invisible”
Plantilla:
“Te estás saltando el paso invisible: [PASO]”
Para [TEMA]. [PASO] debe ser accionable.`,
  },
  {
    id: "viral-hook-sorpresa-044",
    title: "Si esto te pasa, es buena señal",
    summary: "Hook de reencuadre positivo sorpresa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks:
“Si [SÍNTOMA] te pasa, es buena señal.”
Para [AUDIENCIA].
[SÍNTOMA] debe ser algo común y no peligroso (ej: nervios, dudas, bajón).`,
  },
  {
    id: "viral-hook-sorpresa-045",
    title: "Esto es lo que yo no haría ni loco",
    summary: "Hook de postura fuerte sin agresión.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 hooks estilo opinión firme:
“Esto yo no lo haría ni loco: [X]”
Para [NICHO].
[X] debe ser una estrategia común pero mala en cierto contexto.
Cierra con: “te digo qué sí haría.”`,
  },
  {
    id: "viral-hook-sorpresa-046",
    title: "El cambio de 5 palabras",
    summary: "Hook de micro-edición textual.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 20 hooks:
“El cambio de 5 palabras que mejora [RESULTADO]”
Incluye en el hook las 5 palabras exactas entre comillas.
Enfocado en [TEMA].`,
  },
  {
    id: "viral-hook-sorpresa-047",
    title: "La razón por la que te ignoran",
    summary: "Hook que golpea un dolor real.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 18 hooks para [PLATAFORMA] con:
“La razón por la que te ignoran es…”
Completa con un error de enfoque (no con insultos).
Que suene directo y útil.`,
  },
  {
    id: "viral-hook-sorpresa-048",
    title: "Esto es más importante que la estrategia",
    summary: "Hook de prioridad sorpresa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 hooks:
“Esto es más importante que la estrategia: [X]”
Para [TEMA].
[X] debe ser un fundamento (claridad, oferta, consistencia, energía, etc.) pero explicado específico.`,
  },
  {
    id: "viral-hook-sorpresa-049",
    title: "Lo que hago antes de publicar",
    summary: "Hook de ritual secreto (sorpresa).",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 15 hooks sobre “antes de publicar” para creadores de [NICHO].
Plantilla:
“Antes de publicar, hago esto: [ACCION]”
[ACCION] debe ser simple y poco común.`,
  },
  {
    id: "viral-hook-sorpresa-050",
    title: "El secreto es el final, no el inicio",
    summary: "Hook de inversión (final > inicio).",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 12 hooks sobre guiones donde la clave es el cierre.
Plantilla:
“El secreto es el final: [CLAVE]”
[CLAVE] debe ser concreta (CTA, payoff, remate, prueba, ejemplo, etc.).
Para [TEMA].`,
  },
];
