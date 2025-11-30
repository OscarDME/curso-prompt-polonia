// src/lib/prompts/text/edu-ejercicios.js

export const textPromptsEduEjercicios = [
  {
    id: "edu-ex-001",
    title: "Generador de ejercicios por niveles (con pistas, soluciones y rúbrica)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Crea ejercicios graduados (fácil→difícil) con pistas, soluciones paso a paso y criterios de evaluación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel del estudiante: [secundaria / universidad / profesional]
Formato: [problemas numéricos / teoría / programación / casos]
Objetivo: [examen / práctica / proyecto]
Restricciones: [sin cálculo / con derivación / etc.]

Genera un set de 15 ejercicios:
- 5 básicos (dominio mínimo)
- 5 intermedios (transferencia)
- 5 avanzados (integración y casos borde)

Para CADA ejercicio incluye:
1) Enunciado claro (sin ambigüedad)
2) Qué evalúa (habilidad/concepto)
3) 2–3 pistas progresivas (de suave a directa)
4) Solución completa paso a paso
5) Verificación / comprobación (cómo checar que está bien)
6) Error común y cómo evitarlo
7) Criterios de calificación (rúbrica breve, 0–10)

Cierre:
- Mapa de cobertura (qué subtemas cubriste y cuáles faltan).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-002",
    title: "Banco de ‘drills’ (práctica deliberada): 30 ejercicios cortos para automatizar",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Ejercicios cortos y repetibles para dominar subhabilidades específicas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Subhabilidad a automatizar: [ej. derivar, detectar falacias, factorizar, balancear ecuaciones, etc.]
Nivel: [intermedio/avanzado]
Tiempo por ejercicio: [1–5 min]

Genera 30 drills:
- 10 de calentamiento (patrones repetidos)
- 10 de variación (cambia 1 condición por vez)
- 10 de mezcla (intercalado: mezcla tipos para evitar “piloto automático”)

Para cada drill:
- Enunciado
- Respuesta final (solo resultado)
- 1 micro-pista (máx 1 línea)
- “Qué patrón entrena”

Cierre:
- Plan de práctica de 7 días (sesiones, orden, repeticiones, criterios de avance).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-003",
    title: "Ejercicios tipo examen (con trampas) + cómo detectar cada trampa",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrenamiento para examen difícil: problemas-trampa, estrategia y verificación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Formato de evaluación: [test / desarrollo / oral]

Crea 12 ejercicios estilo examen:
- 4 conceptuales (definición, límites, supuestos)
- 4 de aplicación (cálculo/procedimiento)
- 4 trampa (intuición falla)

Para cada ejercicio incluye:
- Enunciado
- Por qué es trampa (si aplica)
- Estrategia correcta (pasos)
- Solución detallada
- Verificación (cómo comprobar)
- Error típico del estudiante
- “Señal” para detectar la trampa en 10 segundos

Cierre:
- 10 heurísticas para evitar trampas + 6 preguntas de auto-chequeo.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-004",
    title: "Ejercicios por ‘casos borde’: dominar límites y condiciones raras",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Ejercicios centrados en puntos donde el método suele fallar: casos límite, excepciones y supuestos rotos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Método/regla típica del tema: [ESCRIBE AQUÍ]

Genera 15 ejercicios de casos borde:
- 5 donde todo funciona “bonito”
- 5 donde un supuesto se viola
- 5 donde varios supuestos se rompen (o hay ambigüedad)

Para cada ejercicio:
- Enunciado
- Qué supuesto se cumple/viola
- Qué consecuencia tiene esa violación
- Solución paso a paso (y alternativa si el método estándar falla)
- “Lección del caso” (1–2 líneas)

Cierre:
- Checklist de supuestos antes de aplicar el método (12 ítems).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-005",
    title: "Ejercicios de ‘explicación’: responde como experto (no solo resolver)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Ejercicios donde la tarea es explicar y justificar; ideal para exámenes orales y dominio real.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Genera 10 ejercicios de explicación:
- 4: “Define y justifica”
- 3: “Compara A vs B”
- 3: “Critica un argumento/solución”

Para cada ejercicio:
- Enunciado
- Estructura esperada de respuesta (guion de 6–10 bullets)
- Respuesta modelo (200–450 palabras)
- 5 repreguntas difíciles que te haría un profesor
- Rúbrica (claridad, rigor, ejemplos, límites)

Cierre:
- 10 frases útiles para sonar claro y riguroso en un oral.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-006",
    title: "Ejercicios de ‘transferencia’: aplica el concepto fuera de su contexto",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena transferencia real: cambiar dominio, datos y objetivos sin cambiar el núcleo conceptual.",
    prompt: `Concepto: [ESCRIBE AQUÍ]
Dominio típico: [A]
Dominios nuevos (elige 2): [B], [C]

Genera 12 ejercicios:
- 4 en dominio A (para consolidar)
- 4 en dominio B (transferencia)
- 4 en dominio C (transferencia más dura)

Para cada ejercicio:
- Enunciado con contexto realista
- Qué parte del concepto se usa (principio)
- Pista principal (1–3 líneas)
- Solución detallada
- “Cómo saber si tu respuesta tiene sentido” (regla de sanity check)

Cierre:
- Lista de 8 trampas de transferencia y cómo evitarlas.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-007",
    title: "Ejercicios tipo ‘proyecto mini’: 5 retos integradores con entregables",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Retos integradores con entregables y rúbrica: ideal para aprendizaje basado en proyectos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [avanzado]
Tiempo por reto: [2–6 horas]
Herramientas permitidas: [ESCRIBE AQUÍ]

Crea 5 mini-proyectos:
Para cada uno:
- Contexto y objetivo
- Entregables (3–6)
- Requisitos técnicos/conceptuales
- Datos (si aplica, inventa dataset pequeño en texto)
- Pasos recomendados (sin hacerlo por completo)
- Criterios de evaluación (rúbrica con puntajes)
- “Extensión” para subir dificultad
- “Checklist final” antes de entregar

Cierre:
- Cómo presentar resultados (plantilla de informe).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-008",
    title: "Ejercicios de ‘diagnóstico’: detecta el error en soluciones falsas",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Aprende encontrando fallos: te doy soluciones incorrectas y tú diagnosticas dónde y por qué.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

Genera 10 ejercicios “diagnóstico”:
Para cada uno incluye:
- Enunciado del problema
- Una solución falsa (realista) con 2–4 pasos
- Preguntas:
  1) ¿En qué paso está el error?
  2) ¿Qué concepto/supuesto falló?
  3) ¿Cómo se corrige?
- Solución correcta completa
- “Cómo evitar este error en el futuro” (heurística)

Cierre:
- Lista de 12 errores recurrentes en este tema.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-009",
    title: "Ejercicios de ‘pregunta corta, respuesta profunda’ (tipo oral)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Preguntas cortas que exigen respuestas profundas y estructuradas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]

Genera 20 preguntas cortas (1 línea) que evalúen:
- definiciones
- límites
- supuestos
- intuición
- comparación de enfoques
- interpretaciones

Para cada pregunta:
- Respuesta modelo (80–180 palabras)
- 1 ejemplo breve
- 1 contraejemplo o caso límite
- 1 repregunta más difícil

Cierre:
- Guía para estructurar respuestas en 4 pasos (plantilla).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-010",
    title: "Ejercicios con ‘solución verificable’: incluye métodos de comprobación",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Ejercicios donde la verificación es parte del aprendizaje: sanity checks, alternativas, estimaciones.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Formato: [numérico / conceptual / programación]

Genera 12 ejercicios.
Para cada uno incluye:
- Enunciado
- Solución completa
- 3 métodos de verificación:
  1) sanity check (estimación/orden de magnitud)
  2) método alternativo (si existe)
  3) caso simple (prueba en un ejemplo trivial)
- Error común y prevención

Cierre:
- Checklist de verificación general (10 pasos).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-011",
    title: "Ejercicios ‘de construcción’: crea ejemplos y contraejemplos",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "El estudiante no solo resuelve: construye casos que cumplan o rompan propiedades.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 15 ejercicios de construcción:
- 8: construye un ejemplo que cumpla condiciones (A, B, C)
- 7: construye un contraejemplo que rompa exactamente una condición

Para cada ejercicio:
- Enunciado (condiciones claras)
- Solución con construcción paso a paso
- Explicación de por qué cumple/rompe
- Variación: cambia una condición y pregunta qué pasa

Cierre:
- “Kit de construcción” (heurísticas para inventar ejemplos).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-012",
    title: "Ejercicios con ‘escalera’: mismo problema, 6 niveles de profundidad",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Un solo problema se vuelve 6, subiendo complejidad gradualmente para dominio real.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Diseña 1 problema base (contexto realista) y luego crea una escalera de 6 niveles:

Nivel 1: comprensión (definir variables)
Nivel 2: aplicación directa
Nivel 3: variación (cambia un parámetro)
Nivel 4: caso borde
Nivel 5: optimización/elección de método
Nivel 6: generalización y prueba/justificación

Incluye:
- Enunciados de cada nivel
- Solución detallada por nivel
- “Qué habilidad entrena” por nivel

Cierre:
- Cómo evaluar si alguien domina el tema usando esta escalera.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-013",
    title: "Ejercicios ‘intercalados’: mezcla 5 tipos para evitar ilusión de aprendizaje",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Interleaving: mezcla tipos de ejercicio; mejora discriminación y selección de método.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tipos de ejercicio a mezclar (elige 5): [definición, cálculo, prueba, diagnóstico, transferencia, caso real, comparación]

Genera 25 ejercicios intercalados (orden mezclado):
Para cada uno:
- Enunciado
- Tipo (uno de los 5)
- Pista mínima
- Solución completa
- “Por qué este tipo confunde con otro” (1 línea)

Cierre:
- Guía: cómo elegir método correcto (árbol de decisión en bullets).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-014",
    title: "Ejercicios ‘con datos’: dataset pequeño + preguntas + soluciones",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Aprendizaje con datos: crea un dataset (texto) y problemas que lo usen.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Contexto: [escuela/empresa/salud/etc.]
Variables: [lista 6–12]

Crea un dataset pequeño (20–40 filas) en formato texto (CSV-like).
Luego crea 12 ejercicios basados en esos datos:
- 4 descriptivos
- 4 inferenciales/decisión (si aplica)
- 4 avanzados (casos borde, trade-offs)

Para cada ejercicio:
- Enunciado
- Pista
- Solución completa
- Verificación (cómo revisar)

Cierre:
- 8 preguntas extra sin solución para práctica.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-015",
    title: "Ejercicios ‘con restricciones’: aprende bajo condiciones (sin X, con Y)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Fuerza creatividad y dominio limitando herramientas o imponiendo reglas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Restricciones (elige 2–4):
- sin calculadora
- sin derivadas
- sin internet
- solo método gráfico
- solo argumento verbal
- límite de tiempo (2 min)
- solo ejemplos (sin teoría)

Genera 12 ejercicios adaptados a esas restricciones:
Para cada uno:
- Enunciado
- Qué habilidad entrena
- Solución que respete restricciones
- Error común
- Cómo verificar rápido

Cierre:
- Plan de práctica para mejorar bajo restricción.`,
    thumbnail: "",
  },

  {
    id: "edu-ex-016",
    title: "Ejercicios ‘con rubricado’: califica automáticamente con criterios",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Crea ejercicios donde la evaluación está predefinida: ideal para docentes.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tipo: [problema / ensayo / proyecto / presentación]
Nivel: [avanzado]

Genera 10 ejercicios.
Para cada uno incluye:
- Enunciado
- Respuesta esperada o solución modelo
- Rúbrica detallada (criterios + niveles + puntaje)
- Ejemplos de respuesta:
  - excelente
  - media
  - mala
- Comentarios de feedback (3) por nivel

Cierre:
- Plantilla de calificación reutilizable.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-017",
    title: "Ejercicios ‘de síntesis’: resume, conecta y generaliza",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Tareas de síntesis para nivel avanzado: conectar subtemas, crear marcos y generalizar.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 12 ejercicios de síntesis:
- 4: mapas conceptuales (instrucciones + solución ejemplo)
- 4: conecta A con B (argumento + ejemplo)
- 4: generaliza (de casos a regla)

Para cada ejercicio:
- Enunciado
- Pista de estructura (cómo responder)
- Respuesta modelo (150–350 palabras) o solución
- Criterios de evaluación

Cierre:
- 10 preguntas de “por qué” para profundizar cualquier respuesta.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-018",
    title: "Ejercicios ‘de comparación’: A vs B vs C con casos y decisión",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Comparación profunda entre enfoques: supuestos, trade-offs, selección y fallos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Enfoques a comparar: [A], [B], [C] (si no sabes, propón tú)

Genera 10 ejercicios:
- 4: identificar enfoque correcto para un caso
- 3: explicar trade-off con ejemplo
- 3: caso donde dos enfoques fallan y uno funciona

Para cada ejercicio:
- Caso (contexto + datos mínimos)
- Pregunta
- Solución modelo con justificación
- Error común
- “Regla de decisión” (1 línea)

Cierre:
- Árbol de decisión textual para elegir enfoque.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-019",
    title: "Ejercicios ‘tipo competición’: velocidad + precisión + verificación",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Rutina competitiva: cálculos/pensamiento rápido con verificaciones para no fallar.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Tiempo total: [20–40 min]

Crea una sesión tipo competición:
A) Sprint (10 min): 10 ejercicios cortos (respuesta final) + claves.
B) Medio fondo (15 min): 4 ejercicios medianos (solución breve).
C) Fondo (15 min): 1 ejercicio largo (solución completa + verificación).
D) Post-mortem:
- lista de errores probables en cada bloque
- recomendaciones de ritmo

Incluye:
- Soluciones y verificaciones para todo.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-020",
    title: "Ejercicios ‘de investigación’: formula preguntas y diseña evaluación",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Ejercicios para pensar como investigador: hipótesis, diseño, evidencia y crítica.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Contexto: [académico / industrial]

Genera 8 ejercicios tipo investigación:
Para cada uno:
- Pregunta de investigación
- Hipótesis (2)
- Qué evidencia necesitarías
- Diseño de evaluación (experimento/estudio/simulación)
- Riesgos de validez (3–5)
- Respuesta modelo (qué esperarías encontrar)

Cierre:
- Checklist para evaluar calidad de evidencia (12 puntos).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-021",
    title: "Ejercicios ‘para programación’: implementa, prueba, optimiza",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Para temas técnicos: ejercicios que obligan a implementar y testear con casos borde.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Lenguaje: [Python/JS/etc.]
Nivel: [intermedio/avanzado]

Genera 10 ejercicios de programación:
Para cada uno:
- Enunciado (inputs/outputs)
- Requisitos (complejidad, memoria, estilo)
- Casos borde (mínimo 5)
- Tests (mínimo 6)
- Solución de referencia (código)
- Explicación del enfoque
- Optimización posible (qué mejorar)

Cierre:
- Checklist de debugging para este tipo de tareas.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-022",
    title: "Ejercicios ‘con explicación inversa’: desde la solución deduce el problema",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Aprendizaje inverso: te doy una solución/resultado y tú reconstruyes el problema y el razonamiento.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 12 ejercicios inversos:
Para cada uno:
- Resultado final (número, afirmación, decisión, output)
- Fragmento de razonamiento (2–4 líneas)
- Tarea del alumno:
  1) reconstruir el enunciado posible
  2) completar los pasos faltantes
- Solución: un enunciado válido + resolución completa
- “Qué habilidad entrena”

Cierre:
- 8 tips para resolver ejercicios inversos.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-023",
    title: "Ejercicios ‘de lectura crítica’: detectar falacias, huecos y supuestos",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Ideal para teoría y ensayos: analiza argumentos con precisión.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea 10 ejercicios de lectura crítica:
Para cada uno:
- Un argumento/solución escrita (150–250 palabras) con 2–4 fallas posibles
- Preguntas:
  - identifica supuestos
  - detecta falacia o salto lógico
  - reescribe el argumento correctamente
- Solución modelo (análisis + versión corregida)
- Rúbrica (claridad, rigor, evidencia, contraejemplos)

Cierre:
- Lista de 15 falacias/saltos típicos en este tema.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-024",
    title: "Ejercicios ‘por objetivos’: comprender, aplicar, analizar, crear (Bloom)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Crea ejercicios alineados a Bloom: de comprender a crear soluciones nuevas.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 18 ejercicios:
- 4 Comprender (explicar con tus palabras)
- 4 Aplicar (resolver)
- 4 Analizar (comparar, descomponer)
- 3 Evaluar (criticar, justificar)
- 3 Crear (nuevo caso, nuevo método)

Para cada ejercicio:
- Enunciado
- Respuesta/solución modelo
- Pista
- Criterio de evaluación

Cierre:
- Cómo usar este set para estudiar en 7 días.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-025",
    title: "Ejercicios ‘de oralidad’: explicar en 60s, 3min y 8min",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena explicaciones orales con precisión y ejemplos, en tiempos distintos.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 10 prompts de explicación oral:
Para cada uno:
- Pregunta (1 línea)
- Estructura de respuesta
- Respuesta modelo en:
  A) 60 segundos
  B) 3 minutos
  C) 8 minutos
- 3 repreguntas difíciles
- 1 ejemplo y 1 caso límite

Cierre:
- Checklist para sonar claro bajo presión (12 puntos).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-026",
    title: "Ejercicios ‘de memoria activa’: flashcards avanzadas + confusores",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Flashcards potentes con confusores y ‘por qué no’ para aprender sin ilusión.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]

Crea 40 flashcards:
- 25 conceptuales (definiciones, supuestos, límites)
- 15 de aplicación (micro-problemas)

Para cada flashcard:
- Pregunta
- Respuesta
- Confusor (respuesta posible pero incorrecta) + por qué es incorrecta
- Señal para diferenciar
- Mini-ejemplo o metáfora

Cierre:
- Plan de repaso espaciado 14 días (calendario).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-027",
    title: "Ejercicios ‘por habilidades’: descomponer el tema en subskills y entrenarlas",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Divide un tema complejo en subhabilidades y crea ejercicios específicos para cada una.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio/avanzado]

1) Identifica 8–12 subhabilidades necesarias para dominar el tema.
2) Para cada subhabilidad:
- 3 ejercicios (de fácil a difícil)
- Pistas
- Soluciones
- Error común
- Métrica de dominio (cómo sé que la tengo)

Cierre:
- Ruta recomendada (orden de subhabilidades) + plan de 10 días.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-028",
    title: "Ejercicios ‘de generalización’: del caso particular a la regla",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Aprende generalizando: observa patrones en casos y formula reglas, con verificación.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 12 ejercicios:
- 6: te doy 3 casos y tú infieres la regla
- 6: te doy la regla y tú generas 3 casos que la cumplan y 1 que la rompa

Para cada ejercicio:
- Enunciado
- Solución (regla/casos)
- Justificación
- Verificación (cómo comprobar)

Cierre:
- Heurísticas para generalizar sin overfitting (8).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-029",
    title: "Ejercicios ‘tipo clínica’: toma decisiones con información incompleta",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena decisión bajo incertidumbre: hipótesis, preguntas, evidencia y acción.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Contexto: [clínico / negocio / ingeniería / educación]

Crea 8 casos de decisión:
Para cada caso:
- Situación (datos iniciales)
- Qué información falta (pero sería útil)
- 5 preguntas que harías
- 3 hipótesis alternativas
- Qué evidencia apoya/refuta cada hipótesis
- Decisión recomendada + plan de acción
- Riesgos y mitigaciones

Cierre:
- Checklist de decisión bajo incertidumbre (12 puntos).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-030",
    title: "Ejercicios ‘de síntesis final’: examen completo + soluciones + análisis de errores",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Un examen integrador completo con soluciones y guía de diagnóstico de fallos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Duración objetivo: [60–120 min]

Crea un examen completo:
Sección A (conceptual): 10 preguntas (con respuestas modelo)
Sección B (aplicación): 6 problemas (con soluciones paso a paso)
Sección C (avanzada): 2 casos integradores (con solución + verificación)

Además:
- Rúbrica total (100 puntos) y distribución por sección
- “Mapa de errores”: 15 errores comunes y qué significan (qué no entendiste)
- Plan de corrección: qué practicar según el error

Cierre:
- Lista de estudio final (checklist 20 ítems).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-031",
    title: "Ejercicios ‘con creatividad’: inventa tu propio problema y resuélvelo",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Genera problemas originales: enunciado, solución, verificación y caso borde.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Primero, enséñame a inventar problemas:
- 10 plantillas de enunciados (moldes) para este tema
- 10 variables que puedo cambiar para generar variantes
- 6 criterios de “buen problema” (ni trivial ni imposible)

Luego genera 8 problemas originales y para cada uno:
- Enunciado
- Solución completa
- Verificación
- Variación más difícil
- Variación con caso borde

Cierre:
- Cómo usar esto para estudiar con un buddy (dinámica).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-032",
    title: "Ejercicios ‘de corrección’: mejora una mala respuesta hasta que sea excelente",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Itera sobre respuestas: de mala → media → buena → excelente, con comentarios.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 10 ejercicios:
Para cada uno incluye:
- Pregunta
- Respuesta mala (con fallos típicos)
- Tarea: mejorarla a “media”, luego a “buena”, luego a “excelente”
- Solución modelo excelente (final)
- Comentarios de corrección en cada etapa (qué faltaba)

Cierre:
- Checklist de auto-corrección (12 ítems).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-033",
    title: "Ejercicios ‘con tiempo’: sets cronometrados + estrategia de ritmo",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Práctica con reloj para exámenes: set de 30/45/60 min con estrategia de ritmo.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Objetivo: [examen]
Duración del set: [30/45/60 min]

Crea 3 sets cronometrados:
- Set 1: velocidad (preguntas cortas)
- Set 2: precisión (preguntas medias)
- Set 3: integración (problema largo)

Para cada set:
- Lista de ejercicios (con solución)
- Tiempo recomendado por ejercicio
- Estrategia de ritmo (cuándo saltar, cuándo volver)
- Checklist de verificación rápida

Cierre:
- Plan de 1 semana con estos sets (progresión).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-034",
    title: "Ejercicios ‘con explicación escrita’: estructura tipo ensayo técnico",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Para materias teóricas: ejercicios de respuesta larga con estructura y rúbrica.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 8 preguntas de respuesta larga (ensayo técnico):
Para cada pregunta:
- Enunciado
- Estructura sugerida (introducción → tesis → desarrollo → contraargumento → cierre)
- Respuesta modelo (500–900 palabras)
- Fuentes/evidencia “tipo” (qué clase de evidencia usarías)
- Rúbrica (argumento, evidencia, precisión, límites, claridad)

Cierre:
- 10 conectores y frases útiles para escritura académica.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-035",
    title: "Ejercicios ‘con debate’: defiende una postura con evidencia y límites",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena argumentación: tesis, evidencia, contraargumento, síntesis.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Pregunta debatible: [ESCRIBE AQUÍ]

Genera 8 ejercicios de debate:
Para cada uno:
- Postura A y postura B
- Evidencia o razonamiento esperado para cada postura
- 5 preguntas de contraataque (cross-examination)
- Respuesta modelo A y B (150–300 palabras cada una)
- Síntesis: cuándo cada postura es válida (criterios)

Cierre:
- Rúbrica de debate (claridad, evidencia, honestidad intelectual).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-036",
    title: "Ejercicios ‘de modelado’: formaliza un fenómeno en variables y relaciones",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Convierte fenómenos a modelos: variables, supuestos, ecuaciones/reglas y validación.",
    prompt: `Tema/fenómeno: [ESCRIBE AQUÍ]
Nivel: [alto]

Crea 10 ejercicios de modelado:
Para cada uno:
- Contexto
- Qué se debe modelar
- Variables (lista)
- Supuestos
- Modelo propuesto (regla/ecuación/algoritmo)
- Cómo validarlo (qué datos, qué pruebas)
- Solución modelo

Cierre:
- Checklist de buen modelado (12 ítems).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-037",
    title: "Ejercicios ‘con analogías’: crea analogías correctas (y explica límites)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena a explicar: generar analogías útiles sin confundir por simplificación.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 12 ejercicios:
- 6: crea una analogía desde un dominio dado (cocina, música, deportes, etc.)
- 6: detectar el límite de una analogía dada (y corregirla)

Para cada ejercicio:
- Enunciado
- Solución modelo (analogía y mapeo)
- “Dónde se rompe” (caso límite)
- Cómo arreglarla o advertir al estudiante

Cierre:
- 10 reglas para construir buenas analogías técnicas.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-038",
    title: "Ejercicios ‘de priorización’: decide qué método usar y por qué",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "El foco no es resolver sino elegir enfoque correcto con justificación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Métodos disponibles: [lista A/B/C...]

Genera 15 ejercicios:
Para cada uno:
- Problema/caso
- Pregunta: “¿qué método usarías y por qué?”
- Solución modelo:
  - método elegido
  - supuestos
  - pasos
  - alternativa (segundo mejor)
- Error común: elegir método por costumbre
- Señal rápida para decidir

Cierre:
- Árbol de decisión textual (IF/THEN).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-039",
    title: "Ejercicios ‘con incertidumbre’: intervalos, escenarios y sensibilidad",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Problemas que obligan a considerar incertidumbre: escenarios y sensibilidad.",
    prompt: `Tema/decisión: [ESCRIBE AQUÍ]

Genera 10 ejercicios:
Para cada uno:
- Datos con rangos (no números únicos)
- Pide:
  1) calcular/decidir bajo 3 escenarios (optimista/base/pesimista)
  2) identificar variable más sensible
  3) proponer decisión robusta
- Solución completa con explicación
- Verificación/sanity check

Cierre:
- 8 errores al tratar incertidumbre.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-040",
    title: "Ejercicios ‘de metaconfusión’: distingue conceptos similares (A vs B)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Set para dejar de confundir conceptos parecidos: definiciones, tests y casos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Parejas que confundo: [A vs B], [C vs D], etc. (si no das, propone 5 comunes)

Genera 20 ejercicios:
- 10: clasifica casos (¿es A o B?)
- 5: explica diferencia con ejemplo y contraejemplo
- 5: “corrige esta frase” (tiene confusión)

Incluye:
- Soluciones con justificación
- “Test rápido” para distinguir cada pareja (1–2 preguntas)
- Errores comunes y cómo evitarlos

Cierre:
- Mini-cheat sheet de distinciones (bullets).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-041",
    title: "Ejercicios ‘de iteración’: te doy feedback como profesor (simulado)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Simula un profesor que evalúa y pide mejoras: iteración hasta calidad alta.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tipo de respuestas: [desarrollo / solución / ensayo / código]

Genera 6 tareas donde:
- Das el enunciado
- Das una respuesta inicial “del alumno” (media)
- Das feedback del profesor (duro pero justo)
- Muestras la versión mejorada
- Explicas qué cambió y por qué

Cierre:
- Plantilla de auto-feedback para que yo mismo itere.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-042",
    title: "Ejercicios ‘de automatización’: crea hábitos de práctica y seguimiento",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Diseña un sistema de práctica: sets, métricas, revisión de errores y progresión.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tiempo disponible: [min/día]
Objetivo: [examen/proyecto]

Crea un sistema:
1) 3 sets de ejercicios (corto/medio/largo) con ejemplos concretos.
2) Métricas de progreso (8–12).
3) Registro de errores:
   - categorías (10)
   - cómo corregir cada una
4) Progresión de 14 días:
   - qué hacer cada día
   - cómo ajustar si fallo
5) “Prueba final” con solución y rúbrica.

Incluye:
- 20 ejercicios tipo para alimentar el sistema.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-043",
    title: "Ejercicios ‘de calibración’: estima primero, calcula después",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena intuición cuantitativa: estimaciones y checks antes del cálculo formal.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 12 ejercicios:
Para cada uno:
- Pide primero una estimación (orden de magnitud / rango / aproximación)
- Luego pide el cálculo exacto (si aplica)
- Solución: estimación razonable + cálculo exacto
- Compara: cómo de lejos estaba la estimación y por qué
- Verificación y sanity checks

Cierre:
- Guía de estimación rápida (10 heurísticas).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-044",
    title: "Ejercicios ‘de lectura de gráficos’: interpreta, infiere, critica",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena interpretación de gráficos/figuras con preguntas avanzadas y soluciones.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tipo de gráficos: [línea, barras, dispersión, ROC, etc.]

Crea 10 ejercicios:
Para cada uno:
- Describe un gráfico (en texto) con ejes, tendencia, outliers
- Preguntas:
  1) interpreta tendencia
  2) infiere causa posible (con cautela)
  3) identifica sesgos/limitaciones
  4) qué dato extra pedirías
- Solución modelo completa

Cierre:
- Checklist de lectura crítica de gráficos (12).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-045",
    title: "Ejercicios ‘de comunicación’: explica lo mismo a 3 audiencias",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Practica comunicación: misma idea explicada a niño, estudiante y experto.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 10 ejercicios:
Para cada ejercicio:
- Pregunta o subtema
- Respuesta modelo para:
  A) 12 años (claro, analogía)
  B) estudiante universitario (más rigor)
  C) experto (preciso, límites)
- 2 ejemplos por audiencia
- 1 error común por audiencia

Cierre:
- Plantilla para adaptar explicación sin perder exactitud.`,
    thumbnail: "",
  },

  {
    id: "edu-ex-046",
    title: "Ejercicios ‘de síntesis extrema’: resume en 1 frase, 5 bullets, 1 página",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena comprensión: resumir un tema en distintos niveles sin perder lo esencial.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 12 ejercicios:
Cada uno pide resumir un subtema en:
1) 1 frase (máx 12 palabras)
2) 5 bullets (máx 1 línea cada uno)
3) 1 página (400–700 palabras) con ejemplo y límite

Incluye:
- Solución modelo para 4 de los ejercicios (los más difíciles).
- Rúbrica para evaluar resúmenes (claridad, exactitud, cobertura, ejemplo, límites).

Cierre:
- Errores típicos al resumir (10).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-047",
    title: "Ejercicios ‘de selección de variables’: define, mide, operacionaliza",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena a convertir conceptos en variables medibles y diseñar medición.",
    prompt: `Tema/constructo: [ESCRIBE AQUÍ] (ej. “motivación”, “calidad”, “riesgo”, “aprendizaje”)

Genera 10 ejercicios:
Para cada uno:
- Define el constructo con precisión
- Propón 3 variables medibles (operacionalización)
- Cómo medirlas (instrumento, escala, frecuencia)
- Posibles sesgos de medición (3)
- Solución modelo completa

Cierre:
- Checklist de operacionalización (12).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-048",
    title: "Ejercicios ‘de causalidad’: diseña el estudio o el experimento",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Práctica avanzada: plantear estudios causales con control de sesgos.",
    prompt: `Relación a investigar: [X afecta Y]
Contexto: [ESCRIBE AQUÍ]

Genera 8 ejercicios:
Para cada uno:
- Propón 2 diseños posibles (experimental y observacional)
- Variables de control/posibles confusores
- Qué datos recolectar
- Cómo analizar
- Limitaciones
- Solución modelo (diseño recomendado + por qué)

Cierre:
- Checklist de causalidad (12).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-049",
    title: "Ejercicios ‘de robustez’: prueba tu solución contra escenarios",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Entrena robustez: cambiar supuestos y evaluar si la solución se sostiene.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 10 ejercicios:
Para cada uno:
- Problema base
- Solución base (resuelta)
- 3 perturbaciones (cambia supuestos/parámetros)
- Recalcula/re-razona con cada perturbación
- Conclusión: qué tan robusta es la solución y por qué

Cierre:
- 10 heurísticas de robustez aplicables a cualquier problema.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-050",
    title: "Mega pack de ejercicios: 50 preguntas mixtas + soluciones (modo intensivo)",
    area: "Educación & Formación",
    category: "Ejercicios",
    summary:
      "Pack intensivo: conceptual, aplicación, diagnóstico, transferencia, síntesis.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Objetivo: [examen/proyecto]
Tiempo total: [2–4 horas]

Genera 50 ejercicios mixtos:
- 15 conceptuales
- 15 de aplicación
- 10 diagnóstico (soluciones falsas)
- 5 transferencia
- 5 síntesis/ensayo

Incluye:
- Soluciones completas para los 30 más importantes
- Pistas para los otros 20
- Rúbrica global (100 puntos)
- Plan de corrección basado en resultados:
  - si fallas en X → qué practicar
  - recursos/estrategias

Cierre:
- Checklist final de dominio (20 ítems).`,
    thumbnail: "",
  },
];
