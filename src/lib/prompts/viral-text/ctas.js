// src/lib/prompts/viral-text/ctas.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "CTAs";
const CATEGORY = "Comentarios (keyword) + DM";

export const viralTextPromptsCtas = [
  {
    id: "viral-cta-comentarios-001",
    title: "CTA keyword para enviar plantilla",
    summary: "CTA directo para disparar comentarios y envío por DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Actúa como estratega de crecimiento. Escribe 15 CTAs para el final de un Reel sobre [TEMA].
Objetivo: que comenten una keyword para recibir una plantilla por DM.
Requisitos:
- Incluye la keyword: “[KEYWORD]”
- 1 sola frase, máximo 14 palabras
- Tono: cercano, no desesperado
Entrega en lista.`,
  },
  {
    id: "viral-cta-comentarios-002",
    title: "CTA con promesa específica (sin exagerar)",
    summary: "Keyword + valor concreto y realista.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 CTAs con keyword para [AUDIENCIA] sobre [TEMA].
Estructura: “Comenta [KEYWORD] y te mando [RECURSO]”
[RECURSO] debe ser específico (checklist, guion, plantilla, swipe file).
Evita palabras: “gratis”, “urgente”, “última oportunidad”.`,
  },
  {
    id: "viral-cta-comentarios-003",
    title: "CTA con doble opción de keyword",
    summary: "2 keywords para segmentar intereses.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs con dos opciones de keyword para segmentar.
Formato:
“Comenta [A] si quieres [X] o [B] si quieres [Y].”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Que X e Y sean recursos diferentes.`,
  },
  {
    id: "viral-cta-comentarios-004",
    title: "CTA: comenta y te mando ejemplo real",
    summary: "Promete ejemplo real para aumentar intención.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs para [TEMA] que ofrezcan “un ejemplo real”.
Debe incluir keyword [KEYWORD].
Varía el tono: 5 directos, 5 casuales, 5 premium.`,
  },
  {
    id: "viral-cta-comentarios-005",
    title: "CTA con micro-autoridad",
    summary: "Sugiere que ya lo usaste y funciona (creíble).",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 CTAs con keyword para [TEMA] que mencionen que es “la plantilla que uso yo”.
Ejemplo: “Comenta [KEYWORD] y te mando la plantilla que uso yo.”
Que todas sean diferentes. Máx 14 palabras.`,
  },
  {
    id: "viral-cta-comentarios-006",
    title: "CTA gentle: sin presión",
    summary: "Llamado a acción suave.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 CTAs suaves (sin presión) para [AUDIENCIA].
Debes incluir keyword [KEYWORD] y la idea de “si te sirve”.
Máx 16 palabras.`,
  },
  {
    id: "viral-cta-comentarios-007",
    title: "CTA con curiosidad: 'te lo paso'",
    summary: "Cierra con misterio para aumentar comentarios.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs con keyword que incluyan la frase “te lo paso”.
Tema: [TEMA].
Haz que el recurso sea intrigante pero específico.
Máximo 14 palabras.`,
  },
  {
    id: "viral-cta-comentarios-008",
    title: "CTA para serie: parte 2 por keyword",
    summary: "Comenta keyword para recepción de parte 2.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs para cierre de video que inviten a “parte 2” por DM.
Incluye keyword [KEYWORD].
Reglas:
- Sin rogar.
- Menciona qué incluye la parte 2 (1 cosa).
Máx 16 palabras.`,
  },
  {
    id: "viral-cta-comentarios-009",
    title: "CTA para carrusel: keyword al final",
    summary: "Pensado para posts guardables.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 CTAs para carrusel sobre [TEMA] que pidan comentar [KEYWORD].
Debe ofrecer: checklist/plantilla/guía.
Incluye 5 variantes que también pidan “guardar”.`,
  },
  {
    id: "viral-cta-comentarios-010",
    title: "CTA con mini-compromiso",
    summary: "Pide comentar keyword + una señal (emoji/numero).",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs para [TEMA] donde pidan:
“Comenta [KEYWORD] + un número del 1 al 3”
para elegir versión del recurso.
Ejemplo: “1 rápida, 2 completa, 3 pro”.
Máx 18 palabras.`,
  },

  {
    id: "viral-cta-comentarios-011",
    title: "CTA: comenta keyword si quieres ejemplo",
    summary: "Segmenta por intención.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 20 CTAs que empiecen con:
“Si quieres un ejemplo…”
y terminen con “comenta [KEYWORD]”.
Tema: [TEMA].`,
  },
  {
    id: "viral-cta-comentarios-012",
    title: "CTA para objeciones: 'si no sabes por dónde'",
    summary: "Diseñado para principiantes atascados.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 CTAs con keyword para gente que está bloqueada en [TEMA].
Debe incluir “si no sabes por dónde empezar”.
keyword: [KEYWORD].
Máx 18 palabras.`,
  },
  {
    id: "viral-cta-comentarios-013",
    title: "CTA para audiencia avanzada",
    summary: "Tono pro, recurso pro, keyword.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs para audiencia avanzada en [NICHO].
Ofrece un recurso avanzado (framework, guion, auditoría, swipe file).
Incluye keyword [KEYWORD].
Tono: premium y directo.`,
  },
  {
    id: "viral-cta-comentarios-014",
    title: "CTA con incentivo de rapidez (sin urgencia falsa)",
    summary: "“Te lo mando hoy” sin manipulación.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs con keyword para [TEMA] que incluyan:
“te lo mando hoy”
Sin sonar como oferta limitada.
Máx 14 palabras.`,
  },
  {
    id: "viral-cta-comentarios-015",
    title: "CTA: keyword + pregunta",
    summary: "CTA que termina con pregunta para más respuestas.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs que pidan comentar [KEYWORD] y terminen en pregunta.
Tema: [TEMA].
Ejemplo: “Comenta X y te lo paso, ¿te sirve?”
Máx 18 palabras.`,
  },
  {
    id: "viral-cta-comentarios-016",
    title: "CTA con promesa de 3 versiones",
    summary: "Ofrece versiones (mini, completa, pro).",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 10 CTAs:
“Comenta [KEYWORD] y te mando 3 versiones: mini, completa y pro.”
Tema: [TEMA].
Haz 10 variaciones sin repetir vocabulario.`,
  },
  {
    id: "viral-cta-comentarios-017",
    title: "CTA: keyword + envío automático",
    summary: "Menciona automatización sin sonar bot.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs donde digas que se envía por DM automáticamente.
Incluye keyword [KEYWORD].
Tema: [TEMA].
Tono humano, cero robot.`,
  },
  {
    id: "viral-cta-comentarios-018",
    title: "CTA: keyword + 'te lo dejo listo'",
    summary: "Promesa de “copiar/pegar”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs para [TEMA] que prometan “copiar y pegar”.
Incluye keyword [KEYWORD].
Máx 16 palabras.`,
  },
  {
    id: "viral-cta-comentarios-019",
    title: "CTA para lead magnet sin decir 'lead magnet'",
    summary: "Ofrece recurso descargable con keyword.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 CTAs que ofrezcan una guía descargable / PDF / checklist
sin decir “lead magnet”.
Incluye keyword [KEYWORD].
Tema: [TEMA].`,
  },
  {
    id: "viral-cta-comentarios-020",
    title: "CTA con prueba social ligera",
    summary: "“Se lo pasé a X y le sirvió” sin inventar cifras.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs con keyword que incluyan “A varios les sirvió…”
sin dar números.
Tema: [TEMA]. keyword: [KEYWORD].
Máx 16 palabras.`,
  },

  {
    id: "viral-cta-comentarios-021",
    title: "CTA: keyword + lista de ejemplos",
    summary: "Ofrece ejemplos para aumentar deseo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs para [TEMA] ofreciendo “lista de ejemplos”.
keyword: [KEYWORD].
Varía el recurso: ejemplos de hooks, guiones, CTAs, ofertas, etc.`,
  },
  {
    id: "viral-cta-comentarios-022",
    title: "CTA: keyword + mini-auditoría",
    summary: "Ofrece auditoría checklist por DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 10 CTAs para [AUDIENCIA] ofreciendo “mini-auditoría” por DM.
Incluye keyword [KEYWORD].
Hazlo ético: “te dejo 3 mejoras rápidas”.`,
  },
  {
    id: "viral-cta-comentarios-023",
    title: "CTA para nicho local",
    summary: "Keyword + “te lo adapto a tu ciudad/negocio”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs para negocios locales sobre [TEMA].
Incluye keyword [KEYWORD].
Debe decir que lo adaptas a su tipo de negocio.
Máx 18 palabras.`,
  },
  {
    id: "viral-cta-comentarios-024",
    title: "CTA: keyword + 'te lo dejo armado'",
    summary: "Promete armado listo para usar.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs para [TEMA] con la frase “te lo dejo armado”.
keyword: [KEYWORD].
Varía lo que “armas”: guion, caption, estructura, checklist.`,
  },
  {
    id: "viral-cta-comentarios-025",
    title: "CTA con palabra fácil (1–2 sílabas)",
    summary: "Keywords cortas para más comentarios.",
    area: AREA,
    category: CATEGORY,
    prompt: `Propon 20 CTAs con keywords de 1–2 sílabas (ej: “ya”, “mix”, “pro”, “kit”).
Tema: [TEMA].
Cada CTA debe incluir: “Comenta [KEYWORD] y te lo paso por DM.”`,
  },
  {
    id: "viral-cta-comentarios-026",
    title: "CTA: keyword + 'si quieres mi guion'",
    summary: "Para creadores que hacen video.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 CTAs para creadores sobre [TEMA] que ofrezcan “mi guion”.
Incluye keyword [KEYWORD].
Tono: cercano, natural.`,
  },
  {
    id: "viral-cta-comentarios-027",
    title: "CTA: keyword + 'te mando la estructura'",
    summary: "Enfocado a frameworks.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 CTAs que ofrezcan “estructura” o “framework” por DM.
keyword: [KEYWORD]. Tema: [TEMA].
Varía la frase final (DM, mensaje, te lo envío, etc.).`,
  },
  {
    id: "viral-cta-comentarios-028",
    title: "CTA con bonus por DM",
    summary: "Ofrece bonus extra si comentan keyword.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 CTAs para [TEMA] donde el recurso tenga un bonus.
Formato:
“Comenta [KEYWORD] y te mando [RECURSO] + [BONUS]”
Que el bonus sea pequeño y útil.`,
  },
  {
    id: "viral-cta-comentarios-029",
    title: "CTA: keyword + 'te lo personalizo'",
    summary: "Personalización ligera sin prometer demasiado.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 10 CTAs que incluyan “te lo personalizo” para [AUDIENCIA].
keyword: [KEYWORD].
Aclara el alcance: “1 ajuste rápido” o “una versión adaptada”.`,
  },
  {
    id: "viral-cta-comentarios-030",
    title: "CTA: keyword + 'te lo convierto a tu nicho'",
    summary: "Adaptación a nicho para más intención.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 12 CTAs:
“Comenta [KEYWORD] y te lo convierto a tu nicho.”
Tema: [TEMA].
Haz 12 variaciones con sinónimos (adaptar, aterrizar, traducir a tu caso).`,
  },

  {
    id: "viral-cta-comentarios-031",
    title: "CTA con keyword y prueba rápida",
    summary: "Pide comentar + probar y volver a decir resultados.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 10 CTAs que pidan:
1) comentar [KEYWORD]
2) probar el recurso hoy
3) volver y comentar el resultado
Tema: [TEMA].
Tono motivador, cero presión.`,
  },
  {
    id: "viral-cta-comentarios-032",
    title: "CTA para objeción 'no tengo tiempo'",
    summary: "Enfoca recurso en rapidez.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs con keyword para gente sin tiempo.
Incluye “te toma 5 minutos”.
keyword: [KEYWORD].
Tema: [TEMA].`,
  },
  {
    id: "viral-cta-comentarios-033",
    title: "CTA con keyword + recurso 'lista de frases'",
    summary: "Swipes de frases listas para copiar.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 CTAs para [TEMA] ofreciendo “lista de frases” por DM.
Incluye keyword [KEYWORD].
Que suene útil y específico.`,
  },
  {
    id: "viral-cta-comentarios-034",
    title: "CTA: keyword + plantilla de 3 pasos",
    summary: "Plantilla simple, alta conversión.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 15 CTAs que ofrezcan una plantilla de 3 pasos para [RESULTADO].
Incluye keyword [KEYWORD].
Máx 16 palabras.`,
  },
  {
    id: "viral-cta-comentarios-035",
    title: "CTA: keyword + ejemplo en tu caso",
    summary: "Ofrece un ejemplo aplicado al usuario.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 10 CTAs:
“Comenta [KEYWORD] y te mando un ejemplo aplicado a tu caso.”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Sin prometer consultoría larga.`,
  },
  {
    id: "viral-cta-comentarios-036",
    title: "CTA: keyword + mini-guía",
    summary: "Guía corta y concreta.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 CTAs para [TEMA] ofreciendo “mini-guía” por DM.
Incluye keyword [KEYWORD].
Varía el estilo: 10 casuales, 10 formales.`,
  },
  {
    id: "viral-cta-comentarios-037",
    title: "CTA con keyword + 'te lo mando sin spam'",
    summary: "Reduce fricción por miedo a spam.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 CTAs que incluyan una frase anti-spam:
“Te lo mando sin spam” / “sin links raros” / “solo el recurso”.
Incluye keyword [KEYWORD].
Tema: [TEMA].`,
  },
  {
    id: "viral-cta-comentarios-038",
    title: "CTA: keyword + 'te lo dejo en borrador'",
    summary: "Promete contenido listo para copiar.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 10 CTAs donde ofreces entregar “un borrador listo”.
keyword: [KEYWORD]. Tema: [TEMA].
Ej: caption listo, guion listo, mensaje listo.`,
  },
  {
    id: "viral-cta-comentarios-039",
    title: "CTA: keyword + checklist de errores",
    summary: "Errores = alto guardado y deseo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 CTAs que ofrezcan “checklist de errores” para [TEMA].
Incluye keyword [KEYWORD].
Manténlo corto (máx 16 palabras).`,
  },
  {
    id: "viral-cta-comentarios-040",
    title: "CTA: keyword con tono divertido",
    summary: "CTA playful para aumentar comentarios.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 15 CTAs con keyword [KEYWORD] para [TEMA] con tono divertido (sin cringe).
Debe incluir un guiño tipo: “te lo paso y listo”.
Máx 16 palabras.`,
  },

  {
    id: "viral-cta-comentarios-041",
    title: "CTA: keyword + 'te lo mando ahora'",
    summary: "Inmediatez sin urgencia falsa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 CTAs con:
“Comenta [KEYWORD] y te lo mando ahora.”
Tema: [TEMA].
Haz 12 variaciones sin repetir “ahora” (ej: “en este momento”, “ya”).`,
  },
  {
    id: "viral-cta-comentarios-042",
    title: "CTA: keyword + plantillas para 3 formatos",
    summary: "Ofrece variantes por formato (Reel, carrusel, story).",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 10 CTAs ofreciendo plantillas para 3 formatos.
Formato base:
“Comenta [KEYWORD] y te mando versiones para Reel, carrusel y story.”
Tema: [TEMA].`,
  },
  {
    id: "viral-cta-comentarios-043",
    title: "CTA: keyword + 'te mando mi swipe file'",
    summary: "Promesa premium: swipe file.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs ofreciendo “mi swipe file” para [TEMA].
Incluye keyword [KEYWORD].
Tono: pro y directo, no arrogante.`,
  },
  {
    id: "viral-cta-comentarios-044",
    title: "CTA: keyword + 'te lo traduzco a tu nivel'",
    summary: "Segmenta por nivel del usuario.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 10 CTAs:
“Comenta [KEYWORD] y te lo traduzco a tu nivel (principiante/intermedio/pro).”
Tema: [TEMA].
Haz 10 variaciones.`,
  },
  {
    id: "viral-cta-comentarios-045",
    title: "CTA: keyword + 'te mando la plantilla exacta'",
    summary: "Claridad y especificidad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 15 CTAs que incluyan “la plantilla exacta”.
keyword: [KEYWORD]. Tema: [TEMA].
Max 16 palabras.`,
  },
  {
    id: "viral-cta-comentarios-046",
    title: "CTA: keyword + promesa de 5 ejemplos",
    summary: "Ofrece ejemplos concretos.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs:
“Comenta [KEYWORD] y te mando 5 ejemplos listos.”
Tema: [TEMA].
Haz variedad en el tipo de ejemplos (hooks, guiones, captions, mensajes).`,
  },
  {
    id: "viral-cta-comentarios-047",
    title: "CTA: keyword + 'te lo dejo simple'",
    summary: "Reduce fricción por complejidad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 CTAs con keyword [KEYWORD] que incluyan “te lo dejo simple”.
Tema: [TEMA].
Mantén tono humano y corto.`,
  },
  {
    id: "viral-cta-comentarios-048",
    title: "CTA: keyword + 'te mando la estructura en 1 hoja'",
    summary: "Promete resumen en 1 hoja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 10 CTAs ofreciendo “estructura en 1 hoja”.
Incluye keyword [KEYWORD]. Tema: [TEMA].
Haz 10 variaciones sin repetición.`,
  },
  {
    id: "viral-cta-comentarios-049",
    title: "CTA: keyword + 'te lo paso y me dices'",
    summary: "Crea conversación posterior.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 12 CTAs que terminen con:
“te lo paso y me dices si te sirvió.”
Incluye keyword [KEYWORD].
Tema: [TEMA].`,
  },
  {
    id: "viral-cta-comentarios-050",
    title: "CTA para cerrar con autoridad suave",
    summary: "Cierre de mentor y envío por DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 12 CTAs con keyword que suenen a mentor:
“Si quieres que te lo deje listo, comenta [KEYWORD].”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Sin sonar a venta dura.`,
  },
];
