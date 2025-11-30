// src/lib/prompts/viral-text/captions.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Captions";
const CATEGORY = "Titulares + primera línea";

export const viralTextPromptsCaptions = [
  {
    id: "viral-caption-titulares-001",
    title: "20 titulares con beneficio + curiosidad",
    summary: "Titulares cortos para abrir loop en la primera línea.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 titulares (máx 9 palabras) para un post sobre [TEMA] dirigido a [AUDIENCIA].
Reglas:
- Deben prometer un beneficio concreto.
- Deben incluir un micro “curiosity gap”.
- Sin exagerar (“garantizado”, “millones”, etc.).
Entrega en lista numerada.`,
  },
  {
    id: "viral-caption-titulares-002",
    title: "Titulares con 'lo que nadie te dice'",
    summary: "Variaciones de la misma idea sin repetición.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 25 titulares para [TEMA] usando la idea “Lo que nadie te dice…”.
Cada titular debe ser único y específico (menciona un detalle real).
Máximo 10 palabras.`,
  },
  {
    id: "viral-caption-titulares-003",
    title: "Primera línea estilo conversación",
    summary: "Aperturas que suenan como DM y enganchan.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 30 primeras líneas para caption que parezcan una conversación real.
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Reglas:
- Empieza con “Oye,” o “Te juro,” o “Mira,” (repartido).
- 6–12 palabras.
- Debe invitar a seguir leyendo.`,
  },
  {
    id: "viral-caption-titulares-004",
    title: "Titulares con números realistas",
    summary: "Números para credibilidad sin humo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 25 titulares con números realistas para [TEMA].
Ejemplos de números permitidos: 3, 5, 7, 10, 30, 60, 90.
Evita “100x”, “millonario”, “en 1 día”.
Máximo 11 palabras.`,
  },
  {
    id: "viral-caption-titulares-005",
    title: "Titulares anti-mito",
    summary: "Desmitificar sin agresión.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 titulares que rompan un mito común en [NICHO].
Estructura: “Mito: [X]. Realidad: [Y].”
Mantén [X] y [Y] cortos (máx 6 palabras cada uno).`,
  },
  {
    id: "viral-caption-titulares-006",
    title: "Primera línea con confesión",
    summary: "Confesión breve que abre loop.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 25 primeras líneas de caption tipo confesión para [TEMA].
Reglas:
- Deben empezar con “Confieso que…”, “Me di cuenta que…”, o “Antes yo…”.
- 8–14 palabras.
- Deben insinuar un aprendizaje para el lector.`,
  },
  {
    id: "viral-caption-titulares-007",
    title: "Titulares tipo checklist",
    summary: "Hooks de lista para guardar.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 titulares tipo checklist para [TEMA].
Plantillas posibles:
- “Checklist: si te pasa X, haz Y”
- “Antes de hacer X, revisa esto”
- “Si quieres X, no olvides esto”
Máximo 12 palabras.`,
  },
  {
    id: "viral-caption-titulares-008",
    title: "Titulares con 'te estás saboteando'",
    summary: "Dolor + solución implícita.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 25 titulares para [AUDIENCIA] sobre autosabotaje en [TEMA].
Inicia con “Te estás saboteando cuando…”
Cierra con una consecuencia clara.
Máximo 12 palabras.`,
  },
  {
    id: "viral-caption-titulares-009",
    title: "Titulares con contraste 'antes/después'",
    summary: "Contraste visual para alta retención.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 titulares con estructura “Antes / Después” para [TEMA].
Ejemplo: “Antes: X. Después: Y.”
Que X sea un dolor y Y un resultado realista.
Máximo 14 palabras total.`,
  },
  {
    id: "viral-caption-titulares-010",
    title: "Primera línea con pregunta incómoda",
    summary: "Pregunta directa que obliga a responder mentalmente.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 30 primeras líneas en forma de pregunta “incómoda pero útil” para [AUDIENCIA] sobre [TEMA].
Reglas:
- 8–12 palabras.
- Evita juzgar o insultar.
- Debe apuntar a un comportamiento específico.`,
  },

  {
    id: "viral-caption-titulares-011",
    title: "Titulares 'haz esto en vez de eso'",
    summary: "Comparación directa para claridad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 titulares para [TEMA] con la plantilla:
“En vez de [X], haz [Y].”
[X] y [Y] deben ser acciones concretas.
Máximo 11 palabras.`,
  },
  {
    id: "viral-caption-titulares-012",
    title: "Primera línea con mini-historia",
    summary: "Micro story para abrir loop en una frase.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 primeras líneas que parezcan el inicio de una historia real.
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Reglas:
- Incluye 1 detalle específico (lugar, hora, número).
- Máximo 14 palabras.
- Debe terminar con “y ahí entendí algo”.`,
  },
  {
    id: "viral-caption-titulares-013",
    title: "Titulares con promesa de plantilla",
    summary: "Enganche para comentario/DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 titulares que prometan una plantilla sin sonar a venta dura.
Incluye “plantilla” o “guía” o “checklist”.
Tema: [TEMA].
Máximo 12 palabras.`,
  },
  {
    id: "viral-caption-titulares-014",
    title: "Titulares con 'si yo empezara hoy'",
    summary: "Aperturas tipo mentor que generan confianza.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 20 titulares que empiecen con:
“Si yo empezara hoy en [TEMA]…”
Debe terminar con una acción concreta.
Máximo 13 palabras.`,
  },
  {
    id: "viral-caption-titulares-015",
    title: "Primera línea 'te voy a ahorrar tiempo'",
    summary: "Promesa de ahorro de tiempo realista.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 25 primeras líneas para caption con promesa de ahorrar tiempo.
Plantillas:
- “Te voy a ahorrar X horas con esto…”
- “Esto te evita X errores…”
Usa números realistas. Tema: [TEMA].`,
  },
  {
    id: "viral-caption-titulares-016",
    title: "Titulares con 'la parte que ignoras'",
    summary: "Foco en lo invisible/importante.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 titulares para [TEMA] sobre “la parte que ignoras”.
Debe incluir un objeto claro: “tu oferta”, “tu primer segundo”, “tu CTA”, etc.
Máximo 12 palabras.`,
  },
  {
    id: "viral-caption-titulares-017",
    title: "Primera línea con reto",
    summary: "Reto directo para comentario/engagement.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 primeras líneas que sean un reto para [AUDIENCIA] sobre [TEMA].
Reglas:
- Empieza con “Reto:”
- Una sola frase.
- Termina con “¿te animas?”`,
  },
  {
    id: "viral-caption-titulares-018",
    title: "Titulares 'deja de hacer esto'",
    summary: "Prohibición suave para llamar atención.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 30 titulares que empiecen con:
“Deja de hacer esto en [TEMA]…”
Luego agrega un porqué corto (máx 6 palabras).
No uses agresividad.`,
  },
  {
    id: "viral-caption-titulares-019",
    title: "Primera línea con 'no estás solo'",
    summary: "Empatía para retener audiencias inseguras.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 primeras líneas empáticas para [AUDIENCIA] sobre [DOLOR].
Reglas:
- Deben incluir “no estás solo” o “nos pasa a todos” (variado).
- Deben prometer una solución en el post/video.
- Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-020",
    title: "Titulares tipo 'errores comunes'",
    summary: "Clásico guardable.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 25 titulares estilo “Errores comunes” para [TEMA].
Ejemplos:
- “3 errores comunes que te cuestan X”
- “Los errores que te frenan en X”
Usa números realistas y lenguaje claro.`,
  },

  {
    id: "viral-caption-titulares-021",
    title: "Primera línea con 'esto cambia el juego'",
    summary: "Aperturas potentes sin humo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 25 primeras líneas con “esto cambia el juego”.
Reglas:
- Deben mencionar el “esto” (acción concreta).
- Sin promesas absolutas.
Tema: [TEMA]. Audiencia: [AUDIENCIA].`,
  },
  {
    id: "viral-caption-titulares-022",
    title: "Titulares con analogía simple",
    summary: "Metáforas cortas para explicar ideas difíciles.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 titulares con analogías simples para [TEMA].
Ejemplo: “Tu oferta es como un menú: si confunde, no compran.”
Máximo 16 palabras.`,
  },
  {
    id: "viral-caption-titulares-023",
    title: "Primera línea estilo 'te lo explico fácil'",
    summary: "Promete claridad inmediata.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 30 primeras líneas estilo:
“Te lo explico fácil: …”
Debe introducir [TEMA] y prometer una explicación en 3 pasos.
Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-024",
    title: "Titulares con 'lo probé para que tú no'",
    summary: "Autoridad por experiencia.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 titulares con:
“Lo probé para que tú no…”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Incluye consecuencia realista y aprendizaje implícito.`,
  },
  {
    id: "viral-caption-titulares-025",
    title: "Primera línea con una cifra que duele",
    summary: "Cifra realista que dispara atención.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 primeras líneas que incluyan una cifra “que duele” (realista) sobre [TEMA].
Ej: “Perdí 3 horas por no hacer esto…”
No uses cifras absurdas. Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-026",
    title: "Titulares para 'guárdalo'",
    summary: "Enfoque guardable desde el inicio.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 titulares que hagan que la gente quiera guardar el post/video.
Debe insinuar:
- checklist
- pasos
- plantilla
Tema: [TEMA]. Máximo 12 palabras.`,
  },
  {
    id: "viral-caption-titulares-027",
    title: "Primera línea con micro-promesa",
    summary: "Micro promesa clara en 1 frase.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 30 primeras líneas con promesa breve para [AUDIENCIA].
Plantilla: “Hoy te llevas [BENEFICIO] en [TIEMPO].”
[TIEMPO] realista (30s, 2min, 5min).
Tema: [TEMA].`,
  },
  {
    id: "viral-caption-titulares-028",
    title: "Titulares con 'si haces X, pasa Y'",
    summary: "Causa-efecto fácil de entender.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 25 titulares causa-efecto:
“Si haces [X], pasa [Y].”
Para [TEMA]. [X] y [Y] deben ser concretos.
Máximo 13 palabras.`,
  },
  {
    id: "viral-caption-titulares-029",
    title: "Primera línea con 'te voy a decir algo'",
    summary: "Apertura de confesión/secretito.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 30 primeras líneas que empiecen con:
“Te voy a decir algo:”
Tema: [TEMA].
Que lo que sigue sea específico y útil (no vago).`,
  },
  {
    id: "viral-caption-titulares-030",
    title: "Titulares con 'no es X, es Y'",
    summary: "Reencuadre potente para scroll-stopper.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 titulares con:
“No es [X], es [Y].”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
[X] debe ser una creencia común; [Y] debe ser la causa real.`,
  },

  {
    id: "viral-caption-titulares-031",
    title: "Primera línea para contenido educativo",
    summary: "Aperturas didácticas sin ser aburridas.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 25 primeras líneas educativas para [TEMA].
Reglas:
- Deben prometer “en 3 puntos”.
- Deben incluir un beneficio práctico.
- Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-032",
    title: "Titulares con 'lo que haría en tu lugar'",
    summary: "Mentoría y cercanía.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 titulares que empiecen con:
“En tu lugar, yo haría esto…”
Tema: [TEMA].
Debe terminar con una acción concreta. Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-033",
    title: "Primera línea con advertencia",
    summary: "Advertencias útiles, no alarmistas.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 primeras líneas tipo advertencia para [TEMA].
Plantillas:
- “Ojo con esto…”
- “No caigas en esto…”
- “Antes de hacer X, mira esto…”
Máximo 12 palabras.`,
  },
  {
    id: "viral-caption-titulares-034",
    title: "Titulares para comentarios con keyword",
    summary: "Diseñados para disparar comentarios.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 titulares que terminen con:
“Comenta [KEYWORD] y te lo paso.”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Asegúrate de que lo que se “pasa” sea valioso (plantilla/guía/lista).`,
  },
  {
    id: "viral-caption-titulares-035",
    title: "Primera línea con mini-desafío",
    summary: "Aperturas que invitan a probar algo hoy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 primeras líneas con mini-desafío para [AUDIENCIA] sobre [TEMA].
Debe incluir “hoy” y una acción de menos de 5 minutos.
Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-036",
    title: "Titulares con 'esto te está costando'",
    summary: "Dolor económico/tiempo realista.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 25 titulares con:
“Esto te está costando [DINERO/TIEMPO]…”
Tema: [TEMA].
Usa cifras realistas o expresiones (“horas”, “clientes”, “energía”).
Máximo 13 palabras.`,
  },
  {
    id: "viral-caption-titulares-037",
    title: "Primera línea para vender sin vender",
    summary: "Apertura con valor + curiosidad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 25 primeras líneas para [OFERTA] donde NO suene a venta.
Debe ofrecer un tip real y abrir un loop.
Tema: [TEMA]. Audiencia: [AUDIENCIA].`,
  },
  {
    id: "viral-caption-titulares-038",
    title: "Titulares con 'la verdad es…'",
    summary: "Verdad corta + detalle que sorprende.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 30 titulares que empiecen con:
“La verdad es…”
Tema: [TEMA].
Incluye un detalle específico (métrica, ejemplo, regla, frase).
Máximo 12 palabras.`,
  },
  {
    id: "viral-caption-titulares-039",
    title: "Primera línea tipo 'nadie habla de esto'",
    summary: "Omisión + curiosidad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 20 primeras líneas con:
“Nadie habla de esto…”
Tema: [TEMA].
Debe señalar algo real y útil (proceso, paso, error, detalle).
Máximo 13 palabras.`,
  },
  {
    id: "viral-caption-titulares-040",
    title: "Titulares con '3 señales de que…'",
    summary: "Señales = guardable + comentable.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 titulares con:
“3 señales de que…”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
Que “señales” sean concretas, no abstractas.
Máximo 13 palabras.`,
  },

  {
    id: "viral-caption-titulares-041",
    title: "Primera línea con frase exacta",
    summary: "Frase lista para copiar.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 primeras líneas que incluyan una frase exacta entre comillas para [AUDIENCIA].
La frase debe ser “copiar-pegar” y útil para [TEMA].
Máximo 16 palabras.`,
  },
  {
    id: "viral-caption-titulares-042",
    title: "Titulares con 'esto no es normal'",
    summary: "Sorpresa moderada.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 20 titulares que empiecen con:
“Esto no es normal:”
Tema: [TEMA].
Completa con un dato o hecho realista que sorprenda (sin exageración).
Máximo 13 palabras.`,
  },
  {
    id: "viral-caption-titulares-043",
    title: "Primera línea: 'te estás complicando'",
    summary: "Simplificación + promesa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 25 primeras líneas con:
“Te estás complicando…”
Tema: [TEMA].
Debe terminar con una solución simple (“haz esto en vez”).`,
  },
  {
    id: "viral-caption-titulares-044",
    title: "Titulares con 'esta es la diferencia'",
    summary: "Comparación que da claridad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 25 titulares con:
“Esta es la diferencia entre [A] y [B]”
Tema: [TEMA].
[A] y [B] deben ser conceptos del nicho y útiles.`,
  },
  {
    id: "viral-caption-titulares-045",
    title: "Primera línea: 'no necesitas más'",
    summary: "Contra la sobreinformación.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 primeras líneas con:
“No necesitas más [X], necesitas [Y].”
Tema: [TEMA]. Audiencia: [AUDIENCIA].
[X] y [Y] deben ser específicos.`,
  },
  {
    id: "viral-caption-titulares-046",
    title: "Titulares con 'si supieras esto'",
    summary: "Curiosity gap fuerte.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 titulares con:
“Si supieras esto sobre [TEMA]…”
Completa con una pista específica (no vaga).
Máximo 13 palabras.`,
  },
  {
    id: "viral-caption-titulares-047",
    title: "Primera línea para 'parte 2'",
    summary: "Aperturas que dejan espacio a serie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Escribe 20 primeras líneas pensadas para terminar en “parte 2”.
Tema: [TEMA].
Reglas:
- Sugiere que hay un paso que la gente siempre omite.
- No reveles todo.
Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-048",
    title: "Titulares con 'lo que nadie te advirtió'",
    summary: "Advertencia realista + utilidad.",
    area: AREA,
    category: CATEGORY,
    prompt: `Dame 20 titulares con:
“Lo que nadie te advirtió sobre [TEMA]”
Incluye un detalle específico (coste, fricción, error).
Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-049",
    title: "Primera línea con urgencia suave",
    summary: "Urgencia sin manipulación.",
    area: AREA,
    category: CATEGORY,
    prompt: `Crea 20 primeras líneas con urgencia suave para [TEMA].
Usa frases como:
- “Antes de que…”
- “Si estás haciendo esto esta semana…”
- “Si hoy estás atascado en…”
Máximo 14 palabras.`,
  },
  {
    id: "viral-caption-titulares-050",
    title: "Titulares con 'haz esto hoy'",
    summary: "Acción inmediata y simple.",
    area: AREA,
    category: CATEGORY,
    prompt: `Genera 25 titulares que incluyan “hoy” y una acción concreta (<5 min) para [TEMA].
Debe sonar práctico y realista.
Máximo 12 palabras.`,
  },
];
