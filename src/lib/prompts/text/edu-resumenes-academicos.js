// src/lib/prompts/text/edu-resumenes-academicos.js

export const textPromptsEduResumenesAcademicos = [
  {
    id: "edu-res-001",
    title: "Resumen académico IMRaD (paper completo) + aportes, límites y réplica",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Resume un paper en formato IMRaD con aportes, limitaciones, y posibles réplicas.",
    prompt: `Pega aquí el paper (o un extracto largo) y completa:
- Disciplina: [ ]
- Tipo de estudio: [experimental / observacional / teórico / revisión]
- Audiencia: [estudiantes / investigadores / directivos]
- Longitud deseada: [300 / 600 / 900 palabras]
- Enfoque: [más técnico / más conceptual]

Tarea:
1) Resume el trabajo en formato IMRaD:
- Introducción: problema, brecha, objetivo, hipótesis.
- Métodos: diseño, muestra/datos, variables, procedimiento, análisis.
- Resultados: hallazgos clave (con números si existen), figuras/tablas importantes.
- Discusión: interpretación, implicaciones, comparación con literatura, límites.

2) Extrae:
- 5 aportes principales (con precisión).
- 5 límites/amenazas a validez (interna/externa/constructo).
- 5 conceptos clave con definiciones operativas.
- 5 citas “parafraseables” (sin copiar literal; idea + sección donde aparece).

3) Cierre:
- 3 preguntas abiertas de investigación.
- 2 ideas de réplica (qué cambiarías y por qué).
- 1 versión ultra-corta (tweet académico de 280 caracteres).`,
    thumbnail: "",
  },
  {
    id: "edu-res-002",
    title: "Resumen crítico con matriz: qué dice, qué prueba, qué asume, qué falta",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Resumen crítico estructurado para lectura académica exigente.",
    prompt: `Texto a resumir: [PEGA AQUÍ]
Disciplina: [ ]
Nivel de rigor: [alto]

Devuelve un resumen en 4 bloques (con viñetas y frases cortas):
A) Qué afirma (tesis) — 5 bullets
B) Qué evidencia aporta — 5 bullets (datos, método, ejemplos)
C) Qué asume — 6 bullets (supuestos explícitos e implícitos)
D) Qué falta / riesgos — 6 bullets (sesgos, límites, datos ausentes)

Luego:
- 3 contraargumentos fuertes (steelman) contra la tesis
- 3 mejoras metodológicas concretas
- 1 síntesis equilibrada (150–220 palabras) “lo bueno + lo débil”.
`,
    thumbnail: "",
  },
  {
    id: "edu-res-003",
    title: "Resumen para revisión bibliográfica (estado del arte) + mapa de temas",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte un paper o capítulo en una entrada lista para tu revisión de literatura.",
    prompt: `Pega el texto: [PEGA AQUÍ]
Tema de tu revisión: [ ]
Estilo de citación (solo referencia textual): [APA/IEEE/Chicago]

Quiero:
1) Resumen orientado a literatura (250–450 palabras):
- problema, enfoque, hallazgos, aporte al campo.
2) Cómo encaja en el estado del arte:
- ¿qué línea/escuela representa?
- ¿qué debate toca?
- ¿qué contradice o confirma?
3) Mapa temático:
- 6 etiquetas (keywords) + por qué
- 3 artículos “vecinos” hipotéticos que debería buscar (títulos sugeridos + qué aportarían)
4) Nota de uso:
- En qué párrafo de mi revisión convendría citarlo (introducción / marco / discusión) y con qué propósito.`,
    thumbnail: "",
  },
  {
    id: "edu-res-004",
    title: "Resumen con extracción de variables y definiciones (operacionalización)",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Extrae variables, mediciones y definiciones: ideal para replicar o diseñar estudio.",
    prompt: `Texto / paper: [PEGA AQUÍ]
Objetivo: [replicar / diseñar estudio similar / entender variables]

Devuelve:
1) Resumen general (200–350 palabras).
2) Tabla en texto (con columnas):
- Variable / Constructo
- Definición (cómo la entienden)
- Operacionalización (cómo la miden)
- Tipo (IV/DV/Control/Moderadora/Mediadora)
- Fuente/Sección (dónde aparece)
3) Amenazas a validez:
- 2 internas
- 2 externas
- 2 de constructo
4) Recomendaciones:
- 3 mejoras para medir mejor esas variables.`,
    thumbnail: "",
  },
  {
    id: "edu-res-005",
    title: "Resumen con ‘hilo lógico’: premisas → método → inferencia → conclusión",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Reconstruye el argumento del paper como un hilo lógico verificable.",
    prompt: `Pega el texto: [PEGA AQUÍ]
Nivel: [avanzado]

Quiero que reconstruyas el hilo lógico:
1) Premisas (5–10) — qué debe ser cierto para que el argumento funcione.
2) Método/operación (cómo pasan de premisas a evidencia).
3) Inferencias clave (3–6): dónde “saltan” de datos a conclusión.
4) Conclusiones (3): principal, secundaria, y una implícita.

Luego:
- Señala 3 puntos donde el argumento depende de un supuesto frágil.
- Propón 2 pruebas adicionales que fortalecerían el hilo lógico.
- Haz un resumen final de 180–250 palabras que conserve ese hilo.`,
    thumbnail: "",
  },
  {
    id: "edu-res-006",
    title: "Resumen comparativo: Paper A vs Paper B (similitudes, diferencias, quién convence)",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Comparación crítica entre dos papers con un veredicto razonado.",
    prompt: `Pega Paper A: [ ]
Pega Paper B: [ ]
Tema general: [ ]

Devuelve:
1) Resumen de A (150–250 palabras) y de B (150–250 palabras).
2) Matriz comparativa:
- Pregunta de investigación
- Método/datos
- Principales hallazgos
- Fortalezas
- Debilidades
- Generalización
3) Conflictos:
- ¿Dónde se contradicen y por qué? (3 puntos)
4) Veredicto:
- ¿Cuál es más convincente bajo qué condiciones?
- ¿Qué estudio haría para resolver la disputa?

Cierra con:
- 8 bullets para citar en una revisión de literatura.`,
    thumbnail: "",
  },
  {
    id: "edu-res-007",
    title: "Resumen ‘para exposición’: guion de 5 minutos + diapositivas sugeridas",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Transforma un paper en un guion listo para presentar en clase o seminario.",
    prompt: `Texto/paper: [PEGA AQUÍ]
Duración de exposición: 5 minutos
Audiencia: [clase / seminario / comité]

Entrega:
1) Guion narrado (450–650 palabras):
- hook, problema, método, resultados, implicaciones, cierre.
2) Estructura de slides (8–10):
- título de slide + 3 bullets
- qué gráfico/tabla pondrías y por qué
3) Preguntas para el público (3) que abren debate.
4) “Preguntas difíciles” que podrían hacerte (5) + respuestas breves.`,
    thumbnail: "",
  },
  {
    id: "edu-res-008",
    title: "Resumen ‘para estudiar’: notas Cornell + glosario + autoexamen",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte un texto en notas de estudio y añade autoevaluación.",
    prompt: `Texto: [PEGA AQUÍ]
Nivel: [universidad/posgrado]

Crea:
1) Notas Cornell:
- Columna de claves/preguntas (10–15)
- Columna de notas (respuestas desarrolladas)
- Resumen al final (120–180 palabras)
2) Glosario:
- 12–20 términos clave con definición + ejemplo
3) Autoexamen:
- 10 preguntas (6 MCQ + 4 abiertas)
- respuestas correctas + explicación breve`,
    thumbnail: "",
  },
  {
    id: "edu-res-009",
    title: "Resumen de capítulo de libro: tesis, estructura, conceptos, citas útiles",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Resume un capítulo largo manteniendo estructura y conceptos clave.",
    prompt: `Capítulo: [PEGA AQUÍ]
Objetivo: [estudiar / reseñar / preparar clase]
Longitud deseada: [400–800 palabras]

Quiero:
1) Tesis principal del capítulo (1–2 frases).
2) Estructura por secciones:
- Sección → idea principal → 2 subideas + ejemplo.
3) 10 conceptos clave (definición + cómo se usan aquí).
4) 6 ideas “citable” (paráfrasis) indicando qué sección las sustenta.
5) 3 críticas (lo débil / lo discutible) con argumentos.
6) 1 aplicación práctica (cómo lo usaría en un proyecto real).`,
    thumbnail: "",
  },
  {
    id: "edu-res-010",
    title: "Resumen sistemático de una revisión (review): preguntas, criterios, hallazgos, gaps",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Extrae lo esencial de una revisión, con huecos y recomendaciones futuras.",
    prompt: `Texto de revisión: [PEGA AQUÍ]
Campo: [ ]
Objetivo: [capturar el estado actual]

Devuelve:
1) Pregunta(s) de la revisión y motivación (100–150 palabras).
2) Criterios:
- inclusión/exclusión (si aparecen; si no, infiere con cautela)
- tipo de evidencia
3) Hallazgos principales:
- 6–10 bullets, agrupados por tema
4) Consenso vs controversias:
- 3 consensos
- 3 controversias
5) Gaps:
- 6 brechas reales y específicas
6) Agenda futura:
- 5 líneas de investigación recomendadas con “por qué ahora”.`,
    thumbnail: "",
  },

  {
    id: "edu-res-011",
    title: "Resumen para ‘related work’: 1 párrafo perfecto + 6 citas en bullets",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Output listo para pegar en un apartado de trabajos relacionados.",
    prompt: `Paper/texto: [PEGA AQUÍ]
Tu tema: [ESCRIBE AQUÍ]

Genera:
1) Un párrafo de “trabajos relacionados” (160–220 palabras) con:
- contexto del campo
- qué hace este trabajo
- cómo se diferencia
- limitación importante
2) 6 bullets “citable” (paráfrasis), cada uno con:
- idea
- por qué importa
- qué parte del texto la respalda (sección o frase aproximada)

Cierre:
- 3 frases alternativas para variar estilo y no repetir ‘este trabajo…’.`,
    thumbnail: "",
  },
  {
    id: "edu-res-012",
    title: "Resumen con ‘claim chart’: afirmación → evidencia → fuerza → riesgo",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Mapa de afirmaciones y evidencia para evaluar solidez rápidamente.",
    prompt: `Texto: [PEGA AQUÍ]

Construye un Claim Chart en formato tabla de texto con columnas:
- Claim (afirmación)
- Evidencia (qué presentan)
- Tipo de evidencia (dato/argumento/teoría/experimento/modelo)
- Fuerza (alta/media/baja) + por qué
- Riesgo/amenaza (sesgo, confusor, generalización)
- Qué faltaría para subir fuerza

Incluye mínimo 8 claims.

Luego:
- Resume en 200–300 palabras “qué está bien sustentado” vs “qué es tentativo”.`,
    thumbnail: "",
  },
  {
    id: "edu-res-013",
    title: "Resumen para tesis: extrae aportes, marco teórico, método replicable",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Orientado a redactar tesis: qué te sirve del paper y cómo incorporarlo.",
    prompt: `Texto: [PEGA AQUÍ]
Tema de mi tesis: [ ]
Capítulo donde lo usaré: [marco teórico / metodología / discusión]

Devuelve:
1) Resumen del paper (200–300 palabras).
2) Qué partes puedo usar y cómo:
- 3 ideas para marco teórico (con relación a mi tema)
- 2 ideas de método/medición
- 2 hallazgos para discusión
3) Riesgos al citarlo (2–4): malinterpretaciones comunes o límites.
4) 5 frases “listas para integrar” (paráfrasis académica), en tono formal.`,
    thumbnail: "",
  },
  {
    id: "edu-res-014",
    title: "Resumen con ‘concept map’: conceptos → relaciones → ejemplo aplicado",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Representa el texto como red de conceptos y relaciones para aprender profundo.",
    prompt: `Texto: [PEGA AQUÍ]

Entrega:
1) Lista de 12–18 conceptos clave
2) Relaciones entre conceptos (mínimo 20) en formato:
- Concepto A —(relación)→ Concepto B [explicación 1 línea]
3) 3 “rutas” importantes (cadenas de 4–6 conceptos) que expliquen el núcleo del texto
4) Un ejemplo aplicado (caso realista) que use al menos 6 conceptos
5) Resumen final (180–240 palabras) basándote en el mapa (no solo narrativo).`,
    thumbnail: "",
  },
  {
    id: "edu-res-015",
    title: "Resumen ‘para reviewer’: evaluación rápida + decisiones (aceptar/revisar/rechazar)",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Simula reporte de revisión: fortalezas, debilidades y mejoras concretas.",
    prompt: `Paper/texto: [PEGA AQUÍ]
Rol: reviewer de conferencia/journal
Criterios: [novedad, claridad, rigor, reproducibilidad, impacto]

Devuelve:
1) Resumen neutral (150–220 palabras).
2) Fortalezas (5 bullets).
3) Debilidades (6 bullets) — técnicas y de claridad.
4) Preguntas para autores (6) — concretas, no genéricas.
5) Recomendaciones (5) — cambios accionables.
6) Veredicto:
- Aceptar / Revisar / Rechazar
- 1 párrafo justificando, con foco en evidencia y estándares.
`,
    thumbnail: "",
  },

  {
    id: "edu-res-016",
    title: "Resumen de artículo teórico: conceptos, argumentos, contraejemplos, coherencia",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Para textos sin datos: reconstruye argumento y evalúa consistencia.",
    prompt: `Texto teórico: [PEGA AQUÍ]

Quiero:
1) Tesis y objetivo (1–2 frases).
2) Argumento principal:
- 6–10 pasos (premisa → conclusión)
3) Conceptos clave:
- 10 conceptos con definición según el autor + tu paráfrasis.
4) Posibles contraejemplos (3):
- dónde podría fallar la tesis
5) Coherencia interna:
- 3 puntos fuertes
- 3 puntos débiles (saltos lógicos, definiciones circulares, ambigüedad)
6) Resumen final (220–320 palabras).`,
    thumbnail: "",
  },
  {
    id: "edu-res-017",
    title: "Resumen de metodología: dataset, procedimiento, pipeline, reproducibilidad",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Extrae el pipeline metodológico y evalúa reproducibilidad, ideal para replicación.",
    prompt: `Sección de metodología: [PEGA AQUÍ]
Campo: [ ]
Objetivo: [replicar / entender pipeline]

Devuelve:
1) Pipeline paso a paso (8–14 pasos).
2) Detalles reproducibles:
- datos requeridos
- preprocesamiento
- parámetros relevantes
- métricas y evaluación
- herramientas/entorno (si se menciona)
3) Puntos ambiguos (lista): qué no está claro.
4) Qué pedirías a los autores para replicar (10 preguntas).
5) Resumen de 150–220 palabras de la metodología.`,
    thumbnail: "",
  },
  {
    id: "edu-res-018",
    title: "Resumen de resultados: hallazgos, magnitud, incertidumbre, límites de interpretación",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte resultados en conclusiones correctas, sin sobreafirmar.",
    prompt: `Sección de resultados (o tabla/figuras): [PEGA AQUÍ]

Entrega:
1) 6–10 hallazgos en bullets (incluye números y magnitud si existen).
2) Incertidumbre:
- intervalos/p-values/errores (si aparecen)
- si no aparecen: qué falta para confiar más
3) Interpretación responsable:
- qué conclusiones SÍ se sostienen (3–5)
- qué conclusiones NO se sostienen (3–5) y por qué
4) Implicaciones prácticas (3) con cautela.
5) Resumen final (180–260 palabras).`,
    thumbnail: "",
  },
  {
    id: "edu-res-019",
    title: "Resumen ‘para abstract’: crea 3 abstracts (técnico, general, ultra breve)",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Genera abstracts adaptados a audiencias distintas, sin inventar resultados.",
    prompt: `Texto/paper: [PEGA AQUÍ]
Disciplina: [ ]
Audiencias: [técnica / general / comité]

Crea 3 abstracts:
A) Técnico (150–250 palabras) — método y resultados con precisión
B) General (120–180 palabras) — menos jerga, más intuición
C) Ultra breve (50–80 palabras) — esencia

Reglas:
- No inventes datos; si falta un dato, marca [DATO NO PRESENTE].
- Mantén consistencia: problema → método → resultados → implicación.
- Incluye 5 keywords finales para cada abstract.`,
    thumbnail: "",
  },
  {
    id: "edu-res-020",
    title: "Resumen con ‘preguntas de lectura’ (seminario): guía para discusión",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Resumen + guía de preguntas para dirigir un seminario académico.",
    prompt: `Texto: [PEGA AQUÍ]

Entrega:
1) Resumen (250–400 palabras).
2) 12 preguntas para discusión (de fácil a difícil):
- 4 de comprensión
- 4 de crítica metodológica
- 4 de implicaciones y extensión
3) 6 “puntos calientes” (lugares donde suele haber debate o confusión).
4) Un cierre: tu juicio equilibrado (120–180 palabras) del valor del texto.`,
    thumbnail: "",
  },

  {
    id: "edu-res-021",
    title: "Resumen para ‘nota de investigación’: idea + método + contribución en 1 página",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte un paper en una nota de investigación de una página lista para archivo personal.",
    prompt: `Paper/texto: [PEGA AQUÍ]
Formato final: 1 página (pero en texto)

Quiero una “research note” con secciones:
- Referencia (autor/año/título si está disponible)
- Problema y motivación
- Pregunta/hipótesis
- Método/datos (muy concreto)
- Hallazgos clave
- Contribución (por qué importa)
- Limitaciones
- Ideas propias (cómo lo usaría yo) + 3 citas para mi trabajo (paráfrasis)

Cierra con:
- 5 keywords
- 3 papers relacionados a buscar (títulos sugeridos).`,
    thumbnail: "",
  },
  {
    id: "edu-res-022",
    title: "Resumen ‘anti-plagio’: paráfrasis académica limpia + conservación de significado",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Parafrasea de forma académica sin copiar, manteniendo precisión y matices.",
    prompt: `Texto: [PEGA AQUÍ]
Idioma de salida: [español/inglés]
Tono: formal académico

Tarea:
1) Resume en 250–350 palabras SIN copiar frases.
2) Mantén:
- mismos conceptos
- mismos matices (condiciones, límites, incertidumbre)
3) Señala:
- 8 términos técnicos que conviene mantener tal cual (si aplica)
- 6 lugares donde hay ambigüedad en el original (y cómo la resolviste o la preservaste)

Cierre:
- 3 versiones alternativas del primer párrafo (estilo distinto).`,
    thumbnail: "",
  },
  {
    id: "edu-res-023",
    title: "Resumen para ‘matriz de evidencia’: hallazgo → evidencia → contexto → generalización",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Estructura tipo evidence matrix para decisiones basadas en evidencias.",
    prompt: `Texto/paper: [PEGA AQUÍ]
Decisión o pregunta práctica que me importa: [ ]

Crea una matriz de evidencia (tabla en texto) con columnas:
- Hallazgo
- Evidencia (qué dato/resultado lo soporta)
- Contexto (población/entorno)
- Limitaciones
- Qué tan generalizable (alta/media/baja + por qué)
- Qué implicación práctica (con cautela)

Incluye mínimo 8 hallazgos.
Luego:
- 1 resumen ejecutivo (180–260 palabras) orientado a decisión.
- 5 recomendaciones “si-entonces” basadas en evidencia.`,
    thumbnail: "",
  },
  {
    id: "edu-res-024",
    title: "Resumen de multi-documentos: fusiona 3–5 textos en una síntesis coherente",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Sintetiza múltiples fuentes con acuerdos, conflictos y agenda futura.",
    prompt: `Pega 3–5 textos (separados por ###):
###
[TEXTO 1]
###
[TEXTO 2]
###
[TEXTO 3]
(…)

Tema unificador: [ ]

Entrega:
1) Síntesis integrada (500–900 palabras):
- qué problema comparten
- qué aporta cada texto
- dónde se complementan
- dónde se contradicen
2) Matriz de comparación por texto:
- tesis, método/evidencia, hallazgos, límites
3) Consensos (3–6) y controversias (3–6)
4) Agenda de investigación:
- 6 preguntas futuras
5) “Qué citaría yo”:
- 10 bullets de ideas para citar (paráfrasis), indicando de qué texto viene.`,
    thumbnail: "",
  },
  {
    id: "edu-res-025",
    title: "Resumen para escritura de marco teórico: conceptos → definiciones → relaciones",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Construye un mini-marco teórico a partir de un texto: definiciones y relaciones.",
    prompt: `Texto: [PEGA AQUÍ]
Tema de mi investigación: [ ]

Crea:
1) Resumen (200–300 palabras).
2) Núcleo conceptual:
- 10 conceptos clave con definiciones
- 15 relaciones entre conceptos (A → B) con explicación 1 línea
3) Propuesta de “marco” (250–400 palabras):
- cómo organizaría un marco teórico con estos conceptos
- orden recomendado de presentación
4) Huecos:
- 5 cosas que faltan para que el marco esté completo (qué textos buscar).`,
    thumbnail: "",
  },

  {
    id: "edu-res-026",
    title: "Resumen ‘para póster científico’: bullets, mensaje central, visuales sugeridos",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte un paper en contenido para póster: claro, visual y convincente.",
    prompt: `Paper/texto: [PEGA AQUÍ]
Audiencia: [congreso general / nicho técnico]

Quiero:
1) Mensaje central (1 frase).
2) 6 secciones de póster (títulos + 3–5 bullets c/u):
- Background, Objective, Methods, Results, Discussion, Takeaways
3) Visuales sugeridos:
- 3 gráficos/figuras que pondrías y por qué
4) “Pitch de pasillo” (90–140 palabras)
5) 5 preguntas que te harían frente al póster + respuestas cortas.`,
    thumbnail: "",
  },
  {
    id: "edu-res-027",
    title: "Resumen para ‘apunte de clase’: versión docente + ejemplos + ejercicios",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte un texto académico en apunte de clase con ejemplos y práctica.",
    prompt: `Texto: [PEGA AQUÍ]
Nivel del curso: [ ]
Duración de clase: [45/60/90 min]

Entrega:
1) Apunte estructurado:
- objetivos de aprendizaje (5)
- conceptos clave (10) con definiciones
- explicación por secciones (con ejemplos)
- analogías y advertencias (casos donde se confunden)
2) 5 ejemplos desarrollados (del más simple al más complejo)
3) 8 ejercicios (con solución breve)
4) 10 preguntas de quiz (con respuestas)`,
    thumbnail: "",
  },
  {
    id: "edu-res-028",
    title: "Resumen con ‘timeline de ideas’: cómo evoluciona el argumento sección por sección",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Sigue el flujo del texto como una línea temporal para comprender estructura.",
    prompt: `Texto: [PEGA AQUÍ]

Crea un timeline de ideas:
- Lista de 10–18 “beats” (puntos de giro) en orden:
  - Beat #, sección aproximada, idea principal, por qué importa

Luego:
- 5 “puentes” (frases) que conectan un beat con el siguiente (paráfrasis)
- 3 lugares donde el texto podría reordenarse para ser más claro
- Resumen final 200–280 palabras siguiendo el timeline.`,
    thumbnail: "",
  },
  {
    id: "edu-res-029",
    title: "Resumen ‘de control de calidad’: detecta inconsistencias y ambigüedades",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Auditoría de un texto académico: inconsistencias, definiciones flojas y huecos.",
    prompt: `Texto: [PEGA AQUÍ]

Haz una auditoría:
1) Resumen neutral (150–220 palabras).
2) Inconsistencias (mínimo 6):
- cita la idea (paráfrasis) + por qué es inconsistente
3) Ambigüedades (mínimo 6):
- término o frase ambigua
- 2 interpretaciones posibles
- cuál crees que es la intención del autor y por qué (si se puede inferir)
4) Definiciones flojas (mínimo 5):
- qué concepto necesita definición operativa
- propuesta de definición mejor
5) Recomendaciones concretas de mejora (8).`,
    thumbnail: "",
  },
  {
    id: "edu-res-030",
    title: "Resumen final “todo en uno”: académico + ejecutivo + estudio + discusión",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Un paquete completo: resumen académico, ejecutivo, notas de estudio y guía de discusión.",
    prompt: `Texto/paper: [PEGA AQUÍ]

Entrega un paquete con:
1) Resumen académico (300–450 palabras) con método y hallazgos.
2) Resumen ejecutivo (120–180 palabras) para no expertos.
3) Notas de estudio:
- 12 bullets de conceptos
- 10 definiciones
- 6 confusiones típicas
4) Guía de discusión:
- 8 preguntas (de fácil a difícil)
- 3 críticas metodológicas
- 3 ideas de extensión/research
5) Cierre:
- 1 “one-liner” (1 frase) que capture exactamente el aporte.`,
    thumbnail: "",
  },

  {
    id: "edu-res-031",
    title: "Resumen de tesis/disertación: capítulos, aportes, método, resultados, límites",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Resumen de trabajos largos (tesis) sin perder estructura por capítulos.",
    prompt: `Pega extracto o índice + secciones clave: [PEGA AQUÍ]
Longitud deseada: [500–1200 palabras]

Devuelve:
1) Resumen general (200–300 palabras).
2) Mapa por capítulos (si hay):
- Capítulo → objetivo → hallazgo → cómo conecta con el todo
3) Aportes:
- 5 contribuciones (teóricas/metodológicas/aplicadas)
4) Método:
- diagrama textual del pipeline
5) Resultados y evidencia:
- 6–10 bullets con magnitud/indicadores si hay
6) Limitaciones y trabajo futuro:
- 6 límites + 6 líneas futuras

Cierre:
- 1 abstract “de congreso” (150–220 palabras).`,
    thumbnail: "",
  },
  {
    id: "edu-res-032",
    title: "Resumen con enfoque ‘replicación’: pasos, materiales, recursos y riesgos",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Extrae todo lo necesario para replicar el estudio o experimento.",
    prompt: `Paper/texto: [PEGA AQUÍ]
Objetivo: replicar

Entrega:
1) Resumen (150–250 palabras).
2) Checklist de replicación:
- datos (fuente, tamaño, formato)
- variables (definición + medición)
- procedimiento paso a paso
- herramientas/softwares
- métricas de evaluación
3) “Unknowns”:
- 10 cosas que NO están claras y debes preguntar/decidir
4) Riesgos:
- 8 riesgos para replicar (sesgos, confusores, dependencias)
5) Propuesta de réplica:
- qué cambiarías (2–4 cambios) para probar robustez.`,
    thumbnail: "",
  },
  {
    id: "edu-res-033",
    title: "Resumen en formato ‘op-ed académico’: idea central con cautela y matices",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte un paper en una pieza argumentativa para público general sin perder rigor.",
    prompt: `Texto: [PEGA AQUÍ]
Audiencia: público general informado
Tono: claro, sin jerga, pero riguroso

Crea:
1) Resumen en formato op-ed (700–1000 palabras):
- hook
- problema
- qué encontró el paper
- qué NO significa (límites)
- implicaciones prácticas (sin exagerar)
- cierre con una pregunta potente
2) 10 frases “anti-humo” para no sobreafirmar
3) 5 analogías cuidadosas (con límites) para explicar el concepto`,
    thumbnail: "",
  },
  {
    id: "edu-res-034",
    title: "Resumen multi-audiencia: estudiante, profesor, investigador, ejecutivo",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Cuatro versiones del mismo contenido adaptadas a necesidades diferentes.",
    prompt: `Texto/paper: [PEGA AQUÍ]

Crea 4 resúmenes consistentes (sin inventar):
A) Estudiante (200–300 palabras, foco en aprender)
B) Profesor (200–300 palabras, foco en enseñar y evaluar)
C) Investigador (200–300 palabras, foco en método, gaps, replicación)
D) Ejecutivo (120–180 palabras, foco en implicación y decisión)

Luego:
- 12 términos clave con definición (glosario único para todos)
- 6 “puntos de confusión” y cómo aclararlos`,
    thumbnail: "",
  },
  {
    id: "edu-res-035",
    title: "Resumen para ‘plan de lectura’: qué leer primero, qué saltar, qué anotar",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Crea estrategia de lectura: dónde poner atención y cómo tomar notas.",
    prompt: `Paper/texto: [PEGA AQUÍ]
Tiempo disponible: [15/30/60/120 min]
Objetivo: [entender general / replicar / criticar / citar en tesis]

Entrega:
1) Resumen rápido (120–180 palabras).
2) Plan de lectura por tiempo:
- 15 min: qué secciones leer + qué anotar
- 30 min: …
- 60 min: …
- 120 min: …
3) Lista de 12 preguntas guía mientras leo.
4) Plantilla de notas: (problema, método, hallazgos, límites, citas útiles).`,
    thumbnail: "",
  },

  {
    id: "edu-res-036",
    title: "Resumen para ‘sistematización’: define categorías y clasifica hallazgos",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Crea categorías analíticas y clasifica los hallazgos del texto en ellas.",
    prompt: `Texto: [PEGA AQUÍ]
Meta: sistematizar para una revisión o informe

1) Propón 6–10 categorías analíticas relevantes al texto.
2) Resume el texto en bullets y asigna cada bullet a una categoría.
3) Para cada categoría:
- qué afirma el texto
- qué evidencia usa
- qué limitación aparece

Cierre:
- 5 “insights” transversales (que aparezcan al cruzar categorías)
- 5 preguntas futuras surgidas de la sistematización.`,
    thumbnail: "",
  },
  {
    id: "edu-res-037",
    title: "Resumen de “paper con matemáticas”: intuición + formalismo + interpretación",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Explica papers técnicos con ecuaciones: qué significan y qué implican realmente.",
    prompt: `Paper/extracto (incluye ecuaciones): [PEGA AQUÍ]
Nivel del lector: [intermedio/avanzado]

Entrega:
1) Resumen conceptual (200–300 palabras): qué problema y qué idea.
2) Ecuaciones clave (hasta 5):
- escribe la ecuación (si está)
- explica cada término en lenguaje natural
- qué supuesto implica
- cómo se usa en el argumento (resultado)
3) Interpretación:
- qué significa el resultado en la práctica
- qué NO significa (límites)
4) 5 preguntas de autoexamen con respuestas.`,
    thumbnail: "",
  },
  {
    id: "edu-res-038",
    title: "Resumen ‘con triada’: qué aporta, a quién le sirve, cuándo falla",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Resumen ultra útil: aporte, audiencia y límites operativos.",
    prompt: `Texto/paper: [PEGA AQUÍ]

Devuelve:
1) Resumen (200–280 palabras).
2) Qué aporta (5 bullets):
- teórico/metodológico/aplicado
3) A quién le sirve (4 perfiles) y cómo lo usaría cada uno.
4) Cuándo falla:
- 6 condiciones donde el resultado no aplica o se debilita
5) Qué haría yo:
- 3 ideas de extensión/uso en proyecto.

Cierre:
- 1 frase “si solo recuerdas una cosa”`,
    thumbnail: "",
  },
  {
    id: "edu-res-039",
    title: "Resumen orientado a ‘pregunta de examen’: genera 10 preguntas y claves",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte un texto en material evaluable: preguntas, respuestas y rúbrica.",
    prompt: `Texto: [PEGA AQUÍ]
Nivel: [universidad/posgrado]

Crea:
1) Resumen del texto (200–300 palabras).
2) 10 preguntas de examen:
- 4 comprensión
- 3 aplicación/transferencia
- 3 crítica/limitaciones
3) Respuestas modelo para cada pregunta (80–180 palabras)
4) Rúbrica breve para calificar (criterios por pregunta)

Cierre:
- 6 errores típicos de alumnos al estudiar este texto.`,
    thumbnail: "",
  },
  {
    id: "edu-res-040",
    title: "Resumen ‘evidence vs opinion’: separa hechos, inferencias y opiniones",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Separa niveles de afirmación para evitar confundir datos con interpretación.",
    prompt: `Texto: [PEGA AQUÍ]

Clasifica y resume en 3 capas:
1) HECHOS (qué se observa/dice con evidencia) — mínimo 8 bullets
2) INFERENCIAS (qué concluyen a partir de hechos) — mínimo 8 bullets
3) OPINIONES/INTERPRETACIONES — mínimo 6 bullets

Para cada bullet indica:
- qué parte del texto lo respalda (sección aproximada)
- qué tan fuerte es (alta/media/baja) y por qué

Cierre:
- 1 resumen final (180–240 palabras) que mantenga separación clara.`,
    thumbnail: "",
  },

  {
    id: "edu-res-041",
    title: "Resumen ‘para propuesta’: usa el paper para justificar tu proyecto",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte evidencias del texto en argumentos para una propuesta o grant.",
    prompt: `Texto/paper: [PEGA AQUÍ]
Mi proyecto/propuesta: [DESCRIBE EN 3–6 LÍNEAS]

Entrega:
1) Resumen del paper (150–220 palabras).
2) Cómo usarlo para justificar mi propuesta:
- 5 argumentos (evidencia → implicación → por qué mi proyecto es necesario)
3) Limitaciones al usarlo (3–5) para ser honesto.
4) Párrafo listo para pegar en “justificación” (180–260 palabras).
5) 5 frases alternativas (para no repetir estilo).`,
    thumbnail: "",
  },
  {
    id: "edu-res-042",
    title: "Resumen ‘para discusión de resultados’: conecta con teoría y literatura",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Útil para escribir discusión: implicaciones, mecanismos, comparación con literatura.",
    prompt: `Texto/paper: [PEGA AQUÍ]
Mi resultado o hipótesis: [ ]

Entrega:
1) Resumen del paper (180–240 palabras).
2) Mecanismos propuestos (3–6) y en qué evidencias se basan.
3) Cómo conecta con teoría:
- 3 marcos teóricos posibles o escuelas (si no hay, propón)
4) Cómo lo usaría en discusión:
- 6 frases “tipo discusión” (paráfrasis) conectando hallazgo→teoría→límite.
5) 4 advertencias para no sobreinterpretar.`,
    thumbnail: "",
  },
  {
    id: "edu-res-043",
    title: "Resumen ‘con checklist PRISMA-like’: qué reporta y qué no",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Check de reporte (especialmente para revisiones/estudios) para evaluar transparencia.",
    prompt: `Texto/paper: [PEGA AQUÍ]
Tipo: [revisión/estudio]

Crea un checklist “PRISMA-like” adaptado:
- 20 ítems (preguntas de reporte: datos, método, selección, análisis, sesgos)

Luego evalúa el texto:
- Para cada ítem marca: Sí / No / Parcial
- Justifica en 1 línea (paráfrasis)
- Señala 8 cosas críticas que faltan (si faltan)

Cierre:
- Resumen del impacto de esas faltas en la confianza del resultado.`,
    thumbnail: "",
  },
  {
    id: "edu-res-044",
    title: "Resumen para ‘notas Zettelkasten’: 8 fichas atómicas + enlaces",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Transforma un texto en fichas atómicas enlazables (Zettelkasten).",
    prompt: `Texto: [PEGA AQUÍ]
Tema/archivo Zettelkasten: [ ]

Crea 8 notas atómicas:
Para cada nota:
- Título corto
- Idea única (80–140 palabras)
- Ejemplo breve
- “Enlaces” a otras notas (2–3 títulos sugeridos)
- Tags (3–6)
- Pregunta que abre (para seguir pensando)

Cierre:
- Una “nota índice” (map of content) de 6–10 bullets conectando las 8 notas.`,
    thumbnail: "",
  },
  {
    id: "edu-res-045",
    title: "Resumen ‘de consistencia’: revisa si conclusiones siguen de resultados",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Evalúa alineación: pregunta→método→resultados→conclusión; detecta sobreafirmación.",
    prompt: `Texto/paper: [PEGA AQUÍ]

Haz:
1) Resumen de 180–240 palabras.
2) Alineación:
- Pregunta/hipótesis (¿cuál es exactamente?)
- Método (¿puede responderla?)
- Resultados (¿qué muestran?)
- Conclusiones (¿qué afirman?)

3) Señala 6 posibles sobreafirmaciones:
- la afirmación
- por qué no se sostiene completamente
- cómo reescribirla con cautela

Cierre:
- 5 recomendaciones para mejorar alineación en una versión revisada.`,
    thumbnail: "",
  },

  {
    id: "edu-res-046",
    title: "Resumen en formato ‘ficha de lectura’: cita, idea clave, uso, crítica, preguntas",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Formato de ficha de lectura completo para tu archivo académico.",
    prompt: `Texto/paper: [PEGA AQUÍ]
Referencia (si la tienes): [autor, año, título]

Devuelve una ficha:
- Referencia
- Idea clave (1–2 frases)
- Resumen (200–300 palabras)
- 5 conceptos clave (definición + ejemplo)
- 3 citas para usar (paráfrasis, con sección)
- 3 críticas (metodológicas o conceptuales)
- 5 preguntas que me quedan
- Cómo lo conecto con mi tema (120–180 palabras)`,
    thumbnail: "",
  },
  {
    id: "edu-res-047",
    title: "Resumen ‘para alumnos’: explicación clara + analogías + ejercicios",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Versión pedagógica: para enseñar contenido académico sin perder rigor.",
    prompt: `Texto: [PEGA AQUÍ]
Nivel del alumno: [secundaria/universidad]
Tiempo: [30/60/90 min]

Crea:
1) Resumen didáctico (250–400 palabras) con ejemplos.
2) 5 analogías cuidadosas (y sus límites).
3) 6 confusiones típicas (y cómo corregirlas).
4) 8 ejercicios (con solución breve) sobre lo leído.
5) 10 preguntas de quiz (con respuestas).`,
    thumbnail: "",
  },
  {
    id: "edu-res-048",
    title: "Resumen de artículo con datos: extrae métricas, tamaños de efecto y relevancia práctica",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Convierte números en comprensión: magnitud, incertidumbre, importancia real.",
    prompt: `Paper/extracto con datos: [PEGA AQUÍ]

Entrega:
1) Resumen (180–260 palabras).
2) Extracción cuantitativa:
- métricas reportadas (lista)
- tamaños de efecto (si hay)
- significancia / incertidumbre (si hay)
- comparaciones clave (baseline vs método)
3) Interpretación práctica:
- qué cambia “en la realidad” con esos números
- cuándo sería irrelevante aunque sea significativo
4) 5 preguntas para “auditar” números (¿cómo midieron?, ¿sesgos?, etc.).`,
    thumbnail: "",
  },
  {
    id: "edu-res-049",
    title: "Resumen ‘con dos voces’: qué diría un defensor vs un crítico",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Genera dos perspectivas para ver fortalezas y debilidades sin sesgo.",
    prompt: `Texto/paper: [PEGA AQUÍ]

Crea:
1) Resumen neutral (180–240 palabras).
2) Voz defensora:
- 6 bullets de lo mejor (novedad, método, claridad, utilidad)
- 1 párrafo de defensa (120–180 palabras)
3) Voz crítica:
- 6 bullets de lo más débil (sesgos, límites, sobreafirmación)
- 1 párrafo crítico (120–180 palabras)
4) Síntesis:
- cuándo sería válido usar este trabajo y con qué cautelas

Cierre:
- 5 recomendaciones concretas para mejorar el paper.`,
    thumbnail: "",
  },
  {
    id: "edu-res-050",
    title: "Paquete completo de resúmenes: abstract + IMRaD + ficha + preguntas + plan de estudio",
    area: "Educación & Formación",
    category: "Resúmenes Académicos",
    summary:
      "Un mega-output: varias formas de resumen + herramientas para estudiar y discutir.",
    prompt: `Texto/paper: [PEGA AQUÍ]
Nivel: [universidad/posgrado]
Objetivo: [estudio / revisión / tesis]

Entrega:
1) Abstract técnico (150–250 palabras).
2) Resumen IMRaD (400–700 palabras).
3) Ficha de lectura (referencia, idea clave, uso, críticas, preguntas).
4) Glosario de 15 términos (definición + ejemplo).
5) 12 preguntas de discusión (con 6 “difíciles”).
6) Autoexamen:
- 10 MCQ + 5 abiertas
- respuestas correctas
7) Plan de estudio 7 días:
- qué repasar cada día
- cómo evaluar progreso
- qué hacer si fallo en X.`,
    thumbnail: "",
  },
];
