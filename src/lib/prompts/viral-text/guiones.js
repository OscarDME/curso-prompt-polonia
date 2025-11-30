// src/lib/prompts/viral-text/guiones.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Guiones";
const CATEGORY = "Storytime";

export const viralTextPromptsGuiones = [
  {
    id: "viral-guion-storytime-001",
    title: "Storytime express (15s) con giro",
    summary: "Historia en 3 actos con remate rápido.",
    area: AREA,
    category: CATEGORY,
    prompt: `Actúa como guionista de Shorts. Escribe un guion storytime de 15 segundos para [TEMA].
Estructura obligatoria:
Acto 1 (0–2s): gancho con shock (1 frase).
Acto 2 (3–10s): conflicto con 2 detalles específicos.
Acto 3 (11–15s): giro + aprendizaje + CTA suave.
Incluye texto en pantalla (3 bloques) y voz en off (separado).`,
  },
  {
    id: "viral-guion-storytime-002",
    title: "Storytime 30s con lección práctica",
    summary: "Historia personal + lección accionable.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un guion storytime de 30s para [AUDIENCIA] sobre [TEMA].
Reglas:
- 3 actos claros.
- 1 detalle visual por acto (para B-roll).
- 1 frase “ancla” memorable.
Cierra con CTA: “Si quieres la plantilla, comenta [PALABRA]”.`,
  },
  {
    id: "viral-guion-storytime-003",
    title: "El error que casi me cuesta todo",
    summary: "Storytime con tensión y resolución.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un storytime de 25–35s sobre “el error que casi me cuesta todo” en [CONTEXTO].
Incluye:
- Acto 1: situación y promesa (2s).
- Acto 2: momento exacto del error (con número o dato).
- Acto 3: cómo lo arreglé en 3 pasos.
Formato:
VOZ:
TEXTO EN PANTALLA:
B-ROLL:`,
  },
  {
    id: "viral-guion-storytime-004",
    title: "Lo que pensé vs lo que era",
    summary: "Contraste mental para retención.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un guion storytime de 20–30s sobre [TEMA] con la estructura:
“Yo pensé que…” vs “En realidad…”
Acto 1: expectativa ingenua.
Acto 2: choque con realidad (1 ejemplo concreto).
Acto 3: nueva forma de hacerlo + CTA.
Incluye 5 opciones de primer gancho.`,
  },
  {
    id: "viral-guion-storytime-005",
    title: "De 0 a resultado en 7 días",
    summary: "Historia tipo mini-reto.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un guion storytime de 30–45s sobre un reto de 7 días para lograr [RESULTADO].
Acto 1: por qué empecé (dolor).
Acto 2: lo difícil (día 2–3) + ajuste clave.
Acto 3: resultado + prueba (métrica) + CTA.
Añade 3 métricas posibles según nicho.`,
  },
  {
    id: "viral-guion-storytime-006",
    title: "El mensaje que cambió todo",
    summary: "Historia basada en DM/llamada/email.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 25–35s: “El mensaje que cambió todo” en [NICHO].
Acto 1: recibo el mensaje (muestra 1 línea).
Acto 2: qué estaba haciendo mal (2 detalles).
Acto 3: qué hice desde ese día (3 acciones).
CTA final: “¿Quieres que te lo pase? comenta [PALABRA]”.`,
  },
  {
    id: "viral-guion-storytime-007",
    title: "Casi renuncio (y esto me salvó)",
    summary: "Tensión emocional + solución concreta.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un storytime de 30s: “Casi renuncio y esto me salvó” sobre [TEMA].
Incluye:
- 1 frase vulnerable (no dramática).
- 1 decisión inesperada.
- 1 aprendizaje en una línea.
- CTA: “Guárdalo si te sirve”.`,
  },
  {
    id: "viral-guion-storytime-008",
    title: "El día que entendí el juego",
    summary: "Momento de claridad + reencuadre.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un guion storytime 20–30s: “El día que entendí el juego” en [INDUSTRIA].
Acto 1: frustración (1 ejemplo).
Acto 2: descubrimiento (dato o regla).
Acto 3: cambio de enfoque (2 pasos) + CTA.`,
  },
  {
    id: "viral-guion-storytime-009",
    title: "Antes/Después con mini-historia",
    summary: "Storytime apoyado en contraste visual.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un guion storytime 30–40s con “Antes/Después” para [RESULTADO].
Incluye en cada acto:
- Texto en pantalla (máx 7 palabras).
- B-roll sugerido.
- VO con frases cortas.
Cierra con CTA de comentario.`,
  },
  {
    id: "viral-guion-storytime-010",
    title: "La decisión incómoda",
    summary: "Historia de una elección contraintuitiva.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 25–35s sobre “la decisión incómoda” para mejorar [TEMA].
Acto 1: la situación (2s).
Acto 2: la decisión (qué dejé de hacer) + miedo.
Acto 3: resultado (métrica o efecto) + consejo.
Mantén tono firme y calmado.`,
  },

  {
    id: "viral-guion-storytime-011",
    title: "El cliente que me enseñó esto",
    summary: "Storytime con aprendizaje transferible.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un storytime de 30–45s: “Un cliente me enseñó esto” sobre [TEMA].
Acto 1: contexto y expectativa.
Acto 2: conflicto (lo que salió mal) con 2 detalles.
Acto 3: regla que ahora aplico + ejemplo rápido.
CTA: “Si quieres más casos, sígueme”.`,
  },
  {
    id: "viral-guion-storytime-012",
    title: "La vez que lo hice ‘perfecto’ y falló",
    summary: "Historia anti-perfeccionismo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un guion storytime 25–35s: “Lo hice perfecto y falló” en [CONTEXTO].
Incluye:
- qué era “perfecto” (3 elementos).
- por qué falló (1 causa real).
- qué hice diferente después (2 cambios).
CTA: “¿Te ha pasado? comenta ‘sí’”.`,
  },
  {
    id: "viral-guion-storytime-013",
    title: "El consejo que ignoré (y era oro)",
    summary: "Historia con arrepentimiento útil.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 30s: “Ignoré este consejo y era oro” sobre [TEMA].
Estructura:
Acto 1: me dan el consejo (una frase literal).
Acto 2: lo ignoro y pasa X (consecuencia).
Acto 3: lo aplico y cambia Y (beneficio) + CTA.`,
  },
  {
    id: "viral-guion-storytime-014",
    title: "Me dio vergüenza, pero lo hice",
    summary: "Vulnerabilidad + acción.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un storytime 25–35s: “Me dio vergüenza, pero lo hice” para [AUDIENCIA].
Acto 1: qué me daba vergüenza (concreto).
Acto 2: qué hice igual (acción exacta).
Acto 3: qué gané + consejo en 1 línea.
CTA: “Guárdalo si te sirve”.`,
  },
  {
    id: "viral-guion-storytime-015",
    title: "El punto de quiebre",
    summary: "Momento exacto donde todo cambia.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 30–40s: “mi punto de quiebre” sobre [TEMA].
Incluye:
- 1 fecha o periodo (“hace 3 meses…”)
- 1 escena concreta (dónde estaba)
- 1 decisión
- 1 resultado
Cierra con CTA: “Quieres la lista? comenta [PALABRA]”.`,
  },
  {
    id: "viral-guion-storytime-016",
    title: "El detalle ridículo que fue clave",
    summary: "Microdetalle sorprendente que cierra loop.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime de 20–30s donde el “detalle ridículo” sea lo que destraba [RESULTADO].
Acto 1: frustración.
Acto 2: pruebo cosas grandes (2 ejemplos).
Acto 3: el detalle pequeño (1 cosa) + resultado.
Incluye 3 ideas de “detalle ridículo” por nicho.`,
  },
  {
    id: "viral-guion-storytime-017",
    title: "Lo que haría distinto si repitiera",
    summary: "Historia + lista rápida dentro del acto 3.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 30s: “Si lo repitiera, haría esto distinto” en [TEMA].
Acto 1: qué intenté.
Acto 2: qué salió mal.
Acto 3: 3 cambios (enumerados) + CTA.
Formato: VOZ / TEXTO / B-ROLL.`,
  },
  {
    id: "viral-guion-storytime-018",
    title: "El malentendido que me frenaba",
    summary: "Error conceptual que desbloquea.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 25–35s: “El malentendido que me frenaba” sobre [TEMA].
Acto 1: creencia equivocada (una frase).
Acto 2: prueba de que era falso (mini ejemplo).
Acto 3: nueva creencia + 2 pasos prácticos.
CTA: “¿Quieres parte 2?”`,
  },
  {
    id: "viral-guion-storytime-019",
    title: "La conversación incómoda",
    summary: "Historia basada en conversación real.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un storytime 30–40s sobre “la conversación incómoda” en [CONTEXTO].
Incluye un mini diálogo (2 líneas) en Acto 2.
Acto 3: lo que aprendí y cómo lo aplico hoy.
Manténlo respetuoso y real.`,
  },
  {
    id: "viral-guion-storytime-020",
    title: "Me equivoqué de enemigo",
    summary: "Reencuadre tipo ‘no era eso’.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 25–35s: “Me equivoqué de enemigo” sobre [TEMA].
Acto 1: culpaba a [X].
Acto 2: pasó algo que mostró la verdad.
Acto 3: el enemigo real [Y] + cómo lo atacas (2 pasos).
CTA: “Guárdalo”.`,
  },

  {
    id: "viral-guion-storytime-021",
    title: "La vez que dije ‘sí’ demasiado rápido",
    summary: "Historia de decisión impulsiva.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 30s: “Dije sí demasiado rápido” en [NICHO].
Acto 1: oportunidad.
Acto 2: problema que causó (2 detalles).
Acto 3: regla que ahora sigo + ejemplo.
CTA: “¿Te ha pasado?”`,
  },
  {
    id: "viral-guion-storytime-022",
    title: "El mejor consejo vino de un error",
    summary: "Aprendizaje derivado de falla.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 20–30s: “Mi mejor consejo vino de un error” sobre [TEMA].
Incluye 1 error, 1 consecuencia y 1 regla accionable.
Cierra con CTA: “Comenta ‘plantilla’ si la quieres”.`,
  },
  {
    id: "viral-guion-storytime-023",
    title: "El momento que me dio pena ajena",
    summary: "Historia con humor suave + lección.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 25–35s con humor suave: “me dio pena ajena” sobre [TEMA].
Acto 1: escena.
Acto 2: lo que aprendí (sin humillar a nadie).
Acto 3: cómo evitarlo (2 tips).
CTA: “Compártelo con tu amigo”.`,
  },
  {
    id: "viral-guion-storytime-024",
    title: "El ‘síntoma’ que me avisó",
    summary: "Historia tipo alerta temprana.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 30–40s: “Este síntoma me avisó” para [AUDIENCIA].
Acto 1: el síntoma (concreto).
Acto 2: lo ignoré y pasó X.
Acto 3: lo escuché y cambié Y (2 acciones).
CTA: “Guárdalo”.`,
  },
  {
    id: "viral-guion-storytime-025",
    title: "La regla que me dio paz",
    summary: "Relato de simplificación (framework).",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un storytime 25–35s sobre “la regla que me dio paz” en [TEMA].
Acto 1: caos.
Acto 2: descubro regla (nombrarla).
Acto 3: cómo aplicarla en 3 pasos.
CTA: “¿Quieres la regla escrita? comenta [PALABRA]”.`,
  },
  {
    id: "viral-guion-storytime-026",
    title: "Todo cambió cuando dejé de…",
    summary: "Historia de sustracción.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 20–30s con inicio:
“Todo cambió cuando dejé de…”
Completa con algo común en [NICHO].
Acto 3 debe incluir un resultado medible.`,
  },
  {
    id: "viral-guion-storytime-027",
    title: "La prueba que me cerró la boca",
    summary: "Evidencia sorprendente (creíble).",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 30s: “La prueba que me cerró la boca” sobre [TEMA].
Acto 1: yo dudaba.
Acto 2: aparece la prueba (dato/resultado).
Acto 3: qué cambié (2 pasos) + CTA.
No uses cifras imposibles.`,
  },
  {
    id: "viral-guion-storytime-028",
    title: "Me dio miedo publicar esto",
    summary: "Tensión + publicación + recompensa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 25–35s: “Me dio miedo publicar esto” para [PLATAFORMA].
Acto 1: el miedo (concreto).
Acto 2: publico igual + reacción inicial.
Acto 3: aprendizaje + consejo práctico.
CTA: “¿Te animas?”`,
  },
  {
    id: "viral-guion-storytime-029",
    title: "La vez que casi lo arruino por ego",
    summary: "Confesión controlada + moraleja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 30–40s: “Casi lo arruino por ego” en [CONTEXTO].
Acto 2: describe 1 decisión por ego.
Acto 3: qué hice para corregir y qué haría hoy.
CTA: “Guárdalo”.`,
  },
  {
    id: "viral-guion-storytime-030",
    title: "El ‘hack’ era una mentira",
    summary: "Desmitifica un atajo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 25–35s: “El hack era una mentira” sobre [TEMA].
Acto 1: me venden el hack.
Acto 2: lo pruebo y falla (por qué).
Acto 3: alternativa real (2 pasos) + CTA.`,
  },

  {
    id: "viral-guion-storytime-031",
    title: "La cosa que me daba flojera (y era clave)",
    summary: "Storytime de resistencia interna.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 20–30s: “Me daba flojera y era clave” sobre [TAREA].
Acto 1: evitación.
Acto 2: consecuencia.
Acto 3: lo hago simple con 1 sistema + resultado.
CTA: “¿Quieres el sistema?”`,
  },
  {
    id: "viral-guion-storytime-032",
    title: "El cambio de mentalidad con ejemplo",
    summary: "Mindset sin humo, con caso concreto.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un storytime 30s sobre un cambio de mentalidad en [TEMA].
Obligatorio:
- 1 ejemplo realista (antes/después).
- 2 frases cortas para texto en pantalla.
- CTA de guardado.`,
  },
  {
    id: "viral-guion-storytime-033",
    title: "La vez que me dijeron ‘no’",
    summary: "Rechazo + aprendizaje vendible.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 30–40s: “Me dijeron no” en [NICHO].
Acto 1: propuesta.
Acto 2: rechazo (pon 1 frase literal).
Acto 3: ajuste que hice (2 cambios) + resultado.
CTA: “¿Quieres la plantilla?”`,
  },
  {
    id: "viral-guion-storytime-034",
    title: "Lo que no entendí hasta que perdí",
    summary: "Pérdida pequeña + lección fuerte.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 25–35s: “No lo entendí hasta que perdí” sobre [TEMA].
Acto 2: pérdida (tiempo/dinero/oportunidad) sin exagerar.
Acto 3: regla + acción inmediata.
CTA: comparte/guarda.`,
  },
  {
    id: "viral-guion-storytime-035",
    title: "La mejor decisión fue decir NO",
    summary: "Storytime de límites.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 30s: “Mi mejor decisión fue decir NO” sobre [SITUACIÓN].
Acto 2: qué dije no exactamente (una frase).
Acto 3: qué hice en vez de eso + resultado.
Cierra con CTA: “Si te cuesta decir no, comenta ‘yo’”.`,
  },
  {
    id: "viral-guion-storytime-036",
    title: "El detalle de 2 segundos que dispara retención",
    summary: "Historia del ajuste pequeño que cambia métricas.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 25–35s sobre un ajuste de 2 segundos que mejora [MÉTRICA].
Acto 1: mi video no retenía.
Acto 2: detecto el fallo con 1 pista.
Acto 3: cambio exacto + resultado medible + CTA.`,
  },
  {
    id: "viral-guion-storytime-037",
    title: "El problema era mi oferta (no mi contenido)",
    summary: "Reencuadre hacia oferta.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 30–40s: “El problema era mi oferta” en [NICHO].
Acto 1: hacía contenido diario.
Acto 2: no vendía (por qué).
Acto 3: cambio de oferta (2 pasos) + primer resultado.
CTA: “¿Quieres que revise tu oferta? comenta [PALABRA]”.`,
  },
  {
    id: "viral-guion-storytime-038",
    title: "Ese día me dio rabia (y fue bueno)",
    summary: "Emoción + aprendizaje.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 25–35s: “Ese día me dio rabia” sobre [TEMA].
Acto 2: describe el disparador (concreto).
Acto 3: convierto la rabia en acción (3 pasos cortos).
CTA: guardar.`,
  },
  {
    id: "viral-guion-storytime-039",
    title: "Yo estaba copiando mal",
    summary: "Historia sobre copiar sin entender.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 20–30s: “Yo estaba copiando mal” en [Nicho].
Acto 1: copiaba a otros.
Acto 2: no funcionaba por X.
Acto 3: cómo lo adapté (2 reglas) + CTA.
Incluye un ejemplo de “adaptación”.`,
  },
  {
    id: "viral-guion-storytime-040",
    title: "Cuando dejé de buscar ‘likes’",
    summary: "Historia de cambio de métrica.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 30s: “Dejé de buscar likes” para [PLATAFORMA].
Acto 1: obsesión con likes.
Acto 2: descubrí que importaba [X].
Acto 3: cambié 2 cosas + resultado.
CTA: “¿Quieres mi checklist?”`,
  },

  {
    id: "viral-guion-storytime-041",
    title: "La regla de oro que me inculcaron",
    summary: "Storytime mentor/experiencia.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe un storytime 25–35s: “Me inculcaron esta regla” sobre [TEMA].
Acto 1: quién me lo dijo (sin nombre real).
Acto 2: cuándo lo ignoré y me fue mal.
Acto 3: cómo lo aplico + ejemplo.
CTA: guardado.`,
  },
  {
    id: "viral-guion-storytime-042",
    title: "La noche que hice el cambio",
    summary: "Escena cinematográfica + resultado.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 30–40s con escena nocturna (“esa noche…”).
Acto 1: ambiente + problema.
Acto 2: decisión concreta.
Acto 3: resultado y lección en 1 línea.
Tema: [TEMA].`,
  },
  {
    id: "viral-guion-storytime-043",
    title: "Lo que me da cringe hoy",
    summary: "Autocrítica ligera + aprendizaje.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 25–35s: “Lo que me da cringe hoy” sobre mis errores en [TEMA].
Acto 2: 2 errores concretos.
Acto 3: qué haría diferente (3 bullets) + CTA.
Tono: divertido, no pesado.`,
  },
  {
    id: "viral-guion-storytime-044",
    title: "El cambio que hice en 24 horas",
    summary: "Mini storytime de cambio rápido.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 20–30s: “En 24 horas cambié esto” sobre [TEMA].
Acto 1: situación.
Acto 2: cambio exacto.
Acto 3: resultado realista + CTA.
Incluye 3 variantes de CTA.`,
  },
  {
    id: "viral-guion-storytime-045",
    title: "Me dijeron que era imposible",
    summary: "Conflicto externo + prueba.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 30–40s: “Me dijeron que era imposible” en [NICHO].
Acto 2: quién lo dijo (tipo de persona) y por qué.
Acto 3: qué hice (2 acciones) + prueba (métrica).
CTA: “Si quieres el paso a paso, comenta [PALABRA]”.`,
  },
  {
    id: "viral-guion-storytime-046",
    title: "El mini truco que me da ventaja",
    summary: "Historia corta alrededor de un micro-sistema.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 20–30s: “Este mini truco me da ventaja” sobre [TEMA].
Acto 1: qué me frustraba.
Acto 2: descubrí el mini truco.
Acto 3: cómo se aplica en 2 pasos + CTA.
Incluye ejemplo realista.`,
  },
  {
    id: "viral-guion-storytime-047",
    title: "Lo que nadie vio detrás",
    summary: "Backstage + revelación.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 25–35s: “Lo que nadie vio detrás” en [PROCESO].
Acto 1: resultado visible.
Acto 2: lo que realmente pasó detrás (2 detalles).
Acto 3: consejo práctico + CTA.
Sugerir 3 tomas B-roll.`,
  },
  {
    id: "viral-guion-storytime-048",
    title: "La primera vez que lo intenté",
    summary: "Primer intento + error + mejora.",
    area: AREA,
    category: CATEGORY,
    prompt: `Storytime 30s: “La primera vez que lo intenté” sobre [HABILIDAD].
Acto 1: primer intento.
Acto 2: error gracioso/real.
Acto 3: qué aprendí + 2 tips.
CTA: “¿Quieres parte 2?”`,
  },
  {
    id: "viral-guion-storytime-049",
    title: "El punto donde casi abandono",
    summary: "Crisis + acción + salida.",
    area: AREA,
    category: CATEGORY,
    prompt: `Guion storytime 30–45s: “Casi abandono” en [TEMA].
Acto 1: inicio ilusionado.
Acto 2: punto de quiebre (concreto).
Acto 3: pequeño cambio que salvó todo + resultado.
CTA: “Si estás ahí, esto te sirve”.`,
  },
  {
    id: "viral-guion-storytime-050",
    title: "El final que no esperaba",
    summary: "Storytime con giro final fuerte.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea un storytime 25–35s sobre [TEMA] con “final inesperado”.
Reglas:
- Acto 1: promesa.
- Acto 2: conflicto real.
- Acto 3: giro + lección + CTA.
Incluye texto en pantalla por acto (máx 6 palabras).`,
  },
];
