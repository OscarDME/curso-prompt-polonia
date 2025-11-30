// src/lib/prompts/text/edu-quizzes.js

export const textPromptsEduQuizzes = [
  {
    id: "edu-quiz-001",
    title: "Quiz completo por niveles (básico→intermedio→avanzado) con soluciones y explicación",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Genera un quiz escalonado con respuestas correctas y explicación pedagógica de cada opción.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel del público: [secundaria/universidad/profesional]
Objetivo: [diagnóstico/repaso/examen]
Formato: [opción múltiple / verdadero-falso / mixto]
Número de preguntas: 30

Crea un quiz de 30 preguntas:
- 10 básicas (comprensión)
- 10 intermedias (aplicación)
- 10 avanzadas (casos borde y razonamiento)

Para cada pregunta incluye:
1) Enunciado claro
2) 4 opciones (A, B, C, D)
3) Respuesta correcta
4) Explicación de por qué es correcta
5) Explicación de por qué cada distractor es incorrecto (una línea por distractor)
6) Habilidad evaluada (concepto específico)
7) Nivel de dificultad (B/I/A)

Cierre:
- Tabla de resultados (en texto) para interpretar puntaje:
  - 0–10: ...
  - 11–20: ...
  - 21–30: ...
- Lista de subtemas a reforzar según fallos típicos.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-002",
    title: "Quiz diagnóstico de prerrequisitos (detecta brechas antes de avanzar)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa prerequisitos del tema: identifica qué falta y sugiere ruta de refuerzo.",
    prompt: `Tema objetivo: [ESCRIBE AQUÍ]
Prerrequisitos esperados (si sabes): [LISTA] (si no, propón tú 10–15)
Nivel: [intermedio/avanzado]

Crea un quiz diagnóstico de 20 preguntas:
- 12 de conceptos prerrequisito
- 8 de mini-aplicación (micro problemas)

Para cada pregunta:
- Enunciado
- 4 opciones
- Respuesta correcta
- Explicación breve
- “Qué revela un error aquí” (qué brecha indica)

Al final:
- Diagnóstico por bandas (0–7, 8–14, 15–20) con recomendaciones.
- Plan de refuerzo de 7 días según la brecha detectada.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-003",
    title: "Quiz tipo examen con trampas (y guía para detectar la trampa)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena para examen difícil con preguntas trampa y señales para detectarlas rápido.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Número de preguntas: 20

Crea 20 preguntas estilo examen (opción múltiple):
- 8 normales (comprensión/aplicación)
- 8 difíciles (razonamiento)
- 4 trampa (intuición falla)

Para cada pregunta:
- Enunciado
- Opciones A–D (distractores realistas)
- Respuesta correcta
- Explicación completa (150–250 palabras si hace falta)
- “Por qué esto engaña” (si es trampa)
- Señal de detección en 10 segundos (heurística)

Cierre:
- 10 reglas de oro para evitar trampas en este tema.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-004",
    title: "Quiz mixto: opción múltiple + verdadero/falso + respuesta corta",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa profundidad real con formatos variados y criterios claros.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Crea un quiz mixto de 25 ítems:
- 12 opción múltiple (A–D)
- 8 verdadero/falso (incluye explicación)
- 5 respuesta corta (2–5 líneas de respuesta esperada)

Incluye para cada ítem:
- Enunciado
- Respuesta correcta
- Explicación
- Error típico
- Puntaje sugerido (total 100 pts)

Cierre:
- Rúbrica para respuestas cortas (criterios + ejemplos).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-005",
    title: "Quiz por subtemas (perfil de dominio): mapa de fortalezas y debilidades",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Crea un quiz agrupado por subtema con interpretación por áreas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Lista de subtemas (si tienes): [LISTA] (si no, propón 6–10)
Nivel: [intermedio/avanzado]

Crea un quiz de 30 preguntas:
- 3–5 preguntas por subtema
- Mezcla conceptual y aplicación

Para cada pregunta:
- Enunciado
- Opciones A–D
- Respuesta correcta
- Explicación
- Subtema etiquetado

Al final:
- Plantilla de reporte:
  - Subtema: aciertos/total + interpretación
- Recomendación de estudio por subtema (qué practicar y cómo).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-006",
    title: "Quiz de precisión conceptual: definiciones, supuestos, límites (nivel alto)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Ideal para nivel avanzado: distingue definiciones parecidas y supuestos ocultos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Número de preguntas: 20

Crea 20 preguntas centradas en:
- definiciones exactas
- supuestos necesarios
- casos donde el concepto NO aplica
- comparaciones A vs B

Formato:
- 15 opción múltiple
- 5 verdadero/falso “con justificación”

Incluye:
- Respuesta correcta
- Justificación breve pero rigurosa
- “Cómo detectarlo rápido” (pista para examen)
- Error común del alumno

Cierre:
- Mini-cheat sheet de definiciones clave.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-007",
    title: "Quiz de aplicación (problemas cortos) con cálculo/razonamiento",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Quiz práctico: micro-problemas; ideal para entrenar velocidad con verificación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Formato: [numérico / lógico / programación / casos]
Nivel: [intermedio/avanzado]
Preguntas: 20

Crea 20 micro-problemas:
Para cada uno:
- Enunciado
- 4 opciones A–D (con resultados plausibles)
- Respuesta correcta
- Solución breve (pasos mínimos) + verificación/sanity check
- Nivel (1–5)

Cierre:
- Estrategia de tiempo: cómo repartir minutos y cuándo saltar una pregunta.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-008",
    title: "Quiz de contraejemplos: detectar cuándo una regla falla",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena pensamiento experto: identifica casos límite y contraejemplos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Reglas típicas del tema: [LISTA] (si no, propón 6–10)

Crea 22 preguntas:
- 12: “¿Aplica la regla aquí?” (sí/no) con opciones
- 10: “elige el contraejemplo” (A–D)

Para cada pregunta:
- Enunciado
- Opciones
- Respuesta correcta
- Explicación: cuál supuesto se viola y qué implicación tiene
- ‘Regla corregida’ (cómo la diría un experto)

Cierre:
- Lista de 10 supuestos que debes revisar antes de aplicar reglas.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-009",
    title: "Quiz de selección de método (elige enfoque correcto y justifica)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa si el alumno sabe elegir método, no solo ejecutar.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Métodos/enfoques disponibles: [A, B, C, D] (si no, proponlos)

Crea 18 preguntas:
Para cada una:
- Caso (contexto + datos)
- Pregunta: “¿Qué método usarías?”
- Opciones A–D (métodos)
- Respuesta correcta
- Justificación: por qué ese método encaja (supuestos, trade-off)
- “Segundo mejor” (cuál sería y por qué)
- Error típico: elegir por costumbre

Cierre:
- Árbol de decisión textual (IF/THEN) para elegir método.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-010",
    title: "Quiz de lectura crítica: detectar falacias, huecos y sesgos",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Ideal para teoría: analiza argumentos y detecta fallos lógicos o metodológicos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Crea 15 preguntas basadas en mini-textos:
- Cada pregunta incluye un texto de 80–150 palabras (argumento/solución)
- Pregunta: ¿Qué está mal / qué falta / qué supuesto oculto hay?

Formato:
- 10 opción múltiple (tipo “diagnóstico”)
- 5 respuesta corta (2–4 líneas)

Incluye:
- Respuesta correcta
- Explicación detallada
- Versión corregida del argumento (cuando aplique)
- Criterios para calificar respuestas cortas

Cierre:
- Lista de 12 fallos típicos del tema (checklist).`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-011",
    title: "Quiz ‘flash’: 40 preguntas rápidas (con explicación mínima) para repaso",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Repaso ultrarrápido: muchas preguntas cortas para reforzar memoria activa.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [cualquiera]

Crea un quiz flash de 40 preguntas:
- 30 opción múltiple (A–D) de 1–2 líneas
- 10 verdadero/falso

Para cada pregunta:
- Respuesta correcta
- Explicación mínima (1–2 líneas)
- “Confusor típico” (qué opción engaña y por qué)

Cierre:
- Plan de repaso espaciado (7 días) usando este quiz.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-012",
    title: "Quiz con retroalimentación adaptativa (si fallas, te doy refuerzo)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Crea preguntas y también módulos de refuerzo según el tipo de error.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Diseña un quiz de 20 preguntas A–D.
Además, crea “ramas” de retroalimentación:
- Para cada pregunta, define 3 tipos de error (según distractor elegido).
- Para cada tipo de error:
  - qué concepto faltó
  - mini-explicación de refuerzo (80–150 palabras)
  - 1 mini-ejercicio inmediato
  - respuesta del mini-ejercicio

Cierre:
- Guía para usarlo como tutor 1:1 (cómo avanzar según errores).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-013",
    title: "Quiz tipo certificación (100 puntos) con secciones y calibración",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa dominio: secciones, puntajes y criterios de aprobación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Duración objetivo: [60–90 min]

Crea un examen tipo certificación (total 100 puntos):
- Sección A (conceptual): 12 preguntas (48 pts)
- Sección B (aplicación): 8 preguntas (32 pts)
- Sección C (casos borde/elección de método): 5 preguntas (20 pts)

Formato de cada pregunta:
- A–D
- Respuesta correcta
- Explicación
- Puntaje asignado
- Error común

Cierre:
- Estándar de aprobación (ej. 70/100)
- Diagnóstico por sección (qué reforzar según puntaje).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-014",
    title: "Quiz de terminología avanzada (jerga → significado → uso correcto)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa comprensión de términos y su uso correcto en contexto.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [avanzado]

Crea 25 preguntas:
- 15: elige la definición correcta
- 10: elige el uso correcto en una frase/caso

Para cada pregunta:
- Enunciado (incluye contexto)
- Opciones A–D
- Respuesta correcta
- Explicación + ejemplo correcto + ejemplo incorrecto
- Error típico

Cierre:
- Glosario compactado con los 25 términos.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-015",
    title: "Quiz de transformación de ideas: traduce entre representaciones (texto↔fórmula↔diagrama)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa si el alumno puede pasar de una representación a otra sin perder significado.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Representaciones posibles: [texto, fórmula, pseudocódigo, diagrama descrito]

Crea 20 preguntas:
- 8: de texto → fórmula/procedimiento
- 6: de fórmula/procedimiento → interpretación en texto
- 6: de diagrama descrito → predicción/resultado

Incluye:
- Respuesta correcta
- Explicación
- Error común (qué confusión representa)

Cierre:
- Checklist para traducir representaciones (10 pasos).`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-016",
    title: "Quiz de pensamiento probabilístico (incertidumbre, sesgos, decisiones)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena probabilística aplicada: escenarios y errores cognitivos.",
    prompt: `Tema/decisión: [ESCRIBE AQUÍ]

Crea 20 preguntas:
- 10 de conceptos (sesgos, interpretaciones)
- 10 de aplicación (escenarios con rangos)

Formato:
- A–D
- respuesta correcta
- explicación con sanity check

Incluye:
- 8 ‘preguntas trampa’ (falacia de tasa base, regresión a la media, etc.) y cómo detectarlas.
Cierre:
- Lista de 10 errores probabilísticos frecuentes + antídotos.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-017",
    title: "Quiz con mini-casos: 12 escenarios reales y preguntas integradoras",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Aprendizaje por casos: escenarios realistas con preguntas que integran conceptos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Industria/contexto: [educación/salud/negocio/ingeniería/etc.]

Crea 12 mini-casos (80–150 palabras cada uno).
Para cada caso crea 2 preguntas (total 24):
- 1 conceptual (supuestos, definición, límites)
- 1 aplicada (decisión, cálculo, selección de método)

Incluye:
- Opciones A–D
- Respuesta correcta
- Explicación detallada
- “Qué dato extra pedirías” para mejorar la decisión

Cierre:
- Recomendaciones de estudio según las fallas más comunes.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-018",
    title: "Quiz estilo ‘oral’: pregunta + respuesta esperada + repregunta",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Simula examen oral: respuestas modelo y repreguntas para profundidad.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [avanzado]

Crea 15 preguntas orales:
Para cada una:
- Pregunta principal (1 línea)
- Estructura esperada de respuesta (6–10 bullets)
- Respuesta modelo (120–250 palabras)
- 2 repreguntas difíciles
- 1 ejemplo + 1 caso límite
- Rúbrica corta (claridad, rigor, ejemplos, límites)

Cierre:
- Plantilla de respuesta oral en 4 pasos.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-019",
    title: "Quiz de ‘errores comunes’: identifica qué está mal en soluciones falsas",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Diagnóstico por fallos: detecta el paso incorrecto y el concepto que se rompió.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Crea 12 preguntas diagnóstico:
Para cada una:
- Enunciado breve del problema
- Una solución falsa (3–6 líneas)
- Pregunta: “¿Dónde está el error?”
- Opciones A–D (tipo de error/concepto)
- Respuesta correcta
- Explicación: qué falló y cómo corregirlo
- Mini-regla para evitarlo

Cierre:
- Lista de 12 errores recurrentes en este tema (checklist).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-020",
    title: "Quiz final + plan adaptativo: según tu puntaje, qué estudiar (ruta personalizada)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Quiz integrador con interpretación y plan de estudio según resultados por subtema.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]
Subtemas (si tienes): [LISTA] (si no, propón 8)

Crea un quiz de 32 preguntas:
- 4 preguntas por subtema (mezcla conceptual/aplicación)

Para cada pregunta:
- A–D
- respuesta correcta
- explicación
- etiqueta de subtema

Al final:
- Plantilla para sumar puntajes por subtema
- Diagnóstico por subtema (alto/medio/bajo)
- Plan de estudio de 10 días personalizado:
  - qué subtemas priorizar
  - qué tipo de práctica hacer (drills/ejercicios/casos)
  - mini-métricas de progreso por día`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-021",
    title: "Quiz ‘contraintuitivo’: 15 preguntas donde la intuición falla",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena intuición correcta con preguntas que rompen creencias típicas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]

Genera 15 preguntas (A–D) contraintuitivas.
Para cada una:
- Enunciado
- Opciones A–D (muy plausibles)
- Respuesta correcta
- Explicación: por qué tu intuición se equivoca
- “Antídoto mental”: regla/heurística para no caer
- Mini-ejemplo adicional

Cierre:
- Lista de 10 intuiciones falsas típicas del tema y su versión correcta.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-022",
    title: "Quiz de ‘completar el paso’: elige el siguiente paso correcto",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena procedimiento: saber qué hacer después y por qué.",
    prompt: `Tema/procedimiento: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Crea 20 preguntas:
En cada pregunta:
- Muestra estado actual o pasos 1–2 (en texto)
- Pregunta: “¿Cuál es el siguiente paso correcto?”
- Opciones A–D
- Respuesta correcta
- Explicación del porqué ese paso (y por qué los otros no)
- Error típico

Cierre:
- Checklist de procedimiento (pasos generales) resumido.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-023",
    title: "Quiz de ‘rango y estimación’: primero estima, luego selecciona respuesta",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena sanity checks: estimación y selección de respuesta plausible.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea 18 preguntas:
- Cada enunciado pide estimar un rango razonable
- Opciones A–D son rangos/resultados

Incluye:
- Respuesta correcta
- Estimación razonable (pasos)
- Cálculo breve (si aplica)
- Verificación
- Error típico (por qué se elige un rango absurdo)

Cierre:
- 10 heurísticas de estimación rápida.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-024",
    title: "Quiz para docentes: crea preguntas y distractores perfectos",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Genera preguntas con distractores basados en errores reales y explica su diseño.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel del alumnado: [ESCRIBE AQUÍ]

Genera 20 preguntas A–D.
Para cada pregunta:
- Respuesta correcta (key)
- 3 distractores diseñados:
  - distractor 1 = error de concepto típico
  - distractor 2 = confusión de términos
  - distractor 3 = error de procedimiento
- Explica el razonamiento de diseño de cada distractor (“qué error captura”)
- Explicación pedagógica de la respuesta correcta
- Dificultad (1–5)

Cierre:
- Guía para calibrar dificultad de un ítem (8 reglas).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-025",
    title: "Quiz de ‘reconocimiento vs recuerdo’: mezcla MCQ con respuesta libre",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evita ilusión por reconocimiento: combina opción múltiple con respuesta libre.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Crea 24 ítems:
- 12 opción múltiple (A–D)
- 12 respuesta libre (2–6 líneas)

Incluye:
- Respuestas correctas
- Guía de corrección para libre (rúbrica)
- Señales de falla comunes (qué revela un error)
- Recomendación: cómo repetir el quiz para máxima retención

Cierre:
- Plan de repaso espaciado de 14 días con este quiz.`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-026",
    title: "Quiz de ‘mapa conceptual’: completa conexiones y jerarquías",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa estructura mental del tema: relaciones, dependencias, jerarquía.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Subtemas (si no das, propón 10–15)

Crea un “quiz de mapa conceptual” con 20 ítems:
- 10 ítems: “elige la relación correcta” (A–D)
- 10 ítems: “ordena jerarquía” (da 4 opciones de orden)

Incluye:
- Respuesta correcta
- Explicación breve (por qué)
- Error común (confusión típica)

Cierre:
- Mapa conceptual modelo (en bullets indentados).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-027",
    title: "Quiz de casos borde: ¿cuándo NO aplica? (supuestos y límites)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena límites: identificar escenarios donde el método o concepto falla.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]

Genera 20 preguntas A–D:
- Cada pregunta describe un escenario
- Pregunta: “¿Aplica aquí? / ¿Qué supuesto se viola? / ¿Cuál es el fallo?”

Incluye:
- Respuesta correcta
- Explicación detallada
- Supuesto violado (etiquetado)
- “Cómo salvarlo” (alternativa/método correcto)

Cierre:
- Checklist de supuestos antes de aplicar el tema (12).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-028",
    title: "Quiz de ‘interpretación’: traduce resultados a conclusiones correctas",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa interpretación: evitar conclusiones exageradas y leer resultados con límites.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea 18 preguntas:
- enunciado incluye un ‘resultado’ (dato, salida, afirmación, métrica)
- pregunta: “¿qué conclusión está justificada?”

Formato:
- A–D (3 conclusiones incorrectas por exceso, causalidad indebida, o generalización)
- respuesta correcta + explicación
- error típico + antídoto (regla)

Cierre:
- 10 reglas para interpretar resultados sin sobreafirmar.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-029",
    title: "Quiz de ‘mini-historias’: aplica conceptos dentro de una narrativa",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Aprende por historias: cada pregunta viene con micro-caso narrativo.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Genera 15 preguntas.
Cada una contiene:
- micro-historia (60–120 palabras)
- pregunta conceptual o aplicada
- respuestas A–D
- respuesta correcta
- explicación detallada
- “dato faltante” que sería útil (1 línea)

Cierre:
- Lista de 8 patrones narrativos para inventar más casos.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-030",
    title: "Quiz ultra-avanzado (estilo máster): 25 preguntas duras con razonamiento",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Para nivel alto: preguntas duras, distractores expertos y explicaciones profundas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [máster/experto]
Preguntas: 25

Genera 25 preguntas A–D con estas reglas:
- Cada distractor debe ser plausible para un alumno bueno
- Debe evaluarse razonamiento, no memoria superficial
- Incluye 5 preguntas con casos borde
- Incluye 5 preguntas de comparación A vs B

Para cada pregunta:
- Respuesta correcta
- Explicación profunda (120–250 palabras)
- Por qué cada distractor es incorrecto
- Dificultad (1–5)
- “Idea clave” (1 línea) para recordarla

Cierre:
- Diagnóstico: cómo interpretar errores (por tipo) y qué estudiar después.`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-031",
    title: "Quiz para crear (metapreguntas): el alumno diseña preguntas y respuestas",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Aprendizaje superior: crear preguntas, distractores y explicaciones.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea un “quiz generativo” con 12 tareas:
Para cada tarea:
- Propón un subtema
- Pide al alumno crear:
  - 1 pregunta A–D
  - 1 respuesta correcta
  - 3 distractores basados en errores típicos
  - explicación de por qué cada distractor está mal
- Incluye un ejemplo modelo completo (solo en 4 de las 12 tareas)

Cierre:
- Rúbrica para evaluar la calidad de preguntas (10 criterios).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-032",
    title: "Quiz ‘doble capa’: pregunta + pregunta de seguimiento (profundiza)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Cada ítem tiene follow-up que exige explicar el porqué, evitando suerte.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Crea 15 ítems de doble capa:
- Parte 1: MCQ A–D
- Parte 2: follow-up (respuesta corta 2–4 líneas) justificando la elección

Incluye:
- Respuesta correcta (parte 1)
- Respuesta modelo (parte 2)
- Rúbrica para parte 2 (criterios)
- Error común y cómo detectarlo

Cierre:
- Cómo calificar rápido este formato (guía).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-033",
    title: "Quiz con ‘distractores por error’: cada opción representa un fallo distinto",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Diseño pedagógico: cada distractor corresponde a un error diagnosticable.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Crea 20 preguntas A–D donde:
- La opción correcta es conceptualmente precisa
- Cada distractor corresponde a un tipo de error:
  B = confusión de término
  C = supuesto oculto falso
  D = error de procedimiento/intuición

Para cada pregunta:
- Explica qué error representa cada distractor
- Da micro-refuerzo específico para cada error (2–4 líneas)

Cierre:
- Guía para usar el quiz como tutor (si eliges B/C/D, qué estudiar).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-034",
    title: "Quiz de velocidad (20 min): estrategia de tiempo + verificación rápida",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Diseñado para entrenar tiempo: preguntas más cortas, con checks rápidos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio]
Duración: 20 minutos
Preguntas: 20

Crea 20 preguntas A–D:
- enunciados cortos
- distractores plausibles

Incluye:
- Respuesta correcta
- Explicación breve (1–3 líneas)
- Verificación/sanity check (1 línea)
- Tiempo recomendado por pregunta (en segundos)

Cierre:
- Estrategia de ritmo (cuándo saltar, cuándo volver).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-035",
    title: "Quiz para repaso espaciado: 5 mini-quizzes (día 1,3,7,14,30)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Paquete para retención: mini-quizzes que se repiten con dificultad creciente.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [cualquiera]

Crea 5 mini-quizzes (10 preguntas cada uno):
- Día 1: fundamentos
- Día 3: aplicación
- Día 7: mezcla e intercalado
- Día 14: casos borde
- Día 30: examen integrador

Para cada mini-quiz:
- Preguntas A–D
- Respuestas correctas
- Explicaciones
- Subtemas cubiertos

Cierre:
- Guía de uso (cómo evaluar progreso y qué reforzar).`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-036",
    title: "Quiz de ‘corrige la afirmación’: selecciona la versión precisa",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena precisión: reescribe afirmaciones incorrectas y detecta matices.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Genera 20 ítems:
- Cada ítem da una afirmación problemática (exagerada, ambigua o falsa)
- Pregunta: “¿Cuál es la versión correcta?”
- Opciones A–D son reescrituras (solo una es precisa)

Incluye:
- Respuesta correcta
- Explicación de matiz (qué cambió y por qué)
- Error típico que produce la afirmación original

Cierre:
- Lista de 10 palabras peligrosas (siempre/nunca/garantiza...) y cómo usarlas bien.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-037",
    title: "Quiz ‘elige el supuesto’: identifica qué debe ser verdad para que aplique",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena lectura de supuestos: qué condición es necesaria para usar una regla.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]

Crea 18 preguntas:
- Enunciado describe un método/teorema/regla
- Pregunta: “¿Qué supuesto es necesario?”

Opciones A–D:
- 1 supuesto correcto
- 3 supuestos plausibles pero incorrectos/insuficientes

Incluye:
- Respuesta correcta
- Explicación
- Qué pasa si ese supuesto falla (mini-caso)
- Alternativa si falla

Cierre:
- Checklist de supuestos para el tema.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-038",
    title: "Quiz con mini-ejercicios numéricos: cálculo + interpretación",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa cálculo y también interpretación del resultado en contexto.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio]
Preguntas: 16

Para cada pregunta:
- enunciado con números/datos
- pide calcular algo
- y luego interpretar qué significa

Formato:
- A–D (resultados + interpretaciones como distractores)
- respuesta correcta
- solución breve + interpretación correcta
- sanity check

Cierre:
- 8 errores numéricos típicos (unidades, signos, escalas).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-039",
    title: "Quiz de ‘combinación de conceptos’: integra 2–3 ideas por pregunta",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Preguntas integradoras para medir comprensión real (no memorística).",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]

Crea 20 preguntas A–D donde cada pregunta requiera combinar 2–3 conceptos.
Para cada pregunta:
- Respuesta correcta
- Explicación detallada (por qué combina, qué pasos)
- Por qué cada distractor falla (1 línea c/u)
- Dificultad (1–5)
- Habilidades evaluadas

Cierre:
- Lista de combinaciones de conceptos más importantes (10).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-040",
    title: "Quiz final ‘todo en uno’: con reporte y recomendaciones personalizadas",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Quiz integrador con reporte por subtema y ruta concreta de estudio posterior.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]
Subtemas: [LISTA] (si no, propón 10)

Crea un quiz de 40 preguntas:
- 4 por subtema (mezcla conceptual/aplicación/casos borde)

Para cada pregunta:
- A–D
- respuesta correcta
- explicación
- etiqueta subtema
- “error típico” (1 línea)

Al final:
- Plantilla de reporte por subtema:
  - puntaje, diagnóstico, recomendación
- Ruta de estudio de 14 días:
  - qué subtemas priorizar
  - qué tipo de práctica (quizzes/ejercicios/casos)
  - métricas diarias de avance`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-041",
    title: "Quiz para clase: formas de discusión + preguntas de sondeo",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Pensado para docentes: preguntas que disparan discusión con respuestas esperadas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ESCRIBE AQUÍ]

Crea 20 preguntas para discusión en clase:
- 12 tipo MCQ A–D (voto rápido)
- 8 abiertas (preguntas de sondeo)

Incluye:
- Respuesta correcta/esperada
- Explicación pedagógica
- Pregunta de seguimiento para profundizar
- Error común que aparecerá en clase y cómo corregirlo

Cierre:
- Guion de 15 minutos para usar estas preguntas en clase.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-042",
    title: "Quiz estilo ‘peer instruction’: pregunta conceptual + discusión + revoto",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Formato Mazur: pregunta conceptual con distractores que generan debate.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Crea 15 preguntas tipo peer instruction:
Para cada una:
- Enunciado conceptual (no de cálculo)
- Opciones A–D (distractores basados en concepciones erróneas)
- Respuesta correcta
- Explicación para el instructor
- “Qué diría cada bando” (por qué un alumno elegiría B/C/D)
- Mini-guion para debate (2–3 preguntas guía)

Cierre:
- Guía para implementar revoto y explicar la respuesta.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-043",
    title: "Quiz con ‘autocalificación’: reglas para que el alumno se evalúe",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Incluye criterios para que el alumno interprete errores y se autoasigne tarea.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea 25 preguntas A–D.
Además:
- Agrupa en 5 categorías de habilidad (define cuáles).
- Cada pregunta etiqueta una categoría.
- Al final crea reglas:
  - si fallas ≥3 en categoría X → asigna práctica Y (con instrucciones)
- Proporciona recomendaciones específicas por categoría (drills + ejercicios + lecturas tipo).

Incluye:
- Respuestas correctas y explicaciones.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-044",
    title: "Quiz de 2 etapas: 1) test 2) explicación escrita de 5 respuestas",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Evalúa y obliga a justificar: tras contestar, el alumno explica 5 respuestas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Etapa 1: crea 20 preguntas A–D (con respuestas y explicación).
Etapa 2: selecciona 5 preguntas (las más importantes) y pide:
- explicación escrita (120–200 palabras) justificando la elección
- incluye respuesta modelo para esas 5
- rúbrica para calificar (claridad, rigor, ejemplos, límites)

Cierre:
- Guía para detectar “acierto por suerte” con esta etapa 2.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-045",
    title: "Quiz ‘de etiquetas’: identifica concepto, subtema y tipo de error",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Metacognición: no solo responder, también identificar qué concepto se usa.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Subtemas: [LISTA] (si no, propón 8)

Crea 24 preguntas A–D.
Para cada una, además de respuesta correcta, incluye:
- etiqueta subtema
- etiqueta concepto específico
- etiqueta ‘tipo de error’ para cada distractor (confusión, supuesto, procedimiento)

Cierre:
- Plantilla para registrar tus errores por tipo y corregirlos.`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-046",
    title: "Quiz ‘sin distractores’: verdadero/falso con justificación rigurosa",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "V/F avanzado con explicación: perfecto para supuestos, límites, matices.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Ítems: 25

Crea 25 afirmaciones verdadero/falso:
- 10 fáciles (fundamentos)
- 10 medianas (aplicación)
- 5 difíciles (matices, casos borde)

Para cada ítem:
- V/F
- Justificación (80–200 palabras)
- Si es falso, reescribe la afirmación para que sea verdadera
- Error típico que lleva a contestar mal

Cierre:
- 10 señales de “afirmación tramposa” (palabras y estructuras).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-047",
    title: "Quiz de ‘secuencias’: ordena pasos correctos (procedimiento)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Para temas procedimentales: elegir orden correcto y justificar.",
    prompt: `Tema/procedimiento: [ESCRIBE AQUÍ]
Nivel: [intermedio]

Crea 18 preguntas:
- Cada pregunta da 5 pasos desordenados
- Ofrece 4 opciones de orden (A–D)
- Respuesta correcta + explicación

Incluye:
- “Paso que más se olvida” (por qué)
- Caso borde donde el orden cambia (si aplica)

Cierre:
- Checklist de procedimiento ideal (resumen).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-048",
    title: "Quiz de ‘qué dato falta’: identifica información necesaria para decidir",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Entrena criterio: saber qué información pedir antes de aplicar el concepto.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea 16 preguntas:
- cada pregunta describe un caso incompleto
- pregunta: “¿Qué dato es más importante pedir?”

Opciones A–D:
- datos plausibles, solo uno desbloquea una buena decisión

Incluye:
- Respuesta correcta
- Explicación (por qué ese dato es clave)
- Qué harías con ese dato (siguiente paso)
- Error típico: pedir datos irrelevantes

Cierre:
- Lista de 12 preguntas universales para clarificar casos.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-049",
    title: "Quiz ‘doble verdad’: elige la opción ‘más correcta’ (matices)",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Matices avanzados: más de una opción puede ser parcialmente cierta, elige la mejor.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]

Crea 18 preguntas A–D donde:
- 2 opciones sean “medio verdaderas”
- 1 sea claramente falsa
- 1 sea la más correcta (precisa, con supuestos)

Incluye:
- Respuesta correcta
- Explicación comparando por qué es “más correcta”
- Supuestos implícitos
- Error típico

Cierre:
- Guía para elegir ‘la más correcta’ en exámenes (8 reglas).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-050",
    title: "Paquete docente: 5 quizzes de 10 preguntas (listas para usar) + claves",
    area: "Educación & Formación",
    category: "Quizzes",
    summary:
      "Quizzes listos para clase: 5 mini-evaluaciones con claves y explicaciones.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [ESCRIBE AQUÍ]
Subtemas (si no, propón 5)

Crea 5 quizzes separados (10 preguntas cada uno):
- Quiz 1: fundamentos
- Quiz 2: aplicación
- Quiz 3: errores comunes
- Quiz 4: casos borde
- Quiz 5: integrador

Para cada quiz:
- Preguntas A–D
- Respuestas correctas
- Explicación breve por pregunta
- Dificultad (1–5)

Cierre:
- Guía de calificación rápida
- Recomendación de qué hacer si la clase falla en un subtema.`,
    thumbnail: "",
  },
];
