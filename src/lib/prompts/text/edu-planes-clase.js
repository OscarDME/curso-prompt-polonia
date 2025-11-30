// src/lib/prompts/text/edu-planes-clase.js

export const textPromptsEduPlanesClase = [
  {
    id: "edu-plan-001",
    title: "Plan de clase completo (60 min) con objetivos, actividades, evaluación y cierre",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Crea un plan de 60 minutos con momentos, materiales, guía docente y evaluación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel educativo: [primaria/secundaria/bachillerato/universidad/corporativo]
Tiempo total: 60 minutos
Tamaño del grupo: [ ]
Contexto (presencial/online/híbrido): [ ]
Conocimientos previos: [ ]
Restricciones (sin internet, pocos recursos, etc.): [ ]

Crea un plan de clase hiper detallado con:
1) Objetivos de aprendizaje (5) usando verbos medibles (Bloom).
2) Criterios de éxito (qué evidencia veré para saber que lo lograron).
3) Agenda por minutos (min 0–60) con:
   - qué hace el docente (guion breve)
   - qué hace el alumno
   - recursos/materiales
   - instrucciones exactas (texto literal para decir en clase)
   - posibles errores/preguntas y cómo responderlas
4) Actividad central (aprendizaje activo):
   - dinámica paso a paso
   - roles (si aplica)
   - ejemplos y contraejemplos
5) Evaluación formativa:
   - 6 preguntas rápidas + respuestas esperadas
   - checklist de observación
6) Cierre:
   - síntesis en 3 bullets
   - “exit ticket” (3 preguntas) con criterios de corrección
7) Tarea / extensión (2 opciones: fácil y desafiante).
8) Adaptaciones:
   - para estudiantes rezagados
   - para avanzados
   - para necesidades diversas (atención, lenguaje, etc.).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-002",
    title: "Plan de clase de 90 min tipo seminario (discusión profunda) + guía de preguntas",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Seminario con lecturas, preguntas, debate estructurado, y rúbrica de participación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [universidad/posgrado/corporativo avanzado]
Duración: 90 min
Lectura base (si existe): [pega/describe]

Diseña un seminario completo:
1) Objetivos (4–6) y conceptos clave (10).
2) Pre-clase:
   - 3 tareas de preparación (lectura guiada)
   - 8 preguntas de lectura (2 fáciles, 4 medias, 2 difíciles)
3) Agenda por minutos (0–90):
   - apertura (5–10): framing, expectativas
   - discusión guiada (40–50): secuencia de preguntas con “repreguntas”
   - actividad (20): debate por equipos / fishbowl / think-pair-share
   - cierre (10): takeaways + síntesis
4) Banco de preguntas:
   - 12 preguntas socráticas
   - 6 preguntas “trampa” para ver comprensión real
   - 6 preguntas de aplicación a casos reales
5) Evaluación:
   - rúbrica de participación (4 criterios x 4 niveles)
   - exit ticket (3) y cómo calificarlo
6) Plan B:
   - si el grupo no participa, qué haces (estrategias concretas).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-003",
    title: "Plan de clase flipped classroom (clase invertida) con microlección y práctica",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Diseño invertido: pre-clase, clase práctica, y post-clase con seguimiento.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración en clase: 50–70 min
Plataforma: [Google Classroom/Notion/Moodle/Ninguna]

Crea un plan invertido:
1) Pre-clase (20–40 min):
   - microlección (guion + bullets)
   - lectura corta (resumen de 250 palabras)
   - mini-quiz de 8 preguntas (con respuestas)
2) En clase (agenda por minutos):
   - warm-up 5 min
   - práctica guiada 15 min (con ejemplo resuelto)
   - trabajo en equipos 25 min (casos)
   - cierre 10 min (retro + dudas)
3) Post-clase:
   - tarea de consolidación (2 niveles)
   - reflexión (pregunta metacognitiva)
   - criterio de revisión (rúbrica simple)
4) Señala:
   - errores típicos
   - cómo detectar quién no entendió y cómo re-enseñar rápido.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-004",
    title: "Plan de clase basado en proyectos (PBL) de 2 semanas: entregables y rúbricas",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Proyecto completo: pregunta guía, fases, entregables, rúbricas y evaluación.",
    prompt: `Tema/problema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 2 semanas
Sesiones: [cuántas y de cuántos minutos]
Recursos disponibles: [ ]

Diseña un PBL completo:
1) Driving Question (pregunta guía) + criterios de un buen resultado.
2) Producto final: qué entregan (formato, requisitos, ejemplo).
3) Fases (con calendario):
   - investigación
   - diseño
   - prototipo/borrador
   - feedback
   - entrega final
4) Entregables por fase (con checklist).
5) Rúbricas:
   - rúbrica del producto final (4 criterios x 4 niveles)
   - rúbrica de proceso (participación, iteración, evidencia)
6) Mini-lecciones “just-in-time” (5 microlecciones) para apoyar.
7) Diferenciación:
   - roles por equipo
   - apoyo para rezagados
   - extensión para avanzados
8) Evaluación:
   - autoevaluación + coevaluación (formularios + criterios)
   - cómo evitar free-riding (mecanismos).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-005",
    title: "Plan de clase para habilidades: pensamiento crítico (con casos y falacias)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Clase diseñada para pensamiento crítico: casos, falacias, debate y evaluación.",
    prompt: `Habilidad objetivo: pensamiento crítico
Contexto/tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–90 min

Crea un plan detallado con:
1) Objetivos (Bloom) y criterios de éxito.
2) Mini-lección (10 min): conceptos clave (falacias, evidencia, inferencia).
3) Actividad central (30–40 min):
   - 3 mini-casos con argumentos
   - alumnos deben identificar: afirmación, evidencia, supuesto, falacia, conclusión
   - guía de trabajo paso a paso
4) Debate estructurado:
   - formato (pro/contra)
   - reglas y turnos
   - preguntas del moderador
5) Evaluación:
   - rúbrica (claridad, evidencia, lógica, respeto)
   - exit ticket (3)
6) Material docente:
   - guion de frases para redirigir discusiones y corregir falacias sin humillar.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-006",
    title: "Plan de clase ‘aprendizaje activo’ (peer instruction) con preguntas y revoto",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Implementa peer instruction: preguntas conceptuales, discusión y revoto.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 50–75 min

Diseña clase estilo Peer Instruction:
1) Objetivos (4–6).
2) Warm-up: 5 min (pregunta detonante).
3) Ciclo PI (repetir 5 veces):
   - pregunta conceptual (A–D) con distractores reales
   - 1er voto
   - discusión por parejas (2–3 min) con prompt de conversación
   - 2do voto
   - explicación docente (qué decir y qué NO decir)
4) Incluye 10 preguntas PI listas (con respuestas y explicación).
5) Estrategia si el revoto empeora las respuestas (qué haces).
6) Evaluación rápida al final (exit ticket + rúbrica mínima).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-007",
    title: "Plan de clase online (Zoom/Meet) con interacción real y anti-fatiga",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Clase online accionable con dinámicas, pausas, breakout rooms y evaluación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min
Herramientas: [Zoom/Meet/Miro/Jamboard/Ninguna]

Crea un plan online:
1) Normas y dinámica (cámara, chat, participación) con guion de 60 segundos.
2) Agenda por minutos (0–60) incluyendo:
   - microsegmentos de 6–10 min
   - pausas activas (2)
   - actividad breakout (1–2 rondas)
   - encuesta/quiz en vivo (10 preguntas)
3) Materiales:
   - diapositivas: estructura sugerida (8–10)
   - plantilla de trabajo del alumno (texto)
4) Gestión de participación:
   - cómo llamar a alumnos sin incomodar
   - estrategias para silencios
5) Evaluación:
   - evidencia mínima (captura, respuesta, mini tarea)
   - rubrica express para calificar en 5 min.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-008",
    title: "Plan de clase con evaluación auténtica: producto real + audiencia real",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Diseña evaluación auténtica: trabajo aplicable y rúbricas con criterios reales.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Producto auténtico deseado: [reporte, tutorial, propuesta, demo, etc.]
Audiencia real: [equipo, clase, comunidad, cliente simulado]
Duración: [1 clase / 1 semana]

Crea:
1) Objetivos y criterios del producto (requisitos obligatorios).
2) Proceso:
   - fases con tiempos
   - puntos de control (checkpoints)
3) Rúbricas:
   - calidad técnica
   - claridad/comunicación
   - evidencia/justificación
   - iteración/mejora
4) Retroalimentación:
   - guía de feedback (sándwich NO; usar “impacto + evidencia + siguiente paso”)
   - 2 rondas de feedback
5) Antiplagio:
   - cómo diseñar para que sea difícil copiar
   - evidencia de proceso requerida.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-009",
    title: "Plan de secuencia didáctica (3 clases) con progresión y evaluación",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Tres sesiones conectadas: introducción, práctica, integración con evaluación final.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración por sesión: [50/60/90]
Objetivo final: [ ]

Diseña una secuencia de 3 clases:
CLASE 1 (introducción):
- objetivos, agenda por minutos, activación de conocimientos previos
- mini-actividad + evaluación formativa

CLASE 2 (práctica):
- práctica guiada + trabajo en equipos
- banco de ejercicios escalonados + soluciones

CLASE 3 (integración):
- caso integrador / proyecto corto
- evaluación sumativa + rúbrica

Además:
- plan de materiales
- glosario clave
- errores típicos por clase + cómo corregirlos.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-010",
    title: "Plan de clase tipo laboratorio: hipótesis, experimento, análisis y reporte",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Clase-lab: diseño experimental, registro de datos y reporte con rúbrica.",
    prompt: `Tema/laboratorio: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: [90–120 min]
Materiales disponibles: [ ]

Diseña un laboratorio:
1) Objetivos y seguridad (si aplica).
2) Hipótesis y variables:
- IV, DV, controles
- predicciones
3) Procedimiento paso a paso con tiempos.
4) Plantilla de recolección de datos (tabla en texto).
5) Análisis:
- qué cálculos/herramientas usar
- cómo interpretar resultados
6) Reporte final:
- estructura (IMRaD simplificado)
- rúbrica de calificación
7) Errores comunes y troubleshooting.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-011",
    title: "Plan de clase ‘microenseñanza’: enseñar un concepto difícil en 15 minutos",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Diseña una microclase súper efectiva: explicación + ejemplo + mini-check.",
    prompt: `Concepto difícil: [ESCRIBE AQUÍ]
Nivel: [ ]
Tiempo: 15 minutos

Diseña microclase con:
1) Objetivo (1) y evidencia de éxito (1).
2) Hook (30s) + analogía (1).
3) Explicación en 3 pasos (guion literal).
4) Ejemplo trabajado (paso a paso).
5) Mini-check (3 preguntas) con respuestas y por qué.
6) Error típico + cómo prevenirlo en una frase.
7) “One-sentence summary” para que el alumno lo memorice.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-012",
    title: "Plan de clase con UDL (Diseño Universal): múltiples accesos y múltiples evidencias",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Plan inclusivo UDL con opciones de acceso, participación y demostración.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min

Crea un plan UDL:
1) Objetivos claros (3–5) + criterios de éxito.
2) Múltiples medios de representación:
- 3 formas de explicar el contenido (texto, visual descrito, ejemplo)
3) Múltiples medios de acción/expresión:
- 3 formas de demostrar aprendizaje (quiz, mini-proyecto, explicación oral)
4) Múltiples medios de compromiso:
- 3 opciones de actividad según intereses
5) Agenda por minutos (0–60) con alternativas.
6) Acomodaciones:
- atención
- lectura/escritura
- idioma
- ansiedad al participar
7) Evaluación:
- rúbrica flexible + cómo calificar de forma justa.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-013",
    title: "Plan de clase para formación corporativa (habilidad laboral) con práctica y medición",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Entrenamiento corporativo: objetivos, simulaciones, KPI y transferencia al trabajo.",
    prompt: `Habilidad laboral: [ESCRIBE AQUÍ]
Rol de participantes: [ ]
Duración: [60/90/120]
Contexto: [equipo comercial/soporte/operaciones/etc.]

Diseña sesión:
1) Objetivos (4) medibles y alineados a KPI.
2) Agenda por minutos con microsegmentos.
3) Simulaciones:
- 2 role-plays con guion, roles, criterios
- checklist de observación
4) Casos reales:
- 3 casos típicos de la empresa (si no hay, inventa realistas)
5) Evaluación:
- pretest y posttest (8 preguntas cada uno)
- plan de seguimiento 7 días
6) Transferencia:
- “acciones del lunes”: 5 acciones concretas
- plantilla de retro semanal.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-014",
    title: "Plan de clase para enseñar con ejemplos y contraejemplos (conceptos con límites)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Diseño centrado en límites: ejemplos, contraejemplos, y casos borde.",
    prompt: `Tema/concepto: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min

Crea:
1) Objetivos (4) y criterios de éxito.
2) 6 ejemplos (de fácil a complejo) con explicación.
3) 6 contraejemplos (donde NO aplica) con explicación del supuesto violado.
4) Actividad:
- grupos clasifican casos como “aplica / no aplica / depende”
- guía de discusión y justificación
5) Evaluación formativa:
- 10 preguntas rápidas (A–D) con respuestas
6) Cierre:
- checklist de supuestos antes de aplicar el concepto.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-015",
    title: "Plan de clase para aprendizaje por problemas (PBL corto): problema realista en 1 sesión",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "PBL en una clase: problema, investigación rápida, solución y reflexión.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Duración: 70–90 min
Nivel: [ ]

Diseña una clase PBL corta:
1) Problema realista (descripción 120–200 palabras) con datos iniciales.
2) Objetivos de aprendizaje (5).
3) Agenda por minutos:
- comprensión del problema
- generación de hipótesis
- investigación rápida (recursos)
- propuesta de solución
- presentación
- reflexión
4) Materiales:
- hoja de trabajo (preguntas guiadas)
- plantilla de solución (criterios)
5) Evaluación:
- rúbrica de solución (4 criterios x 4 niveles)
- autoevaluación rápida
6) Debrief:
- qué aprendieron
- qué harían distinto con más información.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-016",
    title: "Plan de clase con gamificación (misiones, puntos, narrativa) sin perder rigor",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Gamifica actividades: misiones y progreso con evaluación real.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min
Narrativa: [sci-fi/fantasía/empresa/misterio]

Crea un plan gamificado:
1) Historia marco (1 párrafo) + misión principal.
2) 3 misiones por dificultad (fácil/medio/difícil) alineadas a objetivos.
3) Sistema de puntos claro (qué puntúa y qué no).
4) Agenda por minutos y reglas.
5) Materiales imprimibles (en texto):
- tarjetas de misión
- hoja de registro
6) Evaluación (rubrica) para que el juego no sea “solo juego”.
7) Inclusión:
- cómo evitar que gane solo el más rápido/extrovertido.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-017",
    title: "Plan de clase para enseñar a escribir (estructura, ejemplos, práctica y rúbrica)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Clase para escritura académica o técnica: estructura, borrador y feedback con rúbrica.",
    prompt: `Tipo de texto: [ensayo/abstract/reporte/correo formal]
Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 90 min

Diseña:
1) Objetivos (5).
2) Mini-lección:
- estructura del texto
- errores típicos
- ejemplos buenos/malos (2 de cada)
3) Taller de escritura:
- plantilla de borrador (secciones + prompts)
- tiempo por fase (planeación, borrador, revisión)
4) Feedback:
- guía de revisión por pares (checklist)
- 2 rondas (macro y micro)
5) Rúbrica:
- estructura, claridad, evidencia, estilo, corrección
6) Cierre:
- plan de mejora individual (3 acciones por estudiante).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-018",
    title: "Plan de clase para lectura académica (cómo leer papers) con práctica real",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Enseña a leer papers: scanning, preguntas guía, claim chart y discusión.",
    prompt: `Disciplina: [ESCRIBE AQUÍ]
Paper a usar (si tienes): [pega link o extracto]
Nivel: [universidad/posgrado]
Duración: 75–90 min

Diseña clase:
1) Objetivos: (leer rápido, identificar tesis, método, hallazgos, límites).
2) Estrategia de lectura:
- 3 pasadas (5–7 min, 10–15 min, 20–30 min) con instrucciones
3) Actividad:
- construir Claim Chart (tabla) en equipos
- detectar 3 debilidades metodológicas
4) Debate:
- 8 preguntas guía
5) Evaluación:
- mini-quiz (10 preguntas) con respuestas
- exit ticket (3) + rúbrica mínima
6) Materiales:
- plantilla de notas de lectura (texto).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-019",
    title: "Plan de clase: preparar examen (estrategias + práctica + metacognición)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Sesión para mejorar rendimiento: técnica de estudio, práctica y revisión de errores.",
    prompt: `Materia/tema: [ESCRIBE AQUÍ]
Tipo de examen: [MCQ/ensayo/problemas]
Nivel: [ ]
Duración: 60–90 min

Diseña:
1) Objetivos y criterios.
2) Mini-lección (10–15 min):
- práctica espaciada
- intercalado
- active recall
3) Práctica:
- 15 preguntas (o 10 problemas) con soluciones
- cronómetro y estrategia de tiempo
4) Análisis de errores:
- plantilla para clasificar errores (concepto/supuesto/procedimiento)
- re-enseñanza rápida (cómo corregir cada tipo)
5) Cierre:
- plan individual de 7 días para el examen (día a día).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-020",
    title: "Plan de clase con stations/rotación (4 estaciones) para práctica intensiva",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Rotación por estaciones: práctica variada y evaluación rápida por estación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–80 min
Número de estaciones: 4

Diseña stations:
1) Estación 1: fundamentos (ejercicios cortos) — 8 ítems
2) Estación 2: aplicación (casos) — 3 casos
3) Estación 3: errores comunes (diagnóstico) — 6 ítems
4) Estación 4: desafío (nivel alto) — 4 ítems

Incluye:
- instrucciones exactas en cada estación
- tiempo por estación + rotación
- hoja de respuestas
- guía docente (qué observar)
- mini-evaluación por estación (rubrica simple)
Cierre:
- síntesis y exit ticket (3).`,
    thumbnail: "",
  },

  {
    id: "edu-plan-021",
    title: "Plan de clase con evaluación diferenciada (3 niveles) sin injusticia",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Misma competencia, tres niveles de tareas; rúbrica común para calificar justo.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–90 min

Crea:
1) Competencia única (qué debe poder hacer el alumno).
2) Tarea en 3 niveles:
- Nivel 1 (apoyo): guiada
- Nivel 2 (estándar): independiente
- Nivel 3 (reto): extensión/transferencia
3) Rúbrica única (criterios comunes) que aplique a los 3 niveles.
4) Agenda por minutos:
- mini-lección
- trabajo
- revisión
- cierre
5) Cómo asignar niveles sin estigmatizar.
6) Cómo mover alumnos de nivel durante la clase (estrategia).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-022",
    title: "Plan de clase para enseñar con analogías (y sus límites) + evaluación",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Analogías bien hechas: cuándo sirven, cuándo confunden y cómo evaluar comprensión.",
    prompt: `Concepto abstracto: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 50–60 min

Diseña:
1) 5 analogías distintas (de vida diaria) explicando:
- qué corresponde a qué
- dónde se rompe la analogía (límite)
2) Secuencia didáctica:
- analogía 1 → formalización → contraejemplo → analogía 2
3) Actividad:
- alumnos crean su analogía y la critican con límites
4) Evaluación:
- quiz de 10 preguntas
- rúbrica para evaluar analogías
5) Cierre:
- “definición formal” final (1–2 frases) para no quedarse solo con analogía.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-023",
    title: "Plan de clase para resolución de problemas (modelado docente → práctica guiada → independiente)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Estructura clásica efectiva para problemas: I do / We do / You do.",
    prompt: `Tema de problemas: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 70–90 min

Crea:
1) Objetivos y criterios.
2) I DO (modelado docente):
- 1 problema ejemplo resuelto con explicación verbal (guion)
3) WE DO (práctica guiada):
- 2 problemas con pasos guiados + preguntas al grupo
4) YOU DO (práctica independiente):
- 6 problemas escalonados (fácil→difícil) con respuestas
5) Diferenciación:
- pistas para quien se atasca
- desafío extra para avanzados
6) Evaluación:
- checklist de proceso
- exit ticket con 2 problemas cortos.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-024",
    title: "Plan de clase para ‘enseñar con errores’: usar errores para aprender (no para castigar)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Clase diseñada alrededor de errores típicos, con corrección respetuosa y aprendizaje profundo.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min

Diseña:
1) Objetivos (4–6).
2) Lista de 8 errores típicos del tema (con ejemplo).
3) Actividad central:
- presentas soluciones erróneas
- alumnos diagnostican el error (concepto/supuesto/procedimiento)
- reescriben la solución correcta
4) Guion docente:
- frases para normalizar el error
- cómo corregir sin humillar
5) Evaluación:
- 10 preguntas de diagnóstico (A–D) con respuestas
- exit ticket: “explica 1 error y cómo evitarlo”
6) Cierre:
- checklist anti-error (10 items).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-025",
    title: "Plan de clase interdisciplinaria: conecta 2 materias con un caso integrador",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Integra dos áreas: objetivos cruzados, actividad central y evaluación integrada.",
    prompt: `Materia A: [ ]
Materia B: [ ]
Tema integrador: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 90 min

Crea:
1) Objetivos de A (3) y de B (3) + objetivos integrados (3).
2) Caso integrador (150–250 palabras).
3) Actividad:
- equipos resuelven el caso aplicando ambos marcos
- guía paso a paso
4) Producto final:
- formato + criterios
5) Rúbrica integrada (4 criterios x 4 niveles).
6) Cierre:
- reflexión: qué aportó A, qué aportó B, y qué aprendí integrando.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-026",
    title: "Plan de clase para tutoría 1:1 (diagnóstico → enseñanza → práctica → plan personal)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Formato tutoría: detecta brechas, enseña, practica y deja plan de estudio.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel del estudiante: [ ]
Tiempo: 45–60 min
Objetivo (examen/proyecto): [ ]

Crea un plan de tutoría:
1) Diagnóstico (10 min):
- 8 preguntas rápidas con respuestas esperadas
- cómo interpretar fallos
2) Enseñanza focal (15 min):
- explicación en 3 pasos + ejemplo fuerte
3) Práctica (15–20 min):
- 5 ejercicios escalonados + soluciones
- pistas graduadas (hint 1/2/3) por ejercicio
4) Cierre (5 min):
- resumen del estudiante (qué debe decir)
- plan de 7 días (día a día)
- métrica simple para medir progreso.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-027",
    title: "Plan de unidad (4 semanas): objetivos, secuencia, evaluaciones y materiales",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Unidad completa: semana a semana, con evaluación formativa y sumativa.",
    prompt: `Tema/unidad: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 4 semanas
Sesiones por semana: [ ]
Duración por sesión: [ ]

Diseña la unidad:
1) Objetivos generales (6) + mapa de conceptos.
2) Semana 1–4:
- objetivos específicos
- actividades clave
- evaluación formativa
- tarea
3) Evaluación sumativa:
- tipo (examen/proyecto/portafolio)
- rúbrica y criterios
4) Materiales:
- lecturas, videos, actividades
- versiones con recursos bajos (low-tech)
5) Diferenciación:
- apoyo y extensión
6) Riesgos:
- dónde suelen atascarse y cómo prevenirlo.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-028",
    title: "Plan de clase con aprendizaje cooperativo (roles, interdependencia y coevaluación)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Cooperativo real: roles, accountability y coevaluación para evitar free-riding.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–90 min
Tamaño de equipos: 3–5

Crea:
1) Objetivos y criterios.
2) Roles por equipo (4–5 roles) con responsabilidades claras.
3) Actividad cooperativa:
- producto final
- pasos
- interdependencia positiva (qué obliga a colaborar)
4) Accountability:
- evidencia individual + evidencia grupal
- coevaluación (formato + criterios)
5) Rúbrica:
- calidad del producto
- colaboración (criterios observables)
6) Plan B:
- qué haces si hay conflicto o un alumno no participa.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-029",
    title: "Plan de clase para evaluación oral: entrenamiento + rúbrica + preguntas",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Preparación para examen oral: práctica guiada, preguntas difíciles y rúbrica.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min

Diseña:
1) Objetivos (4–5).
2) Mini-lección:
- cómo estructurar una respuesta oral (plantilla en 4 pasos)
3) Banco de preguntas:
- 12 preguntas (de fácil a difícil)
- 6 repreguntas “para profundizar”
- respuestas modelo (resumen)
4) Práctica:
- dinámica por parejas
- cronómetro
- checklist de feedback inmediato
5) Rúbrica:
- claridad, rigor, ejemplos, límites, comunicación
6) Cierre:
- plan de mejora individual (3 acciones).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-030",
    title: "Plan de clase para cierre de unidad (repaso inteligente + examen de práctica + plan)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Cierre: repaso con intercalado, examen de práctica y plan de consolidación.",
    prompt: `Unidad/tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 90 min

Crea:
1) Diagnóstico rápido (10 min): 12 preguntas (A–D) con respuestas.
2) Repaso inteligente (30 min):
- intercalado de subtemas (cómo alternar)
- mini-explicaciones de 6 confusiones típicas
3) Examen de práctica (30 min):
- 20 preguntas (o 10 problemas) con clave
4) Revisión de errores (15 min):
- plantilla para clasificar errores (concepto/supuesto/procedimiento)
- re-enseñanza rápida por tipo
5) Cierre (5 min):
- plan de 7 días post-unidad + métricas.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-031",
    title: "Plan de clase con evaluación por portafolio (evidencias, criterios, calendario)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Diseña un portafolio: evidencias, calendario de entregas y rúbricas claras.",
    prompt: `Tema/curso: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración del portafolio: [2–6 semanas]

Crea:
1) Qué es el portafolio y qué evidencia debe incluir (6–10 evidencias).
2) Calendario de entregas y checkpoints (semanal).
3) Rúbrica:
- calidad de evidencias
- reflexión
- iteración/mejora
- presentación/claridad
4) Plantillas:
- ficha de evidencia (qué hice, por qué, qué aprendí, siguiente mejora)
- checklist de revisión
5) Cómo evaluar de forma justa:
- criterios mínimos
- cómo evitar “relleno”
- cómo manejar retrasos y revisiones.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-032",
    title: "Plan de clase para enseñar ‘metacognición’: cómo estudiar y monitorear comprensión",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Sesión para aprender a aprender: monitoreo, diarios de estudio y estrategias.",
    prompt: `Materia/tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min

Diseña:
1) Objetivos y criterios.
2) Mini-lección (10–12 min):
- ilusión de competencia
- active recall
- spaced repetition
- intercalado
3) Actividad:
- alumnos hacen un mini-test
- predicen su puntaje (calibración)
- comparan y ajustan estrategia
4) Herramientas:
- plantilla de diario de estudio (texto)
- checklist de “¿realmente lo entiendo?”
5) Cierre:
- plan de estudio 10 días (con horarios y métricas).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-033",
    title: "Plan de clase ‘debate con evidencia’: investigación rápida + argumentación + rúbrica",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Debate basado en evidencia: roles, investigación rápida y evaluación rigurosa.",
    prompt: `Tema debatible: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 80–90 min

Crea:
1) Objetivos (argumentar con evidencia, refutar, reconocer límites).
2) Roles: pro/contra/jueces/verificadores.
3) Investigación rápida:
- preguntas guía
- cómo evaluar fuentes (rúbrica simple)
4) Debate:
- estructura con tiempos (apertura, argumentos, refutaciones, cierre)
- guion de moderación
5) Evidencia:
- plantilla para registrar claim→evidence→warrant
6) Evaluación:
- rúbrica (evidencia, lógica, claridad, respeto)
- auto y coevaluación
7) Cierre:
- reflexión: qué cambió en su postura y por qué.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-034",
    title: "Plan de clase ‘aprendizaje por diseño’: construir algo (artefacto) para entender concepto",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Diseña construyendo: crear un artefacto para interiorizar el concepto.",
    prompt: `Concepto/tema: [ESCRIBE AQUÍ]
Artefacto a construir: [modelo, infografía, simulación, mapa, etc.]
Nivel: [ ]
Duración: 60–90 min

Crea:
1) Objetivos y criterios del artefacto.
2) Materiales y restricciones.
3) Agenda por minutos:
- mini-lección
- diseño/boceto
- construcción
- revisión
- mejora
- presentación
4) Plantilla de diseño (preguntas guía).
5) Rúbrica del artefacto (4 criterios x 4 niveles).
6) Cierre:
- conexión explícita: qué parte del artefacto representa qué concepto
- 3 preguntas para transferir el aprendizaje.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-035",
    title: "Plan de clase ‘evaluación formativa continua’: 6 checks durante la sesión",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Inserta checks formativos cada pocos minutos: preguntas, mini-tareas y corrección rápida.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min

Diseña una clase con 6 puntos de evaluación formativa:
- Check #1 (min 5)
- Check #2 (min 12)
- Check #3 (min 20)
- Check #4 (min 32)
- Check #5 (min 45)
- Check #6 (min 55)

Para cada check:
- formato (pregunta, mini-ejercicio, votación, explicación en 1 frase)
- respuesta esperada
- qué haría el docente si 30% falla vs si 70% falla (ramificación)
Además:
- objetivos, agenda por minutos y cierre con exit ticket.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-036",
    title: "Plan de clase para estudiantes con baja motivación: relevancia, autonomía y logro rápido",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Diseño motivacional: relevancia, elección, wins rápidos y clima de clase.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min
Problema: baja motivación / apatía / resistencia

Crea un plan:
1) Hook basado en relevancia (caso real) + guion.
2) Autonomía:
- 3 opciones de actividad (misma competencia)
3) Logro rápido:
- mini-tarea de 5 min con “victoria”
4) Actividad central:
- dinámica colaborativa con roles
5) Feedback:
- frases y técnicas para reforzar progreso real
6) Evaluación:
- evidencia mínima y exit ticket simple
7) Cierre:
- “por qué esto importa” en 1 minuto (guion).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-037",
    title: "Plan de clase para enseñar conceptos abstractos: concreto→representación→abstracción",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Secuencia CRA: concretos, representaciones y abstracción con evaluación.",
    prompt: `Concepto abstracto: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min

Diseña usando CRA:
1) Concreto (15 min):
- actividad manipulativa o simulada (sin materiales costosos)
2) Representación (20 min):
- diagramas descritos + ejemplos
3) Abstracción (15 min):
- definición formal + ejercicios
4) Evaluación formativa:
- 10 preguntas (mezcla)
5) Diferenciación:
- apoyo y extensión
6) Cierre:
- síntesis de 3 pasos para recordar el concepto.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-038",
    title: "Plan de clase para recuperar rezago (remediación) con diagnóstico y microgrupos",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Remediación: diagnóstico, microgrupos por brecha y evidencia de mejora.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–90 min

Crea:
1) Diagnóstico inicial (10 min):
- 12 ítems con respuestas
- cómo agrupar alumnos según resultados
2) Microgrupos:
- Grupo A (brecha 1): mini-lección + 4 ejercicios
- Grupo B (brecha 2): mini-lección + 4 ejercicios
- Grupo C (brecha 3): mini-lección + 4 ejercicios
3) Rotación o trabajo paralelo:
- instrucciones exactas
- qué hace el docente en cada minuto
4) Re-evaluación final (10 min):
- 8 ítems similares
- interpretación: ¿mejoró?
5) Plan de seguimiento:
- tareas de 7 días (microtareas).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-039",
    title: "Plan de clase con ‘story-based learning’: enseñar el tema con una historia",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Aprendizaje narrativo: historia, puntos de decisión y reflexión.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–75 min
Género de historia: [misterio/aventura/empresa/sci-fi]

Diseña:
1) Historia marco (200–350 palabras) con 3 momentos de decisión.
2) En cada decisión:
- opciones de acción
- pregunta académica ligada (qué concepto aplica)
- respuesta esperada y explicación
3) Actividad:
- equipos eligen decisiones y justifican
4) Evaluación:
- 10 preguntas quiz basadas en la historia (con respuestas)
5) Cierre:
- qué conceptos se aprendieron y cómo se ven en “vida real”.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-040",
    title: "Plan de clase de “capstone” (proyecto final) con entregables, rúbrica y defensa",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Proyecto final completo: entregables, revisión, presentación y defensa con rúbrica.",
    prompt: `Curso/unidad: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: [1–4 semanas]
Producto final: [ ]

Diseña capstone:
1) Brief del proyecto (objetivo, requisitos, restricciones).
2) Entregables:
- propuesta
- borrador/prototipo
- entregable final
- defensa/presentación
3) Calendario con hitos y checkpoints.
4) Rúbricas:
- producto final
- proceso e iteración
- defensa oral (preguntas y criterios)
5) Antiplagio / autenticidad:
- evidencia de proceso requerida
6) Plantillas:
- propuesta
- bitácora de trabajo
- checklist final.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-041",
    title: "Plan de clase para enseñar con casos (case method): lectura, análisis y discusión",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Método del caso: prepara, analiza, discute y decide con criterios claros.",
    prompt: `Caso (si tienes, pégalo; si no, describe el tema): [ ]
Nivel: [ ]
Duración: 90 min

Crea:
1) Objetivos (5).
2) Pre-clase:
- preguntas guía de lectura (10)
- mini-quiz (8) con respuestas
3) En clase:
- agenda por minutos
- mapeo del caso (actores, objetivos, restricciones)
- análisis (alternativas + trade-offs)
- decisión final + justificación
4) Banco de preguntas del docente (12) con repreguntas.
5) Evaluación:
- rúbrica de participación y análisis
- exit ticket: recomendación en 5 líneas + 2 riesgos + 1 mitigación.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-042",
    title: "Plan de clase para enseñar ‘transferencia’: del ejemplo al caso nuevo",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Diseña para transferir: ejemplo base, variaciones, y caso nuevo no visto.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–75 min

Crea:
1) Ejemplo base (resuelto) + explicación.
2) 4 variaciones del ejemplo:
- cambia un supuesto
- cambia un parámetro
- cambia el objetivo
- añade una restricción
3) Caso nuevo (no visto) para resolver en equipos:
- plantilla de solución (pasos)
4) Evaluación:
- rúbrica que premia transferencia (no memorización)
- 8 preguntas de cierre (con respuestas)
5) Cierre:
- 5 heurísticas para reconocer “esto es el mismo patrón”.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-043",
    title: "Plan de clase con IA como tutor (seguro y ético): prompts, límites y verificación",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Integración de IA: prompts para aprender, verificación y prevención de dependencia.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–90 min
Herramienta IA: [ChatGPT/otra]
Política del curso: [permitida/limitada/prohibida en evaluaciones]

Crea plan:
1) Objetivos: aprendizaje + alfabetización IA.
2) Reglas éticas:
- qué se permite y qué no
- cómo citar uso de IA
- cómo verificar
3) Actividad:
- alumnos usan IA para explicar concepto y generar ejemplos
- luego deben verificar con fuentes/notas y corregir errores
4) Prompts seguros (10) para tutoría:
- explicar, preguntar, detectar errores, generar práctica
5) Evaluación:
- evidencia de aprendizaje sin IA (exit ticket o mini-prueba)
6) Cierre:
- checklist de verificación (10 pasos).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-044",
    title: "Plan de clase con aprendizaje basado en datos: mini-dataset y conclusiones",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Clase para analizar datos: preguntas, hipótesis, análisis y conclusiones responsables.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 75–90 min

Incluye:
1) Mini-dataset (inventado si no hay) con 12–20 filas y 4–6 variables (tabla en texto).
2) Preguntas de investigación (5) sobre el dataset.
3) Actividad:
- limpieza básica
- análisis (descriptivo, comparación, correlación simple si aplica)
- visual sugerido (descrito)
4) Guía de interpretación (qué se puede concluir y qué no).
5) Evaluación:
- reporte corto (estructura y rúbrica)
- mini-quiz (10 preguntas) con respuestas.
`,
    thumbnail: "",
  },
  {
    id: "edu-plan-045",
    title: "Plan de clase ‘mundo real’: conecta el tema a 3 profesiones y 3 casos",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Relevancia profesional: casos por profesión, actividades y evaluación aplicada.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60 min

Crea:
1) Introducción con relevancia:
- 3 profesiones donde se usa
- 3 casos reales (mini) por profesión
2) Actividad central:
- equipos eligen 1 profesión y resuelven 1 caso
- plantilla de solución + criterios
3) Presentación relámpago:
- 2 min por equipo
4) Evaluación:
- rúbrica aplicada (precisión, razonamiento, comunicación, límites)
- exit ticket: “cómo lo usarías tú en tu vida/trabajo”
5) Cierre:
- puente a siguiente tema (qué viene y por qué).`,
    thumbnail: "",
  },

  {
    id: "edu-plan-046",
    title: "Plan de clase para intervención corta (30 min): mini-objetivo, práctica y evaluación",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Clase corta súper eficiente: objetivo único, práctica concreta y evidencia al final.",
    prompt: `Tema puntual: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 30 min

Diseña:
1) Objetivo único (medible).
2) Agenda por minutos (0–30) con:
- hook 2 min
- explicación 8 min
- práctica guiada 10 min
- práctica rápida 7 min
- evaluación 3 min
3) 6 ejercicios de práctica (cortos) con respuestas.
4) Ticket de salida (2 ítems) + clave.
5) Nota docente: errores típicos y cómo corregirlos en 1 frase.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-047",
    title: "Plan de clase ‘aprendizaje por comparación’: A vs B (modelos, teorías, métodos)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Enseña comparando dos enfoques: similitudes, diferencias, cuándo usar cada uno.",
    prompt: `Enfoque A: [ ]
Enfoque B: [ ]
Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 60–75 min

Crea:
1) Tabla comparativa A vs B (inicial).
2) Agenda por minutos:
- explicación de A
- explicación de B
- comparación
- actividad de elección de método con casos
3) 6 casos:
- para cada caso: cuál conviene y por qué (respuesta esperada)
4) Evaluación:
- 12 preguntas (MCQ) con respuestas y explicación
5) Cierre:
- árbol de decisión textual para elegir A vs B.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-048",
    title: "Plan de clase para enseñar vocabulario/terminología técnica (glosario vivo)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Construye terminología: definiciones, ejemplos, usos correctos y quiz.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 50–60 min

Diseña:
1) Lista de 15–25 términos clave (si no, proponlos).
2) Actividad “glosario vivo”:
- equipos crean definiciones + ejemplos + anti-ejemplos
- revisión cruzada
3) Guía docente para corregir definiciones sin imponer.
4) Evaluación:
- quiz de 20 preguntas (15 MCQ + 5 completar) con respuestas
5) Cierre:
- plantilla para seguir ampliando el glosario durante el curso.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-049",
    title: "Plan de clase para preparar presentaciones (orales) con práctica y rúbrica",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Taller de presentaciones: estructura, story, slides, práctica, feedback y rúbrica.",
    prompt: `Tema de presentaciones: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: 90 min

Crea:
1) Objetivos (5).
2) Mini-lección:
- estructura (hook→problema→idea→evidencia→cierre)
- slides (reglas simples)
3) Taller:
- plantilla de guion (texto)
- práctica en parejas (rondas)
- checklist de feedback
4) Rúbrica:
- claridad, estructura, evidencia, voz, manejo del tiempo
5) Banco de “preguntas difíciles” (10) y cómo responder sin divagar.
6) Cierre:
- plan de mejora individual 7 días.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-050",
    title: "Plan de clase ‘todo-terreno’: genera plan según tema y contexto (plantilla reutilizable)",
    area: "Educación & Formación",
    category: "Planes de Clase",
    summary:
      "Plantilla universal para crear planes de clase consistentes y medibles en cualquier tema.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ ]
Duración: [ ]
Contexto: [presencial/online/híbrido]
Recursos: [ ]
Objetivo del curso: [ ]

Quiero una plantilla reutilizable LISTA para copiar/pegar que incluya:
1) Objetivos (Bloom) + criterios de éxito.
2) Activación de conocimientos previos (3 dinámicas).
3) Instrucción directa (guion breve) + ejemplos.
4) Práctica guiada + práctica independiente.
5) Diferenciación (apoyos y extensiones).
6) Evaluación formativa (mínimo 5 checks) + exit ticket.
7) Tarea y seguimiento.
8) Materiales listos:
- hoja de trabajo
- quiz (10 preguntas) con clave
- rúbrica breve del producto/actividad
9) Sección de “riesgos”:
- 8 errores típicos y cómo responderlos en vivo.`,
    thumbnail: "",
  },
];
